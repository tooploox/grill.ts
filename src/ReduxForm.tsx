import * as React from 'react'
import { Field, reduxForm } from 'redux-form'

const SimpleForm = (props: any) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field name="firstName" component="input" type="text" placeholder="First Name" />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export const ReduxForm = reduxForm({ form: SimpleForm.name })(SimpleForm)
