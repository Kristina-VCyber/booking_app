import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

type StandardType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export type ButtonType = "primary" | "logout" | "filter";

export type ButtonProps = {
  children?: ReactNode;
  appearance: ButtonType;
  icon?: ReactNode;
} & StandardType;

export function Button({
  children,
  icon,
  className,
  appearance = "primary",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={classNames(
        {
          [styles.logout]: appearance === "logout",
          [styles.primary]: appearance === "primary",
          [styles.filter]: appearance === "filter",
        },
        className
      )}
    >
      <div className={classNames(icon && styles.container)}>
        <p>{children}</p>
        {icon}
      </div>
    </button>
  );
}
