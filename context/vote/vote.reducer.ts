import { IVoteContextAction, VoteContextActionType, IVoteContextState } from "types/context";
export const VoteReducer = (state: IVoteContextState, action: IVoteContextAction): IVoteContextState => {
    switch (action.type) {
        case VoteContextActionType.NEW_VOTE_RECIEVED:
            return { ...state, hasNewVote: true, needResetVote: false, trueAnswer: action?.payload?.trueAnswer, answers: action?.payload?.answers, showAnswer: action?.payload?.showAnswer, title: action?.payload?.title, questions: action?.payload?.questions }
        case VoteContextActionType.VOTE_CHECKED:
            return { ...state, hasNewVote: false }
        case VoteContextActionType.USER_ANSWERED_VOTE:
            return { ...state, hasNewVote: false, userIsAnswered: true, userAnswer: action.payload }
        case VoteContextActionType.USER_RESET_ANSWERS:
            return { ...state, userIsAnswered: false, userAnswer: 0 }
        case VoteContextActionType.RESET_VOTE:
            return { ...state, needResetVote: true }
        case VoteContextActionType.UNDO_RESET_VOTE:
            return { ...state, needResetVote: false }
        default:
            return state;
    }
}



