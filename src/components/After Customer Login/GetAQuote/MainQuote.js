import "./MainQuote.css";
import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAddQuote } from "../../../services/services";

import Step from "./QuoteSteps/Step";
import FourthStep from "./FourthStep/FourthStep";
import FirstStep from "./FirstStep/FirstStep";
import FifthStep from "./FifthStep/FifthStep";
import SixthStep from "./SixthStep/SixthStep";
import SecondStep from "./SecondStep/SecondStep";
import SecondSubStep from "./SecondStep/SecondSubStep";
import ThirdStep from "./ThirdStep/ThirdStep";
import SeventhStep from "./SeventhStep/SeventhStep";
import EightStep from "./EightStep/EightStep";

const useStyles = makeStyles({
  radio: {
    height: "1vh",
    width: "1vw",
  },
  button: {
    marginLeft: "2vw",
    // display: "inline-block",
    backgroundColor: "black",
    color: "white",
    width: "7.16vw",
    height: "5.36vh",
    marginTop: "2vh",
    fontSize: "1vw",
    borderRadius: "2.11vw",
    textTransform: "none",
    "&:hover": {
      background: "black",
      color: "white",
    },
  },
  buttons: {
    margin: "2vh 0px 0px 6.51vw ",
    border: "solid 0.134vh #d3d3d3",
    backgroundColor: "#f9f9f9",
    color: " #000",
    fontFamily: "outfit",
    fontSize: "1vw",
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

const MainQuote = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [payload, setPayload] = useState({});
  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { isLoading: isLoading, mutate: addQuote } = useAddQuote({
    onError: (error) => {
      setShowError(true);
      setError(error);
    },
  });
  // class MainQuote extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       currentStep: 0,
  //       email: "",
  //       username: "",
  //       password: "",
  //     };
  //   }

  /*     handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    } */

  const _next = () => {
    let currentStep1 = currentStep;
    currentStep1 = currentStep1 + 1;
    setCurrentStep(currentStep1);
  };

  const _prev = () => {
    let currentStep1 = currentStep;
    currentStep1 = currentStep1 < 0 ? 0 : currentStep1 - 1;
    setCurrentStep(currentStep1);
  };

  const _addNewQuote = () => {
    addQuote(payload);
  };
  const getPayloadData = (label, data) => {
    let temp = { ...payload };
    for (let index = 0; index < label.length; index++) {
      temp[label[index]] = data[index];
    }
    setPayload(temp);
  };
  /*
   * the functions for our button
   */
  /*   previousButton() {
    let currentStep = currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={_prev}>
        Previous
        </button>
      )
    }
    return null;
  } */

  /*   nextButton(){
    let currentStep = currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={_next}>
        Next
        </button>        
      )
    }
    return null;
  } */
  console.log(payload);
  return (
    <React.Fragment>
      <h1 className="get-a-quote">Get a Quote</h1>
      <hr className="quote-hr" />

      {currentStep === 0 && (
        <FirstStep
          next={_next}
          getPayloadData={(label, data) => {
            getPayloadData(label, data);
          }}
        />
      )}
      {currentStep === 1 && (
        <SecondStep
          prev={_prev}
          next={_next}
          getPayloadData={(label, data) => {
            getPayloadData(label, data);
          }}
        />
      )}
      {currentStep === 2 && (
        <SecondSubStep
          prev={_prev}
          next={_next}
          getPayloadData={(label, data) => {
            getPayloadData(label, data);
          }}
        />
      )}
      {currentStep === 3 && (
        <ThirdStep
          prev={_prev}
          next={_next}
          getPayloadData={(label, data) => {
            getPayloadData(label, data);
          }}
        />
      )}
      {currentStep === 4 && (
        <FourthStep
          prev={_prev}
          next={_next}
          getPayloadData={(label, data) => {
            getPayloadData(label, data);
          }}
        />
      )}
      {currentStep === 5 && (
        <FifthStep
          prev={_prev}
          next={_next}
          getPayloadData={(label, data) => {
            getPayloadData(label, data);
          }}
        />
      )}
      {currentStep === 6 && (
        <SixthStep
          prev={_prev}
          next={_next}
          getPayloadData={(label, data) => {
            getPayloadData(label, data);
          }}
        />
      )}
      {currentStep === 7 && (
        <SeventhStep
          prev={_prev}
          next={_next}
          getPayloadData={(label, data) => {
            getPayloadData(label, data);
          }}
        />
      )}
      {currentStep === 8 && (
        <EightStep
          prev={_prev}
          next={_next}
          getPayloadData={(label, data) => {
            getPayloadData(label, data);
          }}
          _addNewQuote={_addNewQuote}
        />
      )}
    </React.Fragment>
  );
};

// function Step1(props) {
//   if (props.currentStep !== 1) {
//     return null;
//   }
//   return (
//     <div className="form-group">
//       <label htmlFor="email">Email address</label>
//       <input
//         className="form-control"
//         id="email"
//         name="email"
//         type="text"
//         placeholder="Enter email"
//         value={props.email}
//         onChange={props.handleChange}
//       />
//     </div>
//   );
// }

// function Step2(props) {
//   if (props.currentStep !== 2) {
//     return null;
//   }
//   return (
//     <div className="form-group">
//       <label htmlFor="username">Username</label>
//       <input
//         className="form-control"
//         id="username"
//         name="username"
//         type="text"
//         placeholder="Enter username"
//         value={props.username}
//         onChange={props.handleChange}
//       />
//     </div>
//   );
// }

// function Step3(props) {
//   if (props.currentStep !== 3) {
//     return null;
//   }
//   return (
//     <React.Fragment>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           className="form-control"
//           id="password"
//           name="password"
//           type="password"
//           placeholder="Enter password"
//           value={props.password}
//           onChange={props.handleChange}
//         />
//       </div>
//       <button className="btn btn-success btn-block">Sign up</button>
//     </React.Fragment>
//   );
// }

export default MainQuote;
