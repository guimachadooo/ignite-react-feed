import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }){

  const [comments, setComments] = useState([
    'Sucesso mano!',
    'Muito top, parabéns!'
  ]);
  const [newComment, setNewComment] = useState('');

  let dateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  let dateRelative = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  let handleComment = () => {
    setNewComment(event.target.value);
    event.target.setCustomValidity('');
  }
  
  let handleSubmit = () => {
    event.preventDefault();
    
    setComments([...comments, newComment ]);
    setNewComment('');
  }

  let handleRemove = (deletedComment) => {
    let newComments = comments.filter(comment => {
      return comment !== deletedComment;
    })

    setComments(newComments);
  }

  let handleInvalid = () => {
    event.target.setCustomValidity('Campo obrigatório');
  }

  let handleDisable = newComment.length == 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar border={true} src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time 
          title={dateFormatted} 
          dateTime={publishedAt.toISOString()}
        >
          {dateRelative}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item, idx) => {
          if (item.type == 'p'){
            return (<p key={idx}>{item.content}</p>)
          }
          else if(item.type == 'link'){
            return (
              <p key={idx}><a href="#">{item.content}</a></p>
            )
          }
        })}
        
      </div>

      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          required
          name="comment" 
          value={newComment}
          onChange={handleComment}
          onInvalid={handleInvalid}
          placeholder="Escreva um comentário" 
        />

        <footer>
          <button disabled={handleDisable} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, idx) => {
          return (
            <Comment 
              key={idx} 
              author={author}
              content={comment} 
              remove={handleRemove} 
            />
          )
        })}
      </div>
    </article>
  )
}