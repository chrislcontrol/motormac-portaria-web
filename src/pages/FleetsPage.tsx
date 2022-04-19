import { DataGrid, GridEvents } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { makeListCarsUseCase } from '../services/cars/factories';
import LocalStorage from '../utils/LocalStorage';
import { EXTERNOS, INTERNOS, INTERNOS__CADASTRAR } from './constants';

const carStatusChoices = {parked: "Parado", inTravel: "Em viagem"}

const initialValues = {
    limit: 10,
    offset: 0, 
    cars: [
        {id: "", tag: "", vehicle: "", currentKm: "", status: ""}
    ]
};

const columns = [
    { field: 'tag', headerName: "Placa", width: 300 },
    { field: "vehicle", headerName: "Veículo", width: 600 },
    { field: "currentKm", headerName: "KM Atual",  type: "number", width: 250 },
    { field: "status", headerName: "Status", width: 200 }
];


export default function () {

    const navigate = useNavigate()
    const listCarsUseCase = makeListCarsUseCase()
    const ownerCompanyDocumentNumber = LocalStorage.getCompanyId() || ""
    const [cars, setCars] = useState(initialValues.cars); 
    const [carsCount, setCarsCount] = useState(0)
    const [selectedCar, setSelectedCar] = useState(initialValues.cars[0])
    const [isLoadingData, setIsLoadingData] = useState(false)
    const [travelButton, setTravelButton] = useState(<div/>)

    useEffect(() => {
        let mounted = true
        setIsLoadingData(true)
        listCarsUseCase.listFleetCars({ owner_company_document_number: ownerCompanyDocumentNumber, limit: 999999, offset: 0 })
            .then(carsData => {
                if (mounted) {
                    const remoteCars = carsData.results
                    const mappedCars = remoteCars.map(car => {
                        return {
                            id: car.tag,
                            tag: car.tag,
                            vehicle: `${car.manufacturer} - ${car.model}`,
                            currentKm: car.km,
                            status: car.is_parked ? carStatusChoices.parked : carStatusChoices
                        }})
                    setCars(mappedCars),
                    setCarsCount(carsData.count)
                };
            });
            setIsLoadingData(false)
            return () => {mounted = false}
    }, []);

    useEffect(() => {
        let mounted = true
        console.log(selectedCar)

        if (mounted) {

            if (!selectedCar.id) setTravelButton(<div />);

            if (selectedCar.status === carStatusChoices.parked) {
                setTravelButton(<button
                    className="btn btn-primary"
                    type="button"
                    onClick={event => navigate(INTERNOS__CADASTRAR)}
                    style={{ margin: "10px" }}
                >Lançar viagem
                </button>)
            };
        
                                                                    
            if (selectedCar.status === carStatusChoices.inTravel) { setTravelButton(<div />) }
        }
        return () => {mounted = false}
    }, [selectedCar])

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
                                            
                        </div>
                        <div className="col-md-6">
                        </div>
                        </div>
                        <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={cars}
                                columns={columns}
                                pageSize={20}
                                rowsPerPageOptions={[25, 50, 100]}
                                checkboxSelection={false}
                                autoHeight={true}
                                density="compact"
                                editMode="row"
                                loading={isLoadingData}
                                hideFooterSelectedRowCount={true}
                                autoPageSize={true}
                                onCellClick={event => setSelectedCar(event.row)}
                            />

                        </div>
                        </div>
                            <div className="row">
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        type="button" 
                                        onClick={event => navigate(INTERNOS__CADASTRAR)}
                                    >Cadastrar veículo
                                    </button>
                                    
                                    {travelButton}
                                </td>

                        <div className="col-md-6">
                            

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
            </div>
            </div>
        </div>
        );
    }
