import { DetailedHTMLProps, ForwardedRef, InputHTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string;
    error?: string;
    label: string;
    ref?: ForwardedRef<HTMLInputElement>
}
