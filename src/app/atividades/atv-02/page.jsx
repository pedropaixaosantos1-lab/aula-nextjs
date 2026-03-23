'use client'

import { useState } from "react";

import styles from './page.module.css';

export default function Atividade2() {  
   
    const [num, setNum] = useState(100);

    function handleIncrementa () {
        setNum(num + 1);
    }
    function handleDecrementa () {
        setNum(num - 1);
    }

    return (
        <div className={styles.container}>

        <h1 className={styles.titulo}>Atividade 2</h1>

   <p className={styles.texto1}>Contador incrementando e decrementando com uso de useState do React</p>

       <div className={styles.container1}>
            <label 
                onClick={() => handleIncrementa()}
                className={styles.botao}
            >+1</label>
            <label className={styles.texto}>{`Contador: ${num}`}</label>            

            <label 
                onClick={() => handleDecrementa()}
                className={styles.botao}
            >-1</label>
            </div>
        </div>
    );
}