import AuthApi from "../../apis/backend/auth/AuthApi";
import { AuthCredentials, AuthResponse } from "../../apis/backend/contracts";
import { makeAuthApi } from "../../factories/BackendApiFactory";
import { token, user } from "../../localStorageConstants";
import LocalStorage from "../../utils/LocalStorage";

class AuthService {
    private authApi: AuthApi

    constructor() {
        this.authApi = makeAuthApi();
    }

    async login({ username, password }: AuthCredentials): Promise<AuthResponse> {
        const response = await this.authApi.authenticate({ username: username, password: password })
        if (response.status != 200) {
            throw new Error(String(response.status))
        };

        LocalStorage.setUser({ username });
        LocalStorage.setToken(response.data.token);

        return response.data;

    }; 
}

export default new AuthService()
