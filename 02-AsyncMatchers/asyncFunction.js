const axios = require('axios');

const fetchData = async (todoId) => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    return result.data;
}

module.exports = fetchData;