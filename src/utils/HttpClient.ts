import axios from 'axios'

export default class HttpClient {

    get({url, headers, queryParams}: {url: string, headers: any, queryParams: object}) {
        return axios.get(url, { params: queryParams, headers: headers })
    }

    post({url, headers, body}: {url: string, headers?: any, body?: object}) {
        return axios.post(url, body, { headers: headers })
    }
    

}