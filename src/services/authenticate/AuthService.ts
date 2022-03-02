import AuthApi from "../../apis/backend/auth/AuthApi";
import { makeAuthApi } from "../../apis/backend/factories";
import { AuthCredentials, AuthResponse } from "../../apis/backend/models";
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

    async isTokenValid(token: string): Promise<boolean> {
        const response = await this.authApi.validateToken(token)

        if (!(response.status in [200, 401])) {
            throw new Error(String(response.status))
        }

        return response.status == 200
    };
}

export default new AuthService()
