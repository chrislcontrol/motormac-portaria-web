import { ICompanyApi } from "../../apis/backend/models";
import { BACKEND_MAX_GET_LIMIT } from "../../utils/constants";
import { CompanyResponse, IListCompanies, ListCompaniesProps } from "./contracts";


export default class ListCompanies implements IListCompanies {
    private companyApi: ICompanyApi

    constructor(listCompaniesProps: ListCompaniesProps) {
        this.companyApi = listCompaniesProps.companyApi
    }; 

    async listAll(): Promise<CompanyResponse[]> {
        const response = await this.companyApi.listCompanies({limit: BACKEND_MAX_GET_LIMIT})
        return response.data.results
    };
};