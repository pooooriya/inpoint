import { Layout } from "components";
import { RoleTypes } from "config/api";
import AXIOS from "config/axios.config";
import { API_URLS } from "constants/api.constants";
import { AppContext } from "context";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import { useContext, useEffect } from "react";
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
    if (router.isReady) {
      if (auth.isAuthenticated && auth.accessToken && auth.username) {
        dispatch({ type: AuthContextActionType.AUTH_COMPLETED, payload: auth });
        dispatch({
          type: EventContextActionType.EVENT_INFORMATION_COMPLETED,
          payload: event,
        });
        setCookie(null, "token", auth.accessToken, { expires: 0 });
        setCookie(null, "username", auth.username, { expires: 0 });
        router.push(
          {
            pathname: router.basePath + router?.query?.slug?.[0] || "",
          },
          undefined,
          {
            shallow: true,
          }
        );
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
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>{event.title}</title>
      </Head>
      <Layout>Loading...</Layout>
    </>
  );
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
            title: response?.data?.result?.title || "",
            player: response?.data?.result?.playerUrl || "",
            settings: [],
            link: "",
            description:
              response?.data?.result?.description || "رویداد بدون نام",
          },
        },
      };
    } else {
      // check event exist or not and treated as guest not host
      response = await AXIOS.get(
        `${API_URLS.CheckAvailable}?eventId=${ctx.query?.slug?.[0]}`
      );
      if (response?.data?.result) {
        if (ctx.query.slug[1]) {
          response = await AXIOS.post(API_URLS.Challenge, {
            EventId: ctx.query.slug[0],
            SessionKey: ctx.query.slug[1],
          });
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
                destination: `/challenge?event_name=${ctx.query?.slug?.[0]}`,
              },
            };
          }
        } else {
          return {
            redirect: {
              permanent: false,
              destination: `/challenge?event_name=${ctx.query?.slug?.[0]}`,
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
    return {
      notFound: true,
    };
  }
};
