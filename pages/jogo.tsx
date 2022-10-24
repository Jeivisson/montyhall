import styles from "../styles/Jogo.module.css"
import { useState } from "react";
import Porta from "../src/components/Porta/Porta";
import { atualizarPortas, criarPortas } from "../src/function/porta";
import Link from "next/link"

export default function Jogo() {
  const [portas, setPortas] = useState(criarPortas(4,2))

  function renderizarPortas() {
    return portas.map(porta => {
      return  <Porta  key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
        </div>
        <div className={styles.botoes}>
          <Link href="/">
            <button>Reiniciar jogo</button>
            </Link>
      </div>
    </div>
  );
}
