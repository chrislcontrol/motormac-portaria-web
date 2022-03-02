
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CompanyProvider } from "./contexts/CompanyContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
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
                  <Route path='/login' element={<LoginView><Login /></LoginView>} />
                  <Route path='/home' element={<PrivateView><Home /></PrivateView>} />
                  <Route path='/company' element={<PrivateView hasCompanyValidation={false} ><SelectCompany /></PrivateView>} />
              </Routes>
          </CompanyProvider>
        </AuthProvider>
      </BrowserRouter>
    )
}
