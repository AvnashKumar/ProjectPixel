import React from 'react';
import Uperstyle from '../styles/Uperheader.module.css'

function Uperheader() {
    return (
        <div className={Uperstyle.outer}>
            <div className={Uperstyle.inner}>Dr. B.R. Ambedkar National Institute of Technology,Jalandhar </div>
            <div className={Uperstyle.inner} id={Uperstyle.logodiv}></div>
            <div className={Uperstyle.inner1}>Dr. B.R. Ambedkar National Institute of Technology,Jalandhar </div>


        </div>
    //     <div class="container">
    //     <div class="div1">
    //       <h2>Heading 1</h2>
    //     </div>
    //     <div class="div2">
    //       <div class="logo-square">
    //         <img src='nitjlogo.png' />
    //       </div>
    //     </div>
    //     <div class="div3">
    //       <h2>Heading 2</h2>
    //     </div>
    //   </div>
      
    )
}

export default Uperheader;