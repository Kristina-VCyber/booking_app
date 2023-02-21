import React from "react";
import { Button } from "../btn";
import styles from "./Header.module.css";
import { Logout } from "../../assets";
import { useNavigate } from "react-router-dom";
import { paths } from "../../core/routes";

export const Header = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    localStorage.clear();
    navigate(paths.main(), { replace: true });
  };

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Simple Hotel Check</h1>
      <Button
        appearance="logout"
        className={styles.btn}
        icon={<Logout className = {styles.logOutIcon}/>}
        onClick={onClickHandler}
      >
        Выйти
      </Button>
    </header>
  );
};
