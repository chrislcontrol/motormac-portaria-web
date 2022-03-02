import { BACKEND_URL } from "../environments/environmentVars";
import HttpClient from "./HttpClient";

export function makeBackendHttpClient() {
    return new HttpClient(BACKEND_URL, `Token ${localStorage.getItem('token')}`)
};