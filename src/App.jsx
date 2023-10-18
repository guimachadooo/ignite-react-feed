import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { ToastContainer, toast } from 'react-toastify';

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/felipeferreirah.png',
      name: 'Felipe Ferreira',
      role: 'Dev Senior'
    },
    content: [
      { type: 'p', content: 'Fala pessoal...' },
      { type: 'p', content: 'Sou senior mas estudei muito! #tome' },
      { type: 'link', content: 'https://github.com/felipeferreirah' }
    ],
    publishedAt: new Date('2023-10-18 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/tay1orjones.png',
      name: 'Taylor Jones',
      role: 'Front End Engineer'
    },
    content: [
      { type: 'p', content: 'Hi everybody...' },
      { type: 'p', content: 'I´m gringo front end developer, nice to see you!'},
      { type: 'link', content: 'https://github.com/tay1orjones' }
    ],
    publishedAt: new Date('2023-10-17 14:00:00'),
  },
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                toast={toast}
              />
            )
          })}
        </main>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App
