import { AxiosResponse } from "axios"
import { CompanyFilter } from "./company/types"

export type AuthCredentials = {
    username: string, 
    password: string
}

export type AuthResponse = {
    token: string
}

export interface ICompanyApi {
    listCompanies(companyFilter?: CompanyFilter): Promise<AxiosResponse>
};