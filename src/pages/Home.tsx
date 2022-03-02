import { Button } from "@mui/material";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
    const { isAuthenticated } = useContext(AuthContext)

    function handleSubmit() {
        alert(isAuthenticated)
        return <Navigate to='/login'></Navigate>
    }

    return (
        
        <Button
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
            fullWidth
            variant="contained"
            type='submit'
            > Click me </Button>
    )
};