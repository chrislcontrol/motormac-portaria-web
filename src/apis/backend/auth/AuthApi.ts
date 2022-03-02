import HttpClient from "../../../utils/HttpClient";
import { AuthCredentials } from "../models";

export default class AuthApi {
    private httpClient: HttpClient
    private path = 'auth'

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient
    };

    authenticate({username, password}: AuthCredentials) {
        return this.httpClient.post({path: this.path, body: {username: username, password: password}})

    };

    validateToken(token: string) {
        const headers = { Authorization: `Token ${token}` }
        const path = this.path + '/validate-token'

        return this.httpClient.post({path, requestConfig: {headers: headers}})
    }
};