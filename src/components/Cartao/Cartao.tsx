import styles from './cartao.module.css';

interface CartaoProps {
  bgColor?: string
  children?: any
}

export default function Cartao(props) {
  return (
    <div className={styles.cartao} style={{backgroundColor: props.bgColor ?? '#fff' }}>
      {props.children}
    </div>
  )
}
