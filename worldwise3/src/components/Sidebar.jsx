import { Outlet } from 'react-router-dom'
import AppNav from './AppNav'
import Logo from './Logo'
import styles from "./Sidebar.module.css"
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav/>
      <Outlet/>
      <footer className={styles.footer}>
        
        <p className={styles.copyright}> &copy; Copyright {new Date().getFullYear()} by worldwise inc.</p>
      </footer>
    </div>
  )
}

// the Outlet element is like a children recieving the props(routes child from the app page)

// an index route forces a certain route to be default 