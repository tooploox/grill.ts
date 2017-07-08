import * as React from 'react'

function handleOnClick(event: React.MouseEvent<HTMLButtonElement>) {
    console.log("Clicked", event.screenX)
}

export const Title = (props: { desc: string }) =>
    <div>
        <h1>{props.desc}</h1>
        <button onClick={handleOnClick}> Click me</button>
    </div>
