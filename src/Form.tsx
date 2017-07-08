import * as React from "react"

interface IState {
    firstname: string
}

export class Form extends React.Component<IState, IState> {
    state = { firstname: this.props.firstname }
    private handleFirtnameChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(this.state)
        /*2*/this.setState({ ...this.state, firstname: e.target.value })
    }
    /*3*/
    render() {
        return <input type="text" /*4*/ value={this.state.firstname || ''}
            /*1*/ onChange={e => this.handleFirtnameChange(e)} />
    }
}
