import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/65666330?v=4" />
          <div className={styles.authorInfo}>
            <strong> Santiago</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time dateTime=''> </time>
      </header>
      <div className={styles.content}>
        <p> FAAALA DEV</p>
        <p> SLE</p>
        <p> <a>sdgsd@gasdgsdg</a></p>
        <p> <a>sdgsd@gasdgsdg</a></p>
      </div>
      <form className={styles.commentForm}>
        <strong> Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentario"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}