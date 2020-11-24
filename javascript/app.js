const fetchData = async(searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: "3e155f78",
            s: searchTerm,
            // y: 2019
        }
    })
    console.log(response.data)
}

const input = document.querySelector('input');
input.addEventListener('input', (e) => {
    fetchData(e.target.value);
});