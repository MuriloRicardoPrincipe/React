import Style from './Header.module.css'
import logo from '../assets/ignite-logo.svg'

export default function Header(){
    return(
        <header className={Style.header}>
            <img src={logo} alt="Logotipo do ignite" />
        </header>
    )
}