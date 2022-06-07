import { Post } from "./Post";
import './global.css';
import { Header } from "./Components/Header";
export function App() {

  return (
    <>
      <Header />
      <Post
       author="Santi"
       content="Lorem ipsum dolor"
      />
      <Post
       author="Pedro"
       content="Lorem ipsum dolor"
      />
    </>
  )
}
