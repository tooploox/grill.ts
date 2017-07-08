import * as Redux from 'redux'
import { routerReducer } from "react-router-redux"
import { reducer as formReducer } from "redux-form"
import createHistory from 'history/createBrowserHistory'

import * as app from "@/store/app"

export type Store = Redux.Store<IRootState>
export interface IRootState {
    routing: any
    app: app.IState,
    form: any,
}

const rootReducer = Redux.combineReducers<IRootState>({
    routing: routerReducer,
    app: app.reducer,
    form: formReducer,
    router: routerReducer
})

declare var window: any
const env: any = window || {}

export const history = createHistory()
export function createStore(initialState = {}): Store {
    const comp = Redux.compose(
        env.devToolsExtension ? env.devToolsExtension() : (f: any) => f) as any

    return Redux.createStore(rootReducer, initialState as IRootState, comp)
}
