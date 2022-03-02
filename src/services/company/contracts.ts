import { ICompanyApi } from "../../apis/backend/models";

export interface IListCompanies {
    listAll: () => Promise<CompanyResponse[]>
}

export type ListCompaniesProps = {
    companyApi: ICompanyApi
}

export type CompanyResponse = {
    id: string;
    created: string;
    modified: string;
    name: string;
    document_number: string;
    city: string;
    state: string;
    main: string;
    zipcode: string;
};