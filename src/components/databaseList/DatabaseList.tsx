import React, { useRef } from 'react';
import { DatabaseListItem } from "./DatabaseListItem";
import styles from "./DatabaseList.module.css"
// import 'overlayscrollbars/css/OverlayScrollbars.min.css';
import { useScrollbar } from "../../core/hooks/use-scrollbar";

export const DatabaseList = () => {

    const listWrapper = useRef(null);

    useScrollbar(listWrapper);
    return (
        <div className={styles.scrollbar} ref={listWrapper}>
            <li>
            <div className={styles.databaseListWrapper}>
                <DatabaseListItem/>
                <DatabaseListItem/>
                <DatabaseListItem/>
            </div>
            </li>
        </div>
    );
}
