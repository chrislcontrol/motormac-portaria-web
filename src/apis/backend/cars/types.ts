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
    id: string,
    created: Date,
    modified: Date,
    is_parked: Boolean,
    tag: string,
    model: string,
    manufacturer: string,
    km: number,
    is_our_fleet: boolean,
    owner_company: string
}; 

export type listCarResponseData = {
    count: number, 
    limit: number, 
    offset: number, 
    results: [CarResponseData]
}

export type listCarParams = {
    id?: string, 
    tag?: string, 
    manufacturer?: string, 
    km?: number,
    is_our_fleet?: boolean,
    owner_company_document_number?: string, 
    offset?: number, 
    limit?: number, 
    ordering?: string
};


export type listFleetCarsParams = {
    id?: string, 
    tag?: string, 
    manufacturer?: string, 
    km?: number,
    owner_company_document_number?: string, 
    offset?: number, 
    limit?: number, 
    ordering?: string
};


export interface ICarApi {
    createCar(data: createCarProps): Promise<AxiosResponse<CarResponseData>>
    listCars(params: listCarParams): Promise<AxiosResponse<listCarResponseData>>
};