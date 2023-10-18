import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar(){

  return (
    <aside className={styles.sidebar}>
      <img 
        alt="cover"
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500"
      />

      <div className={styles.profile}>
        <Avatar border={true} src="https://github.com/guimachadooo.png" />

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