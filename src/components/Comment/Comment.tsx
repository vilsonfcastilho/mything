import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Comment.module.css';

interface IComment {
  content: string;
  onDeleteComment: Function;
}

export function Comment({ content, onDeleteComment }: IComment) {
  const [ likeCount, setLikeCount ] = useState(0);
  
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((likeCountState) => {
      return likeCountState + 1;
    });
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/16003265?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vilson Castilho</strong>
              <time title="10 de Abril de 2023" dateTime="2023-10-04 11:00:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={18}/>
            Likes <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
