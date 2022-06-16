import styles from './Post.module.css'

export function Post() {
 return (
  <article className={styles.post}>
  <header>
    <div className={styles.author}>
      <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/65666330?v=4"/>
      <div  className={styles.authorInfo}>
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
  <form className= {styles.commentForm}>
    <strong> Deixe seu feedback</strong>
    <textarea 
      placeholder="Deixe um comentario"
    />
    <button type="sumbit"> Comentar</button>
  </form>
  </article>
 )
}