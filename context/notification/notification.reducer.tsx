import { INotificationContextAction, INotificationContextState, NotificationType } from 'types/context';

export const NotificationReducer = (state: INotificationContextState, action: INotificationContextAction): INotificationContextState => {
  switch (action.type) {
    case NotificationType.NOTIFICATION_RAISED:
      return { ...state, isShow: true, message: action.payload }
    case NotificationType.CLEAR_NOTIFICATION: default:
      return { ...state, isShow: false, message: null }
  }
}

