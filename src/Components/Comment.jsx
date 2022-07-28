import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://depor.com/resizer/chwjc52WbKLUe1ojzJGv86ocFuw=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/O5ANVWR37ZA3JGSKYSGM6754YM.jpg" alt="" />

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
          <p>{content}</p>
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