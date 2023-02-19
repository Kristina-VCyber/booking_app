import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string;
    error?: string;
    label: string
}
