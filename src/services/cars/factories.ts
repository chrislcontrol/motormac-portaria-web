import { ICarApi } from "../../apis/backend/cars/types";
import { makeCarApi } from "../../apis/backend/factories";
import { CreateCarUseCase } from "./CreateCarUseCase";
import { ListCarsUseCase } from "./ListCarsUseCase";

export function makeCreateCarUseCase() {
    return new CreateCarUseCase(makeCarApi());
    
};

export function makeListCarsUseCase() {
    return new ListCarsUseCase(makeCarApi());
};