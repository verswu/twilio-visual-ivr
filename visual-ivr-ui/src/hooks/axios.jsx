import axios from 'axios'; 

const apiRequests = () => {
    const api = axios.create({
        baseURL: 'https://visual-ivr-functions-4076-dev.twil.io',
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }); 

    return api; 
}

export default apiRequests();