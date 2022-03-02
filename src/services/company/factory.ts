import { makeCompanyApi } from "../../apis/backend/factories";
import ListCompanies from "./ListCompanies";
import { ValidateCompany } from "./ValidateCompany";

export function makeListCompanies() {
    const companyApi = makeCompanyApi()

    return new ListCompanies({ companyApi });
}; 

export function makeValidateCompany() {
    return new ValidateCompany(makeCompanyApi());
};