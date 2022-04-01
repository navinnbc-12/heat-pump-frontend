import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

import "./RCA1.css";
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { customerDetailsAction } from '../../../Redux/customerDetails/customerDetails.action';

import Modal from "react-modal"

import validator from 'validator'

import { toast} from "react-toastify";




Modal.setAppElement("#root");


 const inputnames = {
    fullName:"",
    emailAddress:"",
    password:"",
    mobileNumber:""

 }

function RCA1({customerDetails,customerDetailsAction}) {

  const Navigate = useNavigate();

    const [inputValues, setInputValues] = useState(inputnames);
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState("#a4a4a4");
    const [input1Error, setInput1Error] = useState("")
    const [input2Error, setInput2Error] = useState("")
    const [input3Error, setInput3Error] = useState("")
    const [input4Error, setInput4Error] = useState("")


  
const clickHandler = (e) => {
  e.preventDefault();
  /* if(customerDetails.name == "" && customerDetails.email =="" && customerDetails.password == "" && customerDetails.mobile == ""){
    setIsOpen(true)
    return false
  } */
  if(customerDetails.name == "" ){
    setInput1Error("Mandatory field cannot be Empty")
    /* return false */
  }
  if (!validator.isEmail(customerDetails.email)) {
    setInput2Error("Please enter valid Email Address")
    /* return false; */
  }
  if(customerDetails.email =="" ){
    setInput2Error("Mandatory field cannot be empty")
   /*  return false */
  }
 
  if (!validator.isLength(customerDetails.password,{min:8,max:undefined})) {
    setInput3Error("Must be atleast 8 characters")
    /* return false; */
  }
  if(customerDetails.password == "" ){
    setInput3Error("Mandatory field cannot be empty")
   /*  return false */
  }
 
  if(customerDetails.mobile == ""){
    setInput4Error("Mandatory field cannot be empty")
    return false
  }
  if (!validator.isLength(customerDetails.mobile,{min:10,max:10})) {
    setInput4Error("Please enter valid Mobile Number")
    
    return false;
  }
/*   if (!validator.isEmail(customerDetails.email)) {
    toast.error("Please enter valid Email");
    return false;
  }
  if (!validator.isLength(customerDetails.password,{min:8,max:undefined})) {
    toast.error("Password must be 8 characters");
    return false;
  }
  if (!validator.isLength(customerDetails.mobile,{min:10,max:10})) {
    toast.error("Mobile Number must be 10 characters");
    
    return false;
  } */
  if(customerDetails.name != "" && customerDetails.email != "" && customerDetails.password != "" && customerDetails.mobile!=""){
      Navigate("/rca2");
  }
  else{
    setIsOpen(true);
  }
}

const blurFunc2 = () => {
  if(customerDetails.email =="" ){
   
    return false
  }
  if (!validator.isEmail(customerDetails.email)) {
    setInput2Error("Please enter valid Email Address")
    /* return false; */
  }
}

const blurFunc3 = () => {
  if(customerDetails.password == "" ){
    /* setInput3Error("Mandatory field cannot be empty") */
    return false
  }
  if (!validator.isLength(customerDetails.password,{min:8,max:undefined})) {
    setInput3Error("Must be atleast 8 characters")
    /* return false; */
  }
  
}

const blurFunc4 = () => {
  if(customerDetails.mobile == ""){
    /* setInput4Error("Mandatory field cannot be empty") */
    return false
  }
  if(customerDetails.mobile.startsWith("0")){
    if (!validator.isLength(customerDetails.mobile,{min:11,max:11})) {
      setInput4Error("Please enter valid Mobile Number")
      
      return false;
    }
   
  } else{
  if (!validator.isLength(customerDetails.mobile,{min:10,max:10})) {
    setInput4Error("Please enter valid Mobile Number")
    
    return false;
  }
}
}
    
 const changeHandler = (e) => {
   e.preventDefault();
  customerDetailsAction({[e.target.name]:e.target.value})
  setInput1Error("")
  setInput2Error("")
  setInput3Error("")
  setInput4Error("")
}
    
  return (
    <>
    <div>
       <div className='rca1' >
        <div className='rca1firstHalf' >
        <div className ="rca1HPD"><img src={require("../../../Img/HPDD.jpeg")} height="50px" width={"50px"}  /></div>
            
        <h1 className='rca1div1' >Request a Customer Account</h1>
        
        <div className='left-bar' ></div>
        <div className="circle"></div>
        <div className='right-bar' ></div>

        <div  style={{margin:"10px 0px 0px 100px",width:"590px",fontWeight:"300",marginTop:"30px"}} >Your Name and Contact Details</div>       
       
        <form action=""  >
          <input required className='inputfields input1' type="text"  value={customerDetails.name} onChange={changeHandler} name="name"  /> <label className="input1-label" >Full Name*</label> <span className='input1Error inputError' >{input1Error}</span>
          <input required className='inputfields input21 ' type="text" onBlur={blurFunc2} value={customerDetails.email} onChange={changeHandler} name="email" /> <label className="input21-label" >Email Address*</label>  <span className=' inputError input2Error' >{input2Error}</span>
          <input required className='inputfields input3 ' type="password" onBlur={blurFunc3} value={customerDetails.password} onChange={changeHandler} name="password"  /> <label className="input3-label" >Password*</label> <span className='input3Error inputError' >{input3Error}</span>
          <span className="rca1span11" style={{ color: `${color}` }}>
              Must be atleast 8 characters
          </span>
          
          <input required className='inputfields input4 ' onBlur={blurFunc4} type="text" value={customerDetails.mobile} onChange={changeHandler} name="mobile"  /> <label className="input4-label" >Mobile Number*</label> <span className=' inputError input4Error ' >{input4Error}</span>
          <div className='dummyNum' >+44</div>
        </form>
        

         <button className="continue" onClick={clickHandler} >Continue</button>


        </div>   
        <div class="rca1Rectangle-side"> <img src={require("../../../Img/RCA1.png")} className="rca1couplesideImg" /> </div>
    
    
    </div>
    </div>
    <Modal
    isOpen={isOpen}
    className="myWarningModal"
    overlayClassName={"myWarningOverlay"}
    closeTimeoutMS={500}
    >
      <div>
       
        <h2 style={{textAlign:"center",color:"#fa5e00",marginTop:"30px"}} >Warning!</h2>
        <div style={{textAlign:"center",marginTop:"20px"}} >Mandatory fields cannot be Empty</div>
        <button className='ModalButton' onClick={() => setIsOpen(false)} >OK</button>
     
      </div>
    </Modal>
    </>
  )
}
const mapStateToProps = (state) => ({
  customerDetails:state.cdr
  
})

const mapDispatchToProps = dispatch => ({
 customerDetailsAction:keypair => dispatch(customerDetailsAction(keypair)),

})

export default connect(mapStateToProps,mapDispatchToProps)(RCA1);
