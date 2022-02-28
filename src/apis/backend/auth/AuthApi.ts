import { BACKEND_URL } from "../../../environments/environmentVars";
import HttpClient from "../../../utils/HttpClient";
import { AuthCredentials } from "../models";

export default class AuthApi {
    private httpClient: HttpClient
    private path: string

    constructor({httpClient}: {httpClient: HttpClient}) {
        this.httpClient = httpClient
        this.path = 'auth'
    }

    authenticate({username, password}: AuthCredentials) {
        const url = `${BACKEND_URL}/${this.path}`

        return this.httpClient.post({url: url, body: {username: username, password: password}})

    };
}