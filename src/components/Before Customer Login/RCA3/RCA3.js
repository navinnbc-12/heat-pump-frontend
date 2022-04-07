import React from 'react'
import "./RCA3.css"

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Link } from 'react-router-dom';



function RCA3() {



  return (
    <div>
        <div className='rca3' >
        <div className='rca3firstHalf' >
        <div className ="rca3HPD"><img src={require("../../../Img/HPDD.jpeg")}   style={{height:"6.5vh"}} /></div>
        
        <h1 className='rca3div1' >Request a Customer Account</h1>
        
        <div className='rca3left-bar' ></div> <img src={require("../../../Img/greentick.png")} className="greentick"  />
         
        <div  style={{margin:"1.34vh 0px 0px 6.51vw",width:"38.4vw",fontWeight:"300",marginTop:"4.02vh",fontSize:"1.1vw"}} >We have received your request to create an account. We will keep you informed about status of your account creation though email. Have a nice Day!</div>
        <div  style={{margin:"1.34vh 0px 0px 6.51vw",width:"38.4vw",fontWeight:"300",marginTop:"4.02vh",fontSize:"1.1vw"}} >Meanwhile you can check our services</div>        
        <a href = "https://heatpumpdesigner.com/"  target="_blank" ><button  className="rca3buttonstart"   > Check Now   <img src={require("../../../Img/iconright.png")} height="10px" width={"6px"} className="iconright"  alt=""  /> </button>  </a>



       <img src={require("../../../Img/ellipse.png")}   style={{height:"49vh",width:"17.57vw"}}  alt="" className='ellipse' />
        
        </div>
        <div class="rca3Rectangle-side"> <img src={require("../../../Img/RCA3.png")} className="rca3couplesideImg" /> </div>
        </div>
    </div>
  )
}

export default RCA3