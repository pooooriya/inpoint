import { EventContextActionType, IEventContextAction, IEventContextState } from "types/context";

export const EventReducer = (state: IEventContextState, action: IEventContextAction): IEventContextState => {
    switch (action.type) {
        case EventContextActionType.EVENT_INFORMATION_COMPLETED:
            return { ...state, link: action.payload.link, description: action.payload.description, player: action.payload.player, settings: action.payload.settings, title: action.payload.title }
        case EventContextActionType.PARTICPANT_LIST_RECIEVIED:
            return { ...state, participants: action.payload };

        case EventContextActionType.USER_REMOVED_FROM_SESSION:
            const perviousState = [...state.participants];
            const newParticipant = perviousState.filter(n => n.id != action.payload);
            return { ...state, participants: newParticipant }
        default:
            return state;
    }
}
