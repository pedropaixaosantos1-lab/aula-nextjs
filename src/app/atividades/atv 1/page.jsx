import link from "next/link";

import styles from "/page.module.css";
function Atividade01 () {
    return(
        <div>
            <h1>Atividades 1</h1>
            <p>Componente basico para renderizar tela com react</p>
            <Link href="/exemplos/ex-01">Atividade 1 </Link>
        </div>
    )
}
export default Atividade01;