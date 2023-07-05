import React from "react";
import { Link } from 'react-router-dom';
import { FaHome,FaAward,FaHandHoldingUsd} from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

import { MdOutlinePendingActions,MdCoPresent,MdContactPhone } from "react-icons/md";
import Navstyle from '../styles/Navbar.module.css'
function Navbar() {
    return (
        
            
            
                <ul className={Navstyle.navlist}>
                    <li > <Link className={Navstyle.navitems} to="/"><FaHome className={Navstyle.icon} />Home</Link>        </li>
                    <li > <Link className={Navstyle.navitems} to="/Speakers"><MdCoPresent className={Navstyle.icon} />Speakers</Link>    </li>
                    <li > <Link className={Navstyle.navitems} to="/committee"><BsFillPeopleFill className={Navstyle.icon} />Committee</Link>  </li>
                    <li > <Link className={Navstyle.navitems} to="/sponsorship"><FaHandHoldingUsd className={Navstyle.icon} />Sponsorship</Link> </li>
                    <li > <Link className={Navstyle.navitems} to="/awards"><FaAward className={Navstyle.icon} />Awards</Link>      </li>
                    <li > <Link className={Navstyle.navitems} to="/registration"><MdOutlinePendingActions className={Navstyle.icon} />Registration</Link></li>
                    <li > <Link className={Navstyle.navitems} to="/contact"><MdContactPhone className={Navstyle.icon} />Contact Us</Link>   </li>
                </ul>
            
        

            )
}

export default Navbar;