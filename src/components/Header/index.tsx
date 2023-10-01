import styles from './styles.module.scss'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <div className={styles.header}>
      <header>
        <img src={logo} alt="" />
      </header>
    </div>
  )
}

export default Header