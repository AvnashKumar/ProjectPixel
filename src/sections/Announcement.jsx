import { useState, useEffect } from 'react'
import fetchAPI from '../utils/fetchAPI'
import AncStyle from '../styles/Announcement.module.css'
import {HiSpeakerphone} from "react-icons/hi";

function Announcement(props) {
  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL + `/announcement/conf/${props.con}`;
  const [loading, setLoading] = useState(false)
  useEffect(() => { fetchAPI(setData, apiUrl, setLoading) }, []);

  return (
    <div className={AncStyle.container}>
      <p className={AncStyle.mainheading}> <HiSpeakerphone style={{paddingTop:'10px'}}/>Announcement </p>
      <div className={AncStyle.ancontainer}>
        <div className={AncStyle.ancontent}>
        {!loading ? data.map(item => (
          <div key={item.id} className={AncStyle.onentry}>
            <p className={AncStyle.title} > {item.title}</p>
            <p className={AncStyle.descrip}>{item.description}</p>

          </div>

        )) :
          <div>Loading Wait....</div>}
      </div>
    </div>
    </div>
  )
}
export default Announcement;
