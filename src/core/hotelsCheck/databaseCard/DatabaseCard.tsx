import React from "react";
import styles from "./DatabaseCard.module.css";
import { DatabaseHeader } from "./DatabaseHeader";
import { DatabaseList } from "../../../components/databaseList/DatabaseList";
import { Carousel } from "../../../components/carousel/carousel";
import { Forest, House,Road,Turn } from "../../../assets";

const imgList = [Forest,House,Road,Turn]

export const DatabaseCard = () => {


    return (
        <section className={styles.cardWrapper}>
            <div className={styles.cardContainer}>
                <DatabaseHeader/>
                <Carousel data={imgList}/>
                <div className={styles.favoritesResult}>
                    Добавлено в Избранное: <span ><span className={styles.resultNumber}>0</span> отелей</span>
                </div>
                <DatabaseList/>
            </div>
        </section>
    )
}