import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <p>teste</p>
        </main>
      </div>
    </div>
  )
}

export default App