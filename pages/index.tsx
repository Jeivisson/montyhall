import React, { useState } from 'react';
import styles from '../styles/Formulario.module.css'
import Cartao from '../src/components/Cartao/Cartao';
import Link from "next/link"
import EntradaNumerica from '../src/components/EntradaNumerica/EntradaNumerica';

export default function Formulario() {
 const [qtdePortas, setQtdePortas] = useState(3)
 const [comPresente, setComPresente] = useState(1)
  return (
    <div className={styles.formulario}>
      <div>
      <Cartao bgColor="#c0392c">
        <h1>Monty Hall</h1>
      </Cartao>
      <Cartao>
        <EntradaNumerica text='Qntde Portas?' value={qtdePortas} onChange={ novaQtde => setQtdePortas(novaQtde)} />
      </Cartao>
      </div>
      <div>
      <Cartao>
      <EntradaNumerica text='Porta com presente?' value={comPresente} onChange={ novaPortaComPresente => setComPresente(novaPortaComPresente)} />

      </Cartao>

      <Cartao bgColor="#28a085">
        <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
          <h2 className={styles.link}>Inciar</h2>
        </Link>
      </Cartao>
      </div>
    </div>
  );
}
