import { IVotingOptionsState, VotingOptionAction, votingOptionsInitial } from "./voting-options.model";

export const votingOptionsReducer = (
    state: IVotingOptionsState = votingOptionsInitial, 
    action: VotingOptionAction
    ) => 
    {
        switch(action.type){
            case "ADD_VOTE" :{
                var currentOptions = state.options;
                var votedOnIndex = currentOptions.findIndex(c => c.id === action.payload.id);
                if(votedOnIndex >= 0){
                    currentOptions[votedOnIndex].voteCount += 1;
                }

                return {...state, options: currentOptions}
            }
            default:{
                return state;
            }
        }
    }