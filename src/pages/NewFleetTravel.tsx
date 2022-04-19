import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { makeCreateCarUseCase } from "../services/cars/factories";
import { INTERNOS } from "./constants";

export default function () {
    const navigate = useNavigate()
    const [tag, setTag] = useState("")
    const [model, setModel] = useState("")
    const [manufacturer, setManufacturer] = useState("")
    const [km, setKm] = useState(0)


    function handleSubmit(event: any) {
        event.preventDefault()
        

        const createCarUseCase = makeCreateCarUseCase()
        const car = createCarUseCase.createFleetCar({ tag, model, manufacturer, km })
        car.then(response => {
            alert('Veículo cadastrado com sucesso.')
            navigate(INTERNOS)
        })
            .catch(error => alert(error))
        
    };


    return React.createElement('div', { 'className': 'container' }, React.createElement('div', { 'className': 'card shadow-lg o-hidden border-0 my-5' }, React.createElement('div', { 'className': 'card-body p-0' }, React.createElement('div', { 'className': 'row' }, React.createElement('div', { 'className': 'col-auto col-lg-7 m-auto' }, React.createElement('div', { 'className': 'p-5' }, React.createElement('div', { 'className': 'text-center' }, React.createElement('h4', { 'className': 'text-dark mb-4' }, 'Cadastrar veiculo interno')), React.createElement('form', { 'className': 'user' }, React.createElement('input', {
        'className': 'form-control form-control-user',
        'type': 'text',
        'id': 'tag',
        'placeholder': 'Placa',
        'name': 'tag', 
        'onChange': event => setTag(event.target.value)
    }), React.createElement('input', {
        'className': 'form-control form-control-user',
        'type': 'text',
        'id': 'model-1',
        'placeholder': 'Modelo do veículo',
        'name': 'model', 
        'onChange': event => setModel(event.target.value)
    }), React.createElement('div', { 'className': 'mb-3' }, React.createElement('input', {
        'className': 'form-control form-control-user',
        'type': 'text',
        'id': 'manufacturer',
        'placeholder': 'Marca',
        'name': 'manufacturer', 
        'onChange': event => setManufacturer(event.target.value)
    })), React.createElement('div', { 'className': 'row mb-3' }, React.createElement('div', { 'className': 'col-sm-6 mb-3 mb-sm-0' }, React.createElement('input', {
        'className': 'form-control form-control-user',
        'type': 'number',
        'id': 'km',
        'placeholder': 'KM',
        'name': 'km', 
        'onChange': event => setKm(parseInt(event.target.value))
    }))), React.createElement('button', {
        'className': 'btn btn-primary d-block btn-user w-100',
        'id': 'btRegister',
        'type': 'button', 
        'onClick': handleSubmit
    }, 'Cadastrar'), React.createElement('hr', {}), React.createElement('hr', {})), React.createElement('div', { 'className': 'text-center' }), React.createElement('div', { 'className': 'text-center' }, )))))));
};