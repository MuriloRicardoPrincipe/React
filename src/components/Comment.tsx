import Style from './Comment.module.css';
import { FaRegTrashAlt } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
    content:string;
    deletandoComentario:(content:string) => void;
}

export function Comment({content, deletandoComentario}:CommentProps) {

    const [ Aplaudir, setAplaudir] = useState(0);
    function CliqueDeletarComentario(){
        deletandoComentario(content)
    }

    function aplaudindo(){
        setAplaudir(Aplaudir + 1)
        //pode fazer direto no onClick={()=> setAplaudir(Aplaudir + 1)}
    }
    return (
        <div className={Style.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/88048574?v=4" />
            <div className={Style.commentBox}>
                <div className={Style.commentContent}>
                    <header>
                        <div className={Style.commentAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='19 de julho de 2022' dateTime='2022-07-19 11:46:00'>Cerca de 1 hora atrás</time>
                        </div>

                        <button 
                            onClick={CliqueDeletarComentario}
                            title='Deletar Comentario'>
                            <FaRegTrashAlt size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={aplaudindo}>
                        <AiOutlineLike/>
                        Aplaudir <span>{Aplaudir}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}