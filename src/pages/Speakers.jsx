import { useState, useEffect } from 'react'
import fetchAPI from '../utils/fetchAPI'
import SpeakerStyle from '../styles/Speakers.module.css'


function Speakers(props) {
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL + `/speakers/conference/${props.con}`;
  useEffect(() => { fetchAPI(setData, apiUrl, setLoading) }, []);

  return (
    <div className={SpeakerStyle.container}>
      <p className={SpeakerStyle.mainheading}>Speakers </p>

      {!loading ?
        data.map(item => (
          <div key={item.id} className={SpeakerStyle.onentry}>



            <p className={SpeakerStyle.talktype}>{item.TalkType}</p>
            <p className={SpeakerStyle.title}>{item.TalkTitle}</p>

            <div className={SpeakerStyle.imgprof} >

              <div className={SpeakerStyle.imgbtn}>
                <img height="150" width='120' src={item.ImgLink} />
                <a href={item.ProfileLink} target="_main"><button>Profile Link</button></a>
              </div>
              
              <div >
                <table className={SpeakerStyle.table} >
                  <tbody>
                    <tr>
                      <td className={SpeakerStyle.field}>Name</td>
                      <td>:</td>
                      <td>{item.Name}</td>
                    </tr>
                    <tr>
                      <td className={SpeakerStyle.field}>Designation</td>
                      <td>:</td>
                      <td>{item.Designation}</td>
                    </tr>
                    <tr>
                      <td className={SpeakerStyle.field}>Institute</td>
                      <td>:</td>
                      <td>{item.Institute}</td>
                    </tr>
                    <tr>
                      <td className={SpeakerStyle.field}>Abstract</td>
                      <td>:</td>
                      <td><div className={SpeakerStyle.expand}>{item.Abstract}</div></td>
                    </tr>
                    <tr>
                      <td className={SpeakerStyle.field}>Bio</td>
                      <td>:</td>
                      <td><div className={SpeakerStyle.expand}>{item.Bio}</div></td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )) :
        <div>Loading...</div>
      }
    </div>
  )

}
export default Speakers;
