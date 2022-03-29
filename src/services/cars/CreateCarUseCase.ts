import { ICarApi } from "../../apis/backend/cars/types";
import { isResponseOk } from "../../utils/response";
import { createFleetCarProps } from "./types";

export class CreateCarUseCase {
    constructor(private carApi: ICarApi) {
        this.carApi = carApi
    }; 

    async createFleetCar(props: createFleetCarProps) {
        const response = await this.carApi.createCar({...props, isOurFleet: true})

        if (!isResponseOk(response)) {
            console.log(response)
            throw new Error()
        }
        
        return response.data;
    };

};