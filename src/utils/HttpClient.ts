import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export type HttpGETType = {
    path: string, 
    requestConfig?: AxiosRequestConfig
}

export type HttpPostType = {
    path: string, 
    body?: object, 
    requestConfig?: AxiosRequestConfig
}

export default class HttpClient {
    private baseURL: any
    private axiosInstance: AxiosInstance

    constructor(baseURL: any, authorization?: string) {
        this.baseURL = baseURL;
        this.axiosInstance = axios.create({ baseURL: this.baseURL });

        if (authorization) { this.axiosInstance.defaults.headers.common['authorization'] = authorization };
    };

    get(props: HttpGETType) {
        return this.axiosInstance.get(props.path, props.requestConfig)
    };

    post(props: HttpPostType) {
        return this.axiosInstance.post(props.path, props.body, props.requestConfig); 
    };
}