import Header from "./components/Header"
import Style from './app.module.css'
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"


const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://avatars.githubusercontent.com/u/88048574?v=4',
      name:'Murilo Ricardo Principe' ,
      role:'Web Developer' ,
    },
    content:[
      { type: 'paragraph', content:'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-20 09:48:00')
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://avatars.githubusercontent.com/u/88048574?v=4',
      name:'Mario Ricardo' ,
      role:'Web Master' ,
    },
    content:[
      { type:'paragraph', content:'Fala galeraa 👋'},
      { type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type:'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-19 09:48:00')
  },
]

function App() {

  return (
    <div>
      <Header />

      <div className={Style.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post =>{
            return(
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
