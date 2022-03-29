import { ICarApi } from "../../apis/backend/cars/types";
import { makeCarApi } from "../../apis/backend/factories";
import { CreateCarUseCase } from "./CreateCarUseCase";

export function makeCreateCarUseCase() {
    return new CreateCarUseCase(makeCarApi());
    
}