const url = 'www.example.com/api/get/1';

const getData = async () => {

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

getData()
    .then(data => console.log(data))