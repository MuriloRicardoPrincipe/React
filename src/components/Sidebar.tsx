import Style from './Sidebar.module.css'
import { RiPencilLine } from 'react-icons/ri'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className={Style.sidebar}>
            <img 
                className={Style.cover}
                src="https://images.unsplash.com/photo-1658137135662-82ab663ee627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />
            <div className={Style.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/88048574?v=4"/>
                <strong>Diego Fernandes</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <RiPencilLine
                        size={20}
                    />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}