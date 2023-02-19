import React from 'react';
import { AppRoutes } from "../routes";
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.container}>
            <AppRoutes/>
        </div>

    );
}

export default App;
