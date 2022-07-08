import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/diego3g.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Dieguito</strong>
              <time title=''></time>
            </div>
          </header>
          <p> Muito Bom Parabens</p>
        </div>
        <footer>
          APLAUDIR
        </footer>
      </div>
    </div>
  )
}