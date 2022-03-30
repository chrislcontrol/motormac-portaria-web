import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { makeListCarsUseCase } from '../services/cars/factories';
import LocalStorage from '../utils/LocalStorage';
import { EXTERNOS, INTERNOS, INTERNOS__CADASTRAR } from './constants';

const initialValues = {
    limit: 10,
    offset: 0, 
    cars: [{tag: ""}]
};


export default function () {
    const navigate = useNavigate()
    const listCarsUseCase = makeListCarsUseCase()
    const ownerCompanyDocumentNumber = LocalStorage.getCompanyId() || ""
    const [limit, setLimit] = useState(initialValues.limit); 
    const [offset, setOffset] = useState(initialValues.offset); 
    const [cars, setCars] = useState(initialValues.cars); 
    const [carsCount, setCarsCount] = useState(0)

    useEffect(() => {
        let mounted = true
        listCarsUseCase.listFleetCars({ owner_company_document_number: ownerCompanyDocumentNumber, limit, offset })
            .then(carsData => {
                if (mounted) {
                    setCars(carsData.results),
                        setCarsCount(carsData.count)
                };
            });
            
            return () => {mounted = false}
    }, [limit, offset]);

    return (
        <div>
            <div id="wrapper">
            <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0">
                    <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink" /></div>
                    <div className="sidebar-brand-text mx-3"><span>PORTARIA</span></div>
                </a>
                <hr className="sidebar-divider my-0" />
                <ul className="navbar-nav text-light" id="accordionSidebar">
                            <li className="nav-item">
                                <a className="nav-link active" href={INTERNOS}><i className="fas fa-table" /><span>Entrada</span>/ Saída de internos</a>
                                <a className="nav-link" href={EXTERNOS}><i className="fas fa-user" /><span>Entrada/ Saída de terceiros</span></a></li>
                </ul>
                </div>
            </nav>
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                    <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars" /></button>
                    <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group" />
                    </form>
                    <ul className="navbar-nav flex-nowrap ms-auto">
                        <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search" /></a>
                        <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                            <form className="me-auto navbar-search w-100">
                            <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search" /></button></div>
                            </div>
                            </form>
                        </div>
                        </li>
                        
                        <div className="d-none d-sm-block topbar-divider" />
                        <li className="nav-item dropdown no-arrow">
                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span></a>
                            <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400" />&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400" />&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400" />&nbsp;Activity log</a>
                            <div className="dropdown-divider" /><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400" />&nbsp;Logout</a>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </nav>
                <div className="container-fluid">
                    <h3 className="text-dark mb-4">Veículos internos</h3>
                    <div className="card shadow">
                    <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold">Veículos internos em viagem ou estacionados</p>
                    </div>
                    <div className="card-body">
                        <div className="row">
                        <div className="col-md-6 text-nowrap">
                                            <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label className="form-label">Mostrar&nbsp;
                                                <select className="d-inline-block form-select form-select-sm" onChange={event => setLimit(parseInt(event.target.value))}>
                                                    <option value={initialValues.limit}>{initialValues.limit}</option>
                                                    <option value={25}>25</option>
                                                    <option value={50}>50</option>
                                                    <option value={100}>100</option>
                                                </select>&nbsp;</label></div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-md-end dataTables_filter" id="dataTable_filter"><label className="form-label"><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Procurar placa" /></label></div>
                        </div>
                        </div>
                        <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                        <table className="table my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>Placa</th>
                                <th>Veículo</th>
                                <th>KM Atual</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
    
                        {cars.map(car => (
                            <tr onClick={() => console.log("clicou em" + car.tag)}>
                                <td>{car.tag}</td>
                                <td>{`${car.manufacturer} - ${car.model}`}</td>
                                <td>{car.km}</td>
                            </tr>
                        ))}

                                                
                        </tbody>
                        <tfoot>
                        <tr>
                            <td><button className="btn btn-primary" type="button" onClick={event => navigate(INTERNOS__CADASTRAR)} >Cadastrar veículo</button></td>
                            <td />
                        </tr>
                        </tfoot>
                    </table>
                        </div>
                        <div className="row">
                        <div className="col-md-6 align-self-center">
                                            <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing {offset + 1} to {offset + limit} of { carsCount }</p>
                        </div>
                        <div className="col-md-6">
                            <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                            <ul className="pagination">
                                <li className="page-item disabled"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <footer className="bg-white sticky-footer">
                <div className="container my-auto">
                    <div className="text-center my-auto copyright"><span>Copyright © Christian Silva 2022</span></div>
                </div>
                </footer>
            </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
            </div>
        </div>
        );
    }
