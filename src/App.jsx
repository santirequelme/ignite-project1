import { Header } from "./Components/Header";
import { Sidebar} from "./Components/Sidebar";
import { Post } from "./Components/Post";
import './global.css';
import styles from './App.module.css';


export function App() {

  return (
    <div>
    
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post />
      <Post />
      <Post />
      </main>
   
    </div>
    </div>
  )
}
