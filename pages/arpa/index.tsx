import React, { PropsWithChildren, useContext, useEffect, useState } from 'react'
import AXIOS from 'config/axios.config'
import { API_URLS } from 'constants/api.constants'
import { Roles } from 'types'
import Config from 'inpoint.config'
import { Button, LoadingButton } from 'components/Forms/Button'
import Image from 'next/image'
import { AppContext } from 'context'
import { AuthContextActionType, EventContextActionType } from 'types/context'
import { useRouter } from 'next/router'
import { Input } from 'components/Forms/Input'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { destroyCookie, setCookie } from 'nookies'


interface ArvanCloudAuthenticationProps extends PropsWithChildren {
    auth: any
    event: any
}

type FormInput = {
    username: string
}

const ArvanCloudAuthentication = ({ auth, event }: ArvanCloudAuthenticationProps) => {
    const { control, handleSubmit, formState: { isDirty, isValid, isSubmitting }, getValues, reset } = useForm<FormInput>({
        defaultValues: {
            username: ""
        }
    });

    const [needCreds, setNeedCreds] = useState(false);
    const dispatch = useContext(AppContext).dispatch;
    const router = useRouter();
    useEffect(() => {
        let timeOutId = setTimeout(() => {
            if (auth.role == Roles.CLIENT) {
                dispatch({ type: AuthContextActionType.NEED_COMPLETE_INFORMATION })
                setNeedCreds(true);
            } else if (auth.role == Roles.HOST) {
                dispatch({ type: AuthContextActionType.AUTH_COMPLETED, payload: auth })
                dispatch({ type: EventContextActionType.EVENT_INFORMATION_COMPLETED, payload: event })
                setNeedCreds(false);
                setCookie(null, 'token', auth.token)
                setCookie(null, 'username', auth.username)
                //go to main page cause its host
                //todo: check availability of event to push to another page 
                //todo: emmit user join room here
                router.push(`/${event.title}`)
            }
        }, 3000);
        return () => {
            clearTimeout(timeOutId);
        }
    }, [])

    const onSubmit: SubmitHandler<FormInput> = async (data) => {
        await AXIOS.post(API_URLS.ARPA_COMPLETE_USER_CREDS, {
            first_name: data.username,
            last_name: "",
            phone_number: "",
            event_name: event.title,
        }).then(response => {
            dispatch({
                type: AuthContextActionType.AUTH_COMPLETED, payload: {
                    role: Roles.CLIENT,
                    username: data.username,
                    accessToken: response?.data?.data?.token ?? "",
                }
            })
            if (response?.data?.data?.token) {
                setCookie(null, 'token', response?.data?.data?.token)
                setCookie(null, 'username', data?.username)
                router.push(`/${event.title}`)
            } else {
                destroyCookie(null, 'token')
                destroyCookie(null, 'username')
                router.push("/404")
            }
        }).catch(err => {
            sessionStorage.removeItem("accessToken")
            sessionStorage.removeItem("username")
            router.push("/404")
        })
    }

    return (
        <div className='bg-primary-1100 h-screen w-screen flex justify-center items-center'>
            <div className='p-5 text-primary-400 text-center font-bold'>
                {!needCreds ? (<>
                    <div className='mb-5'>
                        <LoadingButton className='w-[30px] h-[30px]' />
                    </div>
                    <h2 className='text-sm mb-3'>{Config.notifications.user_in_land_page.message}</h2>
                    <h3 className='text-sm'>{Config.notifications.user_in_land_page.description}</h3>
                </>) : (
                    <>
                        <h2 className='mb-5 text-sm'>{Config.notifications.user_need_complete_info}</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="[&_button]:mt-5">
                            <Controller
                                name="username"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <Input type="text" variant='primary' lable='نام نمایشی شما در رویداد' {...field} />}
                            />

                            <Button type='submit' variant='secondary' loading={isSubmitting} disabled={!isDirty && !isValid} title='ورود به رویداد' />
                        </form >
                    </>
                )}
                <div className="flex flex-col px-5 pt-5 self-start fixed bottom-[100px] left-1/2 -translate-x-1/2 ">
                    <Image src="/assets/images/logo.svg" width={60} height={60} />
                </div>
            </div>
        </div>
    )
}


export default ArvanCloudAuthentication;




export const getServerSideProps = async ({ query }: { query: { token: string, event_name: string } }) => {
    if ((!query.token && !query.event_name) || (!query.event_name)) {
        return {
            notFound: true,
        }
    }
    let response;
    try {
        response = await AXIOS.post(`${API_URLS.ARPA_AUTH_URL}`, {
            event_name: query.event_name
        }, {
            headers: query.token ? {
                'Authorization': `bearer ${query.token}`
            } : {}
        })

        return {
            props: {
                auth: {
                    isAuthenticated: response?.data?.data?.role === Roles.HOST && query?.token ? true : false,
                    firstName: response?.data?.data?.first_name || '',
                    lastName: response?.data?.data?.last_name || '',
                    role: response?.data?.data?.role,
                    accessToken: query?.token || ''
                },
                event: {
                    title: response?.data?.data.name || '',
                    player: response?.data?.data?.player_url || '',
                    settings: response?.data.data?.settings || [],
                    link: response?.data?.data?.client_url || ''
                }
            }
        }
    } catch (error) {
        response = null;
        return {
            notFound: true,
        }
    }

}