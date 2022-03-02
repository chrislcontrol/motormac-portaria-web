import { AxiosResponse } from "axios";

export function isResponseOk(response: AxiosResponse): boolean {
    const statusCode = response.status
    return statusCode >= 200 && statusCode <= 299;
};