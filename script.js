const getData = ({ url: url, data: data }) => {
    return fetch(url, {
        method: 'GET',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .catch(error => console.log(error));
    // .then(data => console.log(data));
};

const sendData = ({ url: url, data: data }) => {
    fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .catch(error => console.log(error));
};

getData({ url: 'db.json' }).then(data =>
    sendData({
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: JSON.stringify(data),
        method: 'POST',
    })
);
