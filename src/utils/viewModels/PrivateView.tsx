
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

type privateViewProps = {children: JSX.Element}

class PrivateView {

  public validate(props: privateViewProps) {
    const { isAuthenticated } = useContext(AuthContext);

    console.log(isAuthenticated)

    if (!isAuthenticated) {
      return <Navigate to='/login'></Navigate>;
    };

    return props.children;
    
  };
  
};

export default new PrivateView().validate
    