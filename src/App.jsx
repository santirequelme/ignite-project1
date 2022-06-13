import { Post } from "./Post";
import './global.css';
import styles from './App.module.css';

import { Header } from "./Components/Header";
import { Sidebar} from "./Components/Sidebar";
export function App() {

  return (
    <div>
    
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post
       author="Santi"
       content="Lorem ipsum dolor"
      />
       <Post
       author="Santi"
       content="Lorem ipsum dolor"
      />
      </main>
   
    </div>
    </div>
  )
}
