import api from './axios';

export const updateIvr = (state, params) => {
    return new Promise((resolve, reject) => {
        api.get('/update-ivr', {
            params: {
                state, 
                ...params
            } 
        })
        .then(response => {
            if (response.ok){
                console.log('ivr update called successfully');
                return resolve(response);
            }
            return resolve(response);
        })
        .catch(err => {
            console.log('An error occured with the request'); 
            console.log(err); 
            return reject(err); 
        }); 
    }); 
}

export const joinConference = (body) => {

}