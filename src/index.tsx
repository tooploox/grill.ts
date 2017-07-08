import * as React from "react"
import { render } from "react-dom"
import { AppContainer } from "react-hot-loader"

import { createStore } from '@/store'
import App from "@/App"

const store = createStore()

const renderApp = (App: any) =>
    render(<AppContainer><App store={store} /></AppContainer>, document.getElementById("app"))

renderApp(App)
if (module.hot)
    module.hot.accept("./App", () => renderApp((require("./App") as any).default))
