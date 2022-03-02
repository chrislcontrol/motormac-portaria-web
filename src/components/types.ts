import { AlertColor, AlertProps } from "@mui/material";

export type CustomPopupProps = {
    title?: string,
    message?: string
};

export type AlertPopupProps = {
    title?: string,
    message?: string,
    severity: AlertColor,
    alertProps?: AlertProps
};