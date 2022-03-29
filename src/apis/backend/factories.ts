import AuthApi from "./auth/AuthApi";
import HttpClient from "../../utils/HttpClient";
import { BACKEND_URL } from "../../environments/environmentVars";
import CompanyApi from "./company/CompanyApi";
import { makeBackendHttpClient } from "../../utils/factories";
import { CarApi } from "./cars/CarApi";


export function makeAuthApi() {
    return new AuthApi(new HttpClient(BACKEND_URL))
};

export function makeCompanyApi() {
    const httpClient = makeBackendHttpClient()
    return new CompanyApi(httpClient)
};

export function makeCarApi() {
    return new CarApi(makeBackendHttpClient())
};
