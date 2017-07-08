import * as React from "react"
import { IRootState } from './store/index'
import { Actions } from './store/app'
import { connect } from 'react-redux'

interface IStateProps {
    version: string
}
interface IActions {
    setVersion: (v: string) => void
}

export class SomeComponent extends React.Component<IStateProps & IActions, void> {
    render() {
        return <div>
            <h1>{this.props.version}</h1>
            <button onClick={() => this.props.setVersion(new Date().toString())}>Set Version as date</button>
        </div>
    }
}


function mapStateToProps(store: IRootState): IStateProps {
    return {
        version: store.app.version
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        setVersion: (v: string) => dispatch(Actions.setVersion(v))
    }
}

export const SomeContainer = connect(mapStateToProps, mapDispatchToProps)(SomeComponent)
