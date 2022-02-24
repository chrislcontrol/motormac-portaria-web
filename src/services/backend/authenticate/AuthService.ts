import { throwError } from "rxjs";
import AuthApi from "../../../apis/backend/AuthApi";
import { AuthCredentials } from "../../../apis/backend/shared/auth/types";
import { makeAuthApi } from "../../../factories/BackendApiFactory";

export default class AuthService {
    private authApi: AuthApi

    constructor() {
        this.authApi = makeAuthApi()
    }

    login({username, password}: AuthCredentials) {
        const response = this.authApi.getToken({username: username, password: password})
        response.then(
            (response) => {
                return response.data.token
            }).catch((error) => {
                return new Error(error)
            })

    }
}