import { useState, useEffect } from 'react'
import fetchAPI from '../utils/fetchAPI'
import formatDate from '../utils/formatDate';
import InfoStyle from '../styles/Confinfo.module.css'



function Confinfo(props) {
    const [data, setData] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL + `/home/conf/${props.con}`;
    const [loading, setLoading] = useState(false)
    useEffect(() => { fetchAPI(setData, apiUrl, setLoading) }, []);




    return (
        <div className={InfoStyle.container}>
            {!loading ?
                <div >
                    <div className={InfoStyle.logoName}>
                        <div className={InfoStyle.logo}>
                            <img src={data.logo} alt='logo' height='100' width='161'/>

                        </div>
                        <div className={InfoStyle.dateName}>
                            <p className={InfoStyle.mainheading}> {data.shortName} </p>
                            <p className={InfoStyle.confdate}>{formatDate(data.confStartDate)} to {formatDate(data.confEndDate)}</p>
                        </div>
                    </div>
                    <div className={InfoStyle.conDes}>
                        <p>{data.aboutConf}</p>
                    </div>
                    
                    







                </div>
                : <div> Loading...</div>
            }
        </div>

    );
}
export default Confinfo;

