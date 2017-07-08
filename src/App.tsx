import * as React from 'react'
import { Provider } from 'react-redux'
import { Store } from '@/store'
import { Title } from "@/Title"
import { Form } from "./Form"
import "./App.scss"
const logoUrl =
    "http://grilljs.com//assets/grilljs-logo-aa3b9154ab582d803cb34e16b1aa25b6f47eb44624ef6a1d6c0746985f1f766e.png"

const App = (props: { store: Store }) =>
    <Provider store={props.store}>
        <div>
            <img width="120" src={logoUrl} />
            <Title desc="hello world" />
            <Form firstname="Grzegorz" />
        </div>
    </Provider>

export default App
