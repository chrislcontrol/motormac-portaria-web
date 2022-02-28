
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

type loginViewProps = {children: JSX.Element}

class LoginView {

    public validate(props: loginViewProps) {
        const { isAuthenticated} = useContext(AuthContext)

        if (isAuthenticated) {
          return <Navigate to='/home'></Navigate>;
        };
    
        return props.children
    
  };
  
};

export default new LoginView().validate
    