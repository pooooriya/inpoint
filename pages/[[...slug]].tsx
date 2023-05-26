import { Layout } from "components";
import { RoleTypes } from "config/api";
import AXIOS from "config/axios.config";
import { API_URLS } from "constants/api.constants";
import { AppContext } from "context";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { useContext, useEffect } from "react";
import { Roles } from "types";
import { AuthContextActionType, EventContextActionType } from "types/context";

type HomeProps = {
  auth: any;
  event: any;
};
const Home: NextPage<HomeProps> = ({ auth, event }) => {
  const { socket } = useContext(AppContext).state;
  const dispatch = useContext(AppContext).dispatch;
  const router = useRouter();

  useEffect(() => {
    if (auth.isAuthenticated && auth.accessToken && auth.username) {
      dispatch({ type: AuthContextActionType.AUTH_COMPLETED, payload: auth });
      dispatch({
        type: EventContextActionType.EVENT_INFORMATION_COMPLETED,
        payload: event,
      });
      setCookie(null, "token", auth.accessToken, { expires: 0 });
      setCookie(null, "username", auth.username, { expires: 0 });
      // router.push("/challenge?event_name=" + event.title);
      socket?.connect();
    } else {
      // destroyCookie(null, "token");
      // destroyCookie(null, "username");
      // router.push("/challenge?event_name=" + event.title);
    }
    return () => {
      socket?.disconnect();
      socket?.off();
    };
  }, []);

  return <Layout>Loading...</Layout>;
};

export default Home;

export const getServerSideProps = async (ctx: any) => {
  let response;
  try {
    const creds = parseCookies(ctx);
    if (creds.token && creds.username) {
      // we just check event is available or not !
      response = await AXIOS.get(API_URLS.GetEvent, {
        headers: {
          Authorization: `bearer ${creds.token}`,
        },
      });

      return {
        props: {
          auth: {
            isAuthenticated: true,
            username: response?.data?.result?.displayName || "",
            role: response?.data?.result?.role,
            accessToken: creds.token || "",
          },
          event: {
            title: response?.data?.result?.eventName || "",
            player: response?.data?.result?.eventPlayerUrl || "",
            settings: [],
            link: "",
            description:
              response?.data?.result?.eventDescription || "رویداد بدون نام",
          },
        },
      };
    } else {
      // check event exist or not and treated as guest not host
      response = await AXIOS.get(
        `${API_URLS.CheckAvailable}?eventId=${ctx.query.slug[0]}`
      );
      console.log(response?.data);

      if (response?.data?.result) {
        if (ctx.query.slug[1]) {
          response = await AXIOS.post(API_URLS.Challenge, {
            EventId: ctx.query.slug[0],
            SessionKey: ctx.query.slug[1],
          });
          console.log(response?.data);

          if (response?.data?.result?.role === RoleTypes.Authenticated) {
            return {
              props: {
                auth: {
                  isAuthenticated: true,
                  username: response?.data?.result?.displayName || "",
                  role: response?.data?.result?.role,
                  accessToken: response?.data?.result?.accessToken || "",
                },
                event: {
                  title: response?.data?.result?.eventName || "",
                  player: response?.data?.result?.eventPlayerUrl || "",
                  settings: [],
                  link: "",
                  description:
                    response?.data?.result?.eventDescription ||
                    "رویداد بدون نام",
                },
              },
            };
          } else {
            return {
              redirect: {
                permanent: false,
                destination: `/challenge?event_name=${ctx.query.event}`,
              },
            };
          }
        } else {
          return {
            redirect: {
              permanent: false,
              destination: `/challenge?event_name=${ctx.query.event}`,
            },
          };
        }
      } else {
        return {
          notFound: true,
        };
      }
    }
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
};
