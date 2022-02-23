import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from "./pages/Login";
// import your route components too


export function Urls() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>
      </BrowserRouter>
    )
}
