import axios from 'axios';

export function getService(apiURL: string) {
    return axios({
        url: apiURL,
        method: 'get',
        timeout: 8000,
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(result => result.data)
        .catch(error => console.error(error))
}

