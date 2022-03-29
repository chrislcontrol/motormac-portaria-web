import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyContext } from "../contexts/CompanyContext";
import { IListCompanies } from "../services/company/contracts";
import { makeListCompanies } from "../services/company/factory";
import LocalStorage from "../utils/LocalStorage";
import { INTERNOS } from "./constants";

const listCompanies: IListCompanies = makeListCompanies()
const initialValue = [<MenuItem key={"NaN"} value={"NaN"}>{"Selecione uma empresa."}</MenuItem>];

async function loadCompanies(options: any, setOptions: any) {
    const companies = await listCompanies.listAll()
    companies.forEach(company => setOptions([...options, <MenuItem key={company.id} value={company.document_number}>{company.name}</MenuItem>]))
};


export default function () {
    const [options, setOptions] = useState(initialValue);
    const [selectedCompany, setSelectedCompany] = useState("NaN");
    const { setCompanyId } = useContext(CompanyContext);
    const navigate = useNavigate()

    useEffect(() => {
        loadCompanies(options, setOptions);
    }, []);


    return (
        <FormControl fullWidth>
            <InputLabel id={"select-companies"}>{"Empresas"}</InputLabel>
            <Select
                onChange={event => setSelectedCompany(event.target.value)}
                labelId="select-company-label-id"
                id="select-company-id"
                value={selectedCompany}
                label="Empresa"
            >
                {options};
            </Select>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={event => {
                    event.preventDefault();
                    if (!selectedCompany || selectedCompany === "NaN") { return alert('Selecione uma empresa.')}; 
                    LocalStorage.setCompanyId(selectedCompany);
                    setCompanyId(selectedCompany);
                    navigate(INTERNOS);
                }}
            >
                Selecionar
            </Button>
        </FormControl>
    );
};
