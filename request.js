const getTodo = (resource) => {
    const request = new XMLHttpRequest()

    return new Promise((resolve, reject) => {
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject('error getting results')
            }
        })

        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
        request.send()
    })

}

getTodo('todos.json').then(data => {
    console.log('promise resolved', data)
}).catch(err => {
    console.log('promise rejected: ', err)
})

getTodo((err, data) => {
    console.log('callback fired')
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})

// promises

const getSomething = () => {
    return new Promise((resolve, reject) => {
        //fetch something
        resolve('thi is the data')
        reject('rejected')
    });
}

getSomething().then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})