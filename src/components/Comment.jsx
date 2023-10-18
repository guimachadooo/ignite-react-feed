import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ author, content, remove }){

  let [like, setLike] = useState(0);

  let handleRemove = () => {
    remove(content);
  }

  let handleLike = () => {
    setLike(1);

    if (like == 1){
      setLike(0);
    }
  }

  return (
    <div className={styles.comment}>
      <Avatar src={author.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>{author.name}</strong>
              <time>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleRemove} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{ content }</p>
        </div>

        <footer>
          <button onClick={handleLike} className={like == 1 && styles.liked}>
            <ThumbsUp weight={like == 1 ? "fill" : "regular"} color={like == 1 ? "#00875f" : "#c4c4cc"} />
            {like == 1 ? "Curtido" : "Curtir"} <span>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}