import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PaperPlaneTilt } from 'phosphor-react';
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

export function App() {
  const [ posts, setPosts ] = useState([] as IPost[]);
  const [ newPostText, setNewPostText ] = useState('');

  function handleCreateNewPost(event: FormEvent) {
    event.preventDefault();

    const newPost: IPost = {
      id: 12,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/16003265?v=4',
        name: 'Vilson Castilho',
        role: 'Software Engineer',
      },
      content: newPostText,
      publishedAt: new Date,
    }
    
    setPosts([...posts, newPost]);
    setNewPostText('');
  }

  function handleNewPostChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewPostText(event.target.value);
  }

  function handleNewPostInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Essa campo é obrigatório!');
  }

  const isNewPostEmpty = newPostText.length === 0;

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <form className={styles.postForm} onSubmit={handleCreateNewPost} >
            <textarea
              name="post"
              placeholder="Compartilhe o que você está pensando"
              value={newPostText}
              onChange={handleNewPostChange}
              onInvalid={handleNewPostInvalid}
              required
            />

            <div className={styles.sendPostButton}>
              <button type="submit" disabled={isNewPostEmpty}>
                <PaperPlaneTilt size={24}/>
              </button>
            </div>
          </form>

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
