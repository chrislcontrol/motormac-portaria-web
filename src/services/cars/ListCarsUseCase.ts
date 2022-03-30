import { ICarApi, listCarParams, listFleetCarsParams } from "../../apis/backend/cars/types";
import { isResponseOk } from "../../utils/response";

export class ListCarsUseCase {
    constructor(private carApi: ICarApi) {
        this.carApi = carApi;
    };

    async listFleetCars(params: listFleetCarsParams) {
        const response = await this.carApi.listCars({...params, is_our_fleet: true})

        if (!isResponseOk(response)) { throw new Error() }
        
        return response.data
    };
}