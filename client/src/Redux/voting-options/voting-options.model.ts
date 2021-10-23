export interface IVotingOptionsState {
    options: IVotingOption[]
}

export interface IVotingOption {
    id: number,
    name: string,
    voteCount: number,
}

export const votingOptionsInitial: IVotingOptionsState = {
    options: []
}

export type VotingOptionAction = {type: "ADD_VOTE", payload: IVotingOption}