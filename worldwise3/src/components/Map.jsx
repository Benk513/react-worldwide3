import styles from './Map.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Map() {
  const navigate = useNavigate();

  const [searchParams,setsearchParams] = useSearchParams(); 

  const lat = searchParams.get("lat"); //this line will extract lat and lng parameters in the URL and .get() its values
  const lng = searchParams.get("lng")  // it's a global solution as we do have access to it any where in the app

  return (
    <div className={styles.mapContainer} onClick={()=>navigate("form")}>
      <h1>Coordinates = {lat} : {lng} </h1>
      <button onClick={
        ()=>{setsearchParams({lat:41,lng:88})}
      }>change position</button>

    </div>
  )
}
