import AuthApi from "../apis/backend/AuthApi";
import HttpClient from "../utils/HttpClient";


export function makeAuthApi() {
    return new AuthApi({httpClient: new HttpClient()})
}