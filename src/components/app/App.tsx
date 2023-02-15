import React from 'react';
import { Login } from "../auth/Login";
import styles from "./App.module.css"

function App() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperOverlay}>
            <div className={styles.form}>
                <Login/>
            </div>
            </div>
        </div>
    );
}

export default App;
