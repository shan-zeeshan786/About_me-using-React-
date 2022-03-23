import React from 'react'
import Imges from "./images/md.jfif"

function Info(){
    return(
        <div className='Info--div'> 
       <img src={Imges} alt="Img" width="100%" />
       <h3 >Md Zeeshan alam</h3>
       A front-end Developer<br></br>
      <p>shanalam.website</p>
      <a href='mailto: shanzeeshanalam0786@gmail.com'>
       <button className='button1'>EMAIL</button>
       </a>
       <a href='https://www.linkedin.com/in/md-z-alam/'>
       <button className='button2' >LinkedIn</button>
       </a>
       </div>

    )
}
export default Info