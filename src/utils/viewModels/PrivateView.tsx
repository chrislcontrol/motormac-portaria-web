
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { CompanyContext } from "../../contexts/CompanyContext";

type privateViewProps = {children: JSX.Element, hasCompanyValidation?: boolean};

class PrivateView {

  public validate({children, hasCompanyValidation=true}: privateViewProps) {
    const { isAuthenticated, loading } = useContext(AuthContext);
    const { isCompanyIdValid, isLoading } = useContext(CompanyContext);

    if (loading || isLoading) {
      return (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      );
    };

    if (!isAuthenticated) { return <Navigate to='/login'></Navigate> };
    if (!isCompanyIdValid && hasCompanyValidation) { return <Navigate to='/company'></Navigate> };

    return children;
    
  };
  
};

export default new PrivateView().validate;
    