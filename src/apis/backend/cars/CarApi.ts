import HttpClient from "../../../utils/HttpClient";
import LocalStorage from "../../../utils/LocalStorage";
import { createCarProps, ICarApi } from "./types";

export class CarApi implements ICarApi {
    private path = "cars"

    constructor(private httpClient: HttpClient) {
        this.httpClient = httpClient;
    };

    
    async createCar(data: createCarProps) {
        const headers = {
            "company-document-number": LocalStorage.getCompanyId() || ""
        }

        const body = {
            tag: data.tag,
            model: data.model,
            manufacturer: data.manufacturer,
            km: data.km,
            is_our_fleet: data.isOurFleet,
            boss_company_name: data.bossCompanyName
        }

        const response = await this.httpClient.post({
            path: this.path,
            body: body, 
            requestConfig: {headers}
        })

        return response
            
    };

}