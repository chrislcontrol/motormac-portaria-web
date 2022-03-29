import { ICompanyApi } from "../../apis/backend/models";

export class ValidateCompany {
    private companyApi: ICompanyApi

    constructor(companyApi: ICompanyApi) {
        this.companyApi = companyApi;
    }; 

    async companyIsValid(companyId: string): Promise<boolean> {
        const response = await this.companyApi.listCompanies({ document_number: companyId }).catch(error => error);

        if (response.isAxiosError) return false;
        
        return !!(response.data.count >= 1);
    };
};