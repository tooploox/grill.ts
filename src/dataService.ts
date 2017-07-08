import * as $ from "jquery"

export async function getData() {
    return await $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/1'
    })
}