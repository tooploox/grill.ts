import * as redux from 'redux'

export namespace Actions {
}

export interface IState {
    version: string
}

const initialState: IState = {
    version: "0.0.1",
}

export function reducer(state = initialState, action: redux.Action): IState {
    return state
}
