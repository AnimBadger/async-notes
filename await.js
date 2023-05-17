// async & await

const getTodo = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todoss/');

    if (response.status !== 200) {
        throw new Error('can not fetch the data')
    }

    const data = await response.json();
    return data;
};

getTodo()
    .then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err.message)
    })