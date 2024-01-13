import Map from "../components/Map"
import Sidebar from "../components/Sidebar"
//import AppNav from "../components/AppNav"
 import styles from './AppLayout.module.css'
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map/>
      
    </div>
  )
}

export default AppLayout