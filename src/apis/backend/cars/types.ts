import { AxiosResponse } from "axios";

export type createCarProps = {
    tag: string,
    model: string,
    manufacturer: string,
    km: number,
    isOurFleet: boolean,
    bossCompanyName?: string
};


export type CarResponseData = {
    "id": string,
    "created": Date,
    "modified": Date,
    "tag": string,
    "model": string,
    "manufacturer": string,
    "km": number,
    "is_our_fleet": boolean,
    "owner_company": string
}


export interface ICarApi {
    createCar(data: createCarProps): Promise<AxiosResponse<CarResponseData>>
};