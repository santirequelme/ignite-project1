import { ThumbsUp, Trash } from 'phosphor-react'
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
              <time title="11 de Maio As: 08:12" dateTime="2022-11-05 08:12:30"> Ha uma hora</time>
            </div>
            <button title="Deletar"> 
                 <Trash size={24}/>
              </button>
          </header>
          <p> Muito Bom Parabens</p>
        </div>
        <footer>
         <button>
          <ThumbsUp size={20}/>
          Apaudir <span>20</span>
         </button>
        </footer>
      </div>
    </div>
  )
}