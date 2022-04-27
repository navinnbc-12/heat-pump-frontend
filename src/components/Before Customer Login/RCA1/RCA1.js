import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./RCA1.css";
import HPD from "../../../Img/HPDD.jpeg";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { customerDetailsAction } from "../../../Redux/customerDetails/customerDetails.action";

import Modal from "react-modal";

import validator from "validator";

import { toast } from "react-toastify";
import { Box, Button, InputAdornment, Typography } from "@mui/material";
import StyledTextField from "../../../common/textfield";

Modal.setAppElement("#root");

const inputnames = {
  fullName: "",
  emailAddress: "",
  password: "",
  mobileNumber: "",
};

function RCA1({ customerDetails, customerDetailsAction }) {
  const Navigate = useNavigate();

  const [inputValues, setInputValues] = useState(inputnames);
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("#a4a4a4");
  const [input1Error, setInput1Error] = useState("");
  const [input2Error, setInput2Error] = useState("");
  const [input3Error, setInput3Error] = useState("");
  const [input4Error, setInput4Error] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    /* if(customerDetails.name == "" && customerDetails.email =="" && customerDetails.password == "" && customerDetails.mobile == ""){
    setIsOpen(true)
    return false
  } */
    if (customerDetails.name == "") {
      setInput1Error("Mandatory field cannot be Empty");
      /* return false */
    }
    if (!validator.isEmail(customerDetails.email)) {
      setInput2Error("Please enter valid Email Address");
      /* return false; */
    }
    if (customerDetails.email == "") {
      setInput2Error("Mandatory field cannot be empty");
      /*  return false */
    }

    if (
      !validator.isLength(customerDetails.password, { min: 8, max: undefined })
    ) {
      setInput3Error("Must be atleast 8 characters");
      /* return false; */
    }
    if (customerDetails.password == "") {
      setInput3Error("Mandatory field cannot be empty");
      /*  return false */
    }

    if (customerDetails.mobile == "") {
      setInput4Error("Mandatory field cannot be empty");
      return false;
    }
    if (!validator.isLength(customerDetails.mobile, { min: 10, max: 10 })) {
      setInput4Error("Please enter valid Mobile Number");

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
    if (
      customerDetails.name != "" &&
      customerDetails.email != "" &&
      customerDetails.password != "" &&
      customerDetails.mobile != ""
    ) {
      Navigate("/rca2");
    } else {
      setIsOpen(true);
    }
  };

  const blurFunc2 = () => {
    if (customerDetails.email == "") {
      return false;
    }
    if (!validator.isEmail(customerDetails.email)) {
      setInput2Error("Please enter valid Email Address");
      /* return false; */
    }
  };

  const blurFunc3 = () => {
    if (customerDetails.password == "") {
      /* setInput3Error("Mandatory field cannot be empty") */
      return false;
    }
    if (
      !validator.isLength(customerDetails.password, { min: 8, max: undefined })
    ) {
      setInput3Error("Must be atleast 8 characters");
      /* return false; */
    }
  };

  const blurFunc4 = () => {
    if (customerDetails.mobile == "") {
      /* setInput4Error("Mandatory field cannot be empty") */
      return false;
    }
    if (customerDetails.mobile.startsWith("0")) {
      if (!validator.isLength(customerDetails.mobile, { min: 11, max: 11 })) {
        setInput4Error("Please enter valid Mobile Number");

        return false;
      }
    } else {
      if (!validator.isLength(customerDetails.mobile, { min: 10, max: 10 })) {
        setInput4Error("Please enter valid Mobile Number");

        return false;
      }
    }
  };

  const changeHandler = (e) => {
    e.preventDefault();
    customerDetailsAction({ [e.target.name]: e.target.value });
    setInput1Error("");
    setInput2Error("");
    setInput3Error("");
    setInput4Error("");
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "60%" }}>
          <img
            style={{
              width: "70px",
              height: "70px",
              margin: "40px 965px 60px 55px",
            }}
            src={HPD}
            alt="HPD"
          />
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: "300",
              fontFamily: "Outfit",
              width: "783px",
              height: "88px",
              margin: "0 197px 0px 55px",
              position: "relative",
            }}
          >
            Request a Customer Account
          </Typography>
          <Box style={{ position: "relative" }}>
            <Box className="left-bar"></Box>
            <Box className="circle"></Box>
            <Box className="right-bar"></Box>
          </Box>
          <Typography
            style={{
              fontSize: "22px",
              fontFamily: "Outfit",
              margin: "40px 70px 20px 59px",
              position: "relative",
            }}
          >
            Your Name and Contact Details
          </Typography>
          <form action="">
            <StyledTextField
              sx={{ width: "500px", height: "63px", margin: "0 0 0 60px" }}
              required
              type="text"
              value={customerDetails.name}
              onChange={changeHandler}
              name="name"
              label="Full Name"
            />
            <Typography
              style={{
                fontSize: "18px",
                fontFamily: "Outfit",
                position: "relative",
                margin: "1px 0px 0px 62px",
                color: "red",
              }}
            >
              {input1Error}
            </Typography>

            <StyledTextField
              sx={{ width: "500px", height: "63px", margin: "8px 0 0 60px" }}
              required
              label="Email Address"
              type="text"
              onBlur={blurFunc2}
              value={customerDetails.email}
              onChange={changeHandler}
              name="email"
            />
            <Typography
              style={{
                fontSize: "18px",
                fontFamily: "Outfit",
                margin: "1px 0px 0px 62px",
                position: "relative",
                color: "red",
              }}
            >
              {input2Error}
            </Typography>

            <StyledTextField
              sx={{ width: "500px", height: "63px", margin: "8px 0 0 60px" }}
              required
              label="Password"
              type="password"
              onBlur={blurFunc3}
              value={customerDetails.password}
              onChange={changeHandler}
              name="password"
            />

            <Typography
              style={{
                fontSize: "18px",
                fontFamily: "Outfit",
                position: "relative",
                margin: "1px 0px 0px 62px",
                color: "red",
              }}
            >
              {input3Error}
            </Typography>

            <StyledTextField
              sx={{
                width: "500px",
                height: "63px",
                margin: "15px 0 0 60px",
              }}
              InputLabelProps={{
                style: { background: "#fff" },
              }}
              required
              label="Mobile Number"
              onBlur={blurFunc4}
              type="text"
              value={customerDetails.mobile}
              onChange={changeHandler}
              name="mobile"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    sx={{ fontSize: "22px", fontWeight: "800" }}
                    position="start"
                  >
                    +44
                  </InputAdornment>
                ),
              }}
            />
            <Typography
              style={{
                fontSize: "18px",
                fontFamily: "Outfit",
                position: "relative",
                margin: "1px 0px 0px 62px",
                color: "red",
              }}
            >
              {input4Error}
            </Typography>
          </form>
          <Button
            sx={{
              fontSize: "18px",
              fontFamily: "Outfit",
              fontWeight: "300",
              color: "white",
              background: "black",
              borderRadius: "32.5px",
              width: "179px",
              height: "65px",
              margin: "20px 420px 0 60px",
              padding: "21px 30px",
              textTransform: "none",
            }}
            onClick={clickHandler}
          >
            Continue
          </Button>
        </Box>
        <Box class="rca1Rectangle-side">
          <img
            src={require("../../../Img/RCA1.png")}
            className="rca1couplesideImg"
            alt="RCA"
          />
        </Box>
      </Box>
      <Modal
        isOpen={isOpen}
        className="myWarningModal"
        overlayClassName={"myWarningOverlay"}
        closeTimeoutMS={500}
      >
        <div>
          <h2
            style={{ textAlign: "center", color: "#fa5e00", marginTop: "30px" }}
          >
            Warning!
          </h2>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            Mandatory fields cannot be Empty
          </div>
          <button className="ModalButton" onClick={() => setIsOpen(false)}>
            OK
          </button>
        </div>
      </Modal>
    </>
  );
}
const mapStateToProps = (state) => ({
  customerDetails: state.cdr,
});

const mapDispatchToProps = (dispatch) => ({
  customerDetailsAction: (keypair) => dispatch(customerDetailsAction(keypair)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RCA1);
