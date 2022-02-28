
import { Home } from "@mui/icons-material";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import LoginView from "./utils/viewModels/LoginView";
import PrivateView from "./utils/viewModels/PrivateView";


export function Root() {
    return (
      <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path='/' element={<LoginView><Login /></LoginView>} />
                <Route path='/login' element={<LoginView><Login /></LoginView>} />
                <Route path='/home' element={<PrivateView><Home /></PrivateView>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    )
}
