import styles from "../../../styles/Jogo.module.css"
import { useEffect, useState } from "react";
import Porta from "../../../src/components/Porta/Porta";
import { atualizarPortas, criarPortas } from "../../../src/function/porta";
import Link from "next/link"
import { useRouter } from "next/router"

export default function Jogo() {

  const [portas, setPortas] = useState([])
  const [valido, setValido] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    const qtdePortasValidas = portas >=3 && portas <=10
    const temPresenteValido = temPresente >=1 && temPresente <= portas

    setValido(qtdePortasValidas && temPresenteValido)
  }, [portas])

  useEffect(() => {

  const portas = +router.query.portas
  const temPresente = +router.query.temPresente

  setPortas(criarPortas(portas, temPresente))
  }, [router?.query])





  function renderizarPortas() {
    return portas.map(porta => {
      return  <Porta  key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {valido ? renderizarPortas() : <h1>Valores Inválidos</h1>}
        </div>
        <div className={styles.botoes}>
          <Link href="/">
            <button>Reiniciar jogo</button>
            </Link>
      </div>
    </div>
  );
}
