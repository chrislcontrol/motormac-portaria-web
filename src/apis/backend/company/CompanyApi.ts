import { AxiosResponse } from "axios";
import HttpClient from "../../../utils/HttpClient";
import { ICompanyApi as ICompanyApi } from "../models";
import { CompanyFilter } from "./types";

export default class CompanyApi implements ICompanyApi{
    httpClient: HttpClient;
    path: string = 'company'

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;

    };

    listCompanies(companyFilter: CompanyFilter): Promise<AxiosResponse> {
        return this.httpClient.get({ path: this.path, requestConfig: {params: companyFilter} });
    };
    
};