import React, { forwardRef } from "react";

import styles from "./Input.module.css";
import { Props } from "./interface";
import classNames from "classnames";

export const Input: React.FC<Props> = forwardRef(
  ({ label, error, className, ...rest }, ref) => {
    return (
      <div className={classNames(styles.wrapper, className)}>
        <label htmlFor={label} className={styles.text}>
          {label}
        </label>
        <input ref={ref} className={styles.input} {...rest} />
        <p className={styles.error}>{error}</p>
      </div>
    );
  }
);
