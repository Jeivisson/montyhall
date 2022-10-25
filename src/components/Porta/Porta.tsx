import React from 'react';

import PortaModel from '../../model/porta';
import { Presente } from '../Presente/Presente.tsx';
import styles from './porta.module.css';

interface PortaProps {

  value: PortaModel
  onChange: (novaPorata: PortaModel) => void
}

export default function Porta(props : PortaProps) {
  const  porta  = props.value
  const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : '';

  const alternarSelecao = e => props.onChange(porta.alternarSelecao())

  const abrir = e => {
    e.stopPropagation()
    props.onChange(porta.abrir())

  }
  function renderizarPorta() {

    return (
      <div className={styles.porta}>
      <div className={styles.numero}>{porta.numero}</div>
      <div className={styles.macaneta} onClick = {abrir}></div>
    </div>
  )

}
return (
  <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.fechada ? renderizarPorta() : porta.temPresente ? <Presente /> : false}
      </div>
        <div className={styles.chao}></div>
  </div>
  );
}
