import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

import styles from './App.module.css';

import './global.css';

interface IAuthor {
  name: string;
  role: string;
  avatarUrl: string;
}

interface IPost {
  id: number;
  author: IAuthor;
  publishedAt: Date;
  content: string;
}

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/16003265?v=4',
      name: 'Vilson Castilho',
      role: 'Software Engineer',
    },
    content: 'Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 👉 jane.design/doctorcare',
    publishedAt: new Date('2023-10-04 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/16003265?v=4',
      name: 'Fulano de Tal',
      role: 'CTO @ mything',
    },
    content: 'Fala galeraa! Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare, jane.design/doctorcare.',
    publishedAt: new Date('2023-10-04 11:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
