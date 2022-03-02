import { createContext, useEffect, useState } from "react";
import { makeValidateCompany } from "../services/company/factory";
import LocalStorage from "../utils/LocalStorage";
import { providerProps } from "./types";

const initialValue = {
    companyId: localStorage.getItem('companyId') || "",
    isCompanyIdValid: !!(localStorage.getItem('companyId') || ""),
    setCompanyId: () => { },
    isLoading: false,
    setIsLoading: () => { }
};

interface ICompanyContext {
    companyId: string
    isCompanyIdValid: boolean
    setCompanyId: (companyId: string) => void
    isLoading: boolean
    setIsLoading: (loadingState: boolean) => void
};

export const CompanyContext = createContext<ICompanyContext>(initialValue); 

export function CompanyProvider(providerProps: providerProps) {
    const [companyId, setCompanyId] = useState(initialValue.companyId);
    const [isLoading, setIsLoading] = useState(initialValue.isLoading);

    useEffect(() => {
        const recoveredCompanyId = localStorage.getItem('companyId');

        if (recoveredCompanyId) {
            setIsLoading(true);
            const validateCompany = makeValidateCompany()
            validateCompany.companyIsValid(recoveredCompanyId)
                .then((isValid) => {
                    if (!isValid) {
                        setCompanyId("");
                        LocalStorage.setCompanyId("");
                    }
                })
                .finally(() => {
                    setIsLoading(false)
                });
            
        };
    }, [])

    return (
        <CompanyContext.Provider
            value={{ isCompanyIdValid: !!companyId, companyId, setCompanyId, isLoading, setIsLoading }}
        >
            {providerProps.children}
        </CompanyContext.Provider>
    )
};
