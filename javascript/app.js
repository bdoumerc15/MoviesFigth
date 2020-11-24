const fetchData = async() => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: "3e155f78",
            s: 'avengers'
        }
    })
    return response.data;
}

console.log(fetchData());