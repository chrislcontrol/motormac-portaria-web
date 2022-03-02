import { Alert, AlertTitle } from "@mui/material";
import { AlertPopupProps, CustomPopupProps } from "./types";

export function Popup(alertPopupProps: AlertPopupProps) {
  return (
    <Alert severity={alertPopupProps.severity} {...alertPopupProps.alertProps }>
      <AlertTitle>{alertPopupProps.title}</AlertTitle>
        {alertPopupProps.message}
    </Alert>)
};

export function ErrorPopup(errorPopupProps: CustomPopupProps) {
  const { title, message } = errorPopupProps; 

  return <Popup message={message} severity='error' title={title}/>
};