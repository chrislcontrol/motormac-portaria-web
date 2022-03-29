
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CompanyProvider } from "./contexts/CompanyContext";
import { EMPRESAS, EXTERNOS, INTERNOS, INTERNOS__CADASTRAR, LOGIN } from "./pages/constants";
import Fleets from "./pages/Fleets";
import Login from "./pages/Login";
import OtherCars from "./pages/OtherCars";
import RegisterFleetCar from "./pages/RegisterFleetCar";
import SelectCompany from "./pages/SelectCompany";
import LoginView from "./utils/viewModels/LoginView";
import PrivateView from "./utils/viewModels/PrivateView";


export function Root() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <CompanyProvider>
              <Routes>
                  <Route path='/' element={<LoginView><Login /></LoginView>} />
                  <Route path={LOGIN} element={<LoginView><Login /></LoginView>} />
                  <Route path={INTERNOS} element={<PrivateView><Fleets /></PrivateView>} />
                  <Route path={INTERNOS__CADASTRAR} element={<PrivateView><RegisterFleetCar /></PrivateView>} />
                  <Route path={EXTERNOS} element={<PrivateView><OtherCars /></PrivateView>} />
                  <Route path={EMPRESAS} element={<PrivateView hasCompanyValidation={false} ><SelectCompany /></PrivateView>} />
              </Routes>
          </CompanyProvider>
        </AuthProvider>
      </BrowserRouter>
    )
}
