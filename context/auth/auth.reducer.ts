import { Roles } from "types";
import { AuthContextActionType, IAuthContextAction, IAuthContextState } from "types/context";

export const AuthReducer = (state: IAuthContextState, action: IAuthContextAction): IAuthContextState => {
    switch (action.type) {
        case AuthContextActionType.AUTH_COMPLETED:
            return { ...state, accessToken: action.payload.accessToken, isAuthenticated: true, role: action.payload.role, username: action.payload.username }
        case AuthContextActionType.NEED_COMPLETE_INFORMATION:
            return { ...state, isAuthenticated: false, role: Roles.CLIENT }
        default:
            return state;
    }
}
