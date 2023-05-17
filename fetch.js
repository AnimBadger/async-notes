fetch('https://jsonplaceholder.typicode.com/todos/').then((response) => {
    return response.json()
}).then(data => {
    console.log(data)
}).catch((err) => {
    console.log('rejected', err)
})