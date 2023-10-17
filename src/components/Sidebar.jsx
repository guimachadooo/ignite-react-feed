import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

export function Sidebar(){

  return (
    <aside className={styles.sidebar}>
      <img 
        alt="cover"
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
         src="https://avatars.githubusercontent.com/u/54110006?v=4" 
        />
        <strong>Gui Machado</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>

    </aside>
  )
}