import "./MainQuote.css";
import React, { useState } from 'react';
import { makeStyles,createStyles } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import Step from "./QuoteSteps/Step";
import FourthStep from "./FourthStep/FourthStep";
import FirstStep from "./FirstStep/FirstStep";
import FifthStep from "./FifthStep/FifthStep";
import SixthStep from "./SixthStep/SixthStep";


const useStyles = makeStyles({

    radio: {
      height: "1vh",
      width: "1vw",
    },
    button: {
      marginLeft:"2vw",
     // display: "inline-block",
      backgroundColor: "black",
      color: "white",
      width: "7.16vw",
      height: "5.36vh",
      marginTop: "2vh",
      fontSize:"1vw",
      borderRadius: "2.11vw",
      textTransform:"none",
      "&:hover":{
        background: "black",
        color: "white",
      },
    },
      buttons: {
        margin: "2vh 0px 0px 6.51vw ",
        border: "solid 0.134vh #d3d3d3",
        backgroundColor: "#f9f9f9",
        color: " #000",
        fontFamily:"outfit",
        fontSize:"1vw",
        width: "11.7vw",
        height: "5.36vh",
        textTransform: "none",
        borderRadius: "2.11vw",
        "&:hover": {
          textTransform: "none",
          backgroundColor: "#f9f9f9",
          color: "#000",
        },
      },
   
  });

class MainQuote extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        email:  '',
        username: '',
        password: '', 
      }
    }
  
/*     handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    } */
     
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
/*   previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  } */
  
/*   nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  } */
    
    render() {    
        
      return (
        <React.Fragment>
        <h1 className="get-a-quote" >Get a Quotes</h1>
          <hr className="quote-hr" />

          {/* <Step/> */}
          {/* <FirstStep/> */}
          {/* <FourthStep/> */}
          {/* <FifthStep/> */}
          <SixthStep/>












        {/*   <Step1 
            currentStep={this.state.currentStep}
            email={this.state.email}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            username={this.state.username}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            password={this.state.password}
          /> */}
         {/*  {this.previousButton()}
          {this.nextButton()} */}
  
      
        </React.Fragment>
      );
    }
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          />
      </div>
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={props.username}
          onChange={props.handleChange}
          />
      </div>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
          />      
      </div>
      <button className="btn btn-success btn-block">Sign up</button>
      </React.Fragment>  );
}

export default MainQuote;