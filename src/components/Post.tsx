import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import Style from './Post.module.css'

interface Author{
    name:string;
    role:string;
    avatarUrl:string;
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps{
    author:Author;
    publishedAt:Date;
    content:Content[];
}

export function Post({author, publishedAt, content}:PostProps) {
    const [comments, setComments] = useState([
        'Muito bacana, parabens!'
    ])

    
    const [comentando, setComentando] = useState('')

    const formatandoData = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR}
    )

    const formatandoDataAteADataAtual = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    })

    function UsuarioAdicionandoComentario(event:FormEvent){
        event.preventDefault();
        setComments([...comments, comentando ])
        setComentando('')
    }

    function ComentarioDeixadoPeloUsuario(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setComentando(event.target.value);
    }

    function deletandoComentario(comentarioADeletar:string){
        const comentarioQueVaiSerDeletado = comments.filter(comentario =>{
            return comentario !== comentarioADeletar;
        })
        setComments(comentarioQueVaiSerDeletado);
    }

    function QuandoNaoTemComentario(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse Campo e Obrigatorio');
    }

    const quandoOComentarioEstaVazio = comentando.length === 0;
    return (
        <article className={Style.post}>
            <header>
                <div className={Style.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={Style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={formatandoData} dateTime={publishedAt.toISOString()}>{formatandoDataAteADataAtual}</time>
            </header>
            <div className={Style.content}>
                {content.map(line =>{
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    }else if(line.type ==='link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={UsuarioAdicionandoComentario} className={Style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comentario'
                    placeholder='Deixe um comentário'
                    value={comentando}
                    onChange={ComentarioDeixadoPeloUsuario}
                    required
                    onInvalid={QuandoNaoTemComentario}
                />

                <footer>
                    <button    
                        disabled={quandoOComentarioEstaVazio}
                        type='submit'>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={Style.commentList}>
                {comments.map(comentarios =>{
                    return <Comment
                        key={comentarios}
                        content={comentarios}
                        deletandoComentario={deletandoComentario}
                    />
                })}
            </div>
        </article>
    )
}