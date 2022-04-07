import React, { useState, useEffect } from "react";
import "./OTP.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import URL from "../../../GlobalUrl";
import globalAPI from "../../../GlobalApi";

import OtpInput from "react-otp-input-rc-17";

import { connect } from "react-redux";

const useStyles = makeStyles({
  button: {
    margin: "2.68vh 0px 0px 6.51vw ",
    backgroundColor: "black",
    color: "white",
    width: "9.76vw",
    height: "6.71vh",
    borderRadius: "2.11vw",
    fontSize:"0.9vw",
    textTransform: "none",
    "&:hover": {
      background: "black",
      textTransform: "none",
      color: "white",
    },
  },
  buttons: {
    textTransform: "none",
    margin: "2.68vh 0px 0px 1.3vw ",
    border: "solid 0.134vh #d3d3d3",
    backgroundColor: "#f9f9f9",
    color: " #000",
    width: "13vw",
    fontSize:"0.9vw",
    height: "6.71vh",
    borderRadius: "2.11vw",
    "&:hover": {
      backgroundColor: "#f9f9f9",
      textTransform: "none",
      color: "#000",
    },
  },
});

function OTP({ emailNum }) {
  const classes = useStyles();
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    if (otp === "") {
      setOtp(otp + e);
    }
    
    setOtp(e);
  };
  useEffect(() => {
    /* if (otp.length < 4) {
      setStatus("");
    } */
    if (otp.length === 4) {
      const otp_token =JSON.parse(localStorage.getItem("otp_token"));
      console.log(otp_token)
      const data = {
        email: emailNum,
        otp:parseInt(otp),
        otp_token:otp_token,
      };
      console.log(data)
      setLoader(true);

      axios
        .post(URL + globalAPI.otp, data)
        .then((response) => {
          setLoader(false);
          const res =response.data
          debugger
          if (res.success) {
            localStorage.setItem("reset_token", JSON.stringify(res.data.reset_token));
            setStatus(true);
            setTimeout(() => {
              navigate("/newpassword");
            }, 2000);
            
            //toast.success(res.data.message);
          }
          else{
            // toast.error(res.data.message);
            setStatus(false);
          }
        })
        .catch((err) => {
          setLoader(false);
          toast.error("Something Went Wrong");
        });
    }
  }, [otp]);

  console.log(status);
  return (
    <div>
      {loader && (
        <div className="customLoader">
          <TailSpin color="#Fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="otp">
        <div className="otpfirstHalf">
          <div className="otpHPD">
            <img
              src={require("../../../Img/HPDD.jpeg")}
              style={{height:"6.5vh"}}
            />
          </div>

          <h1 className="otpdiv1">Check your Email</h1>

          <div
            style={{
              margin: "1.3vh 0px 0px 6.51vw",
              width: "590px",
              fontWeight: "300",
              marginTop: "30px",
              fontSize:"1vw"
            }}
          >
            {" "}
            Enter the code we just sent to {emailNum}
          </div>
          <div className="otpdiv">
            <OtpInput
              value={otp}
              onChange={changeHandler}
              focusStyle
              shouldAutoFocus
              isInputNum
              separator={<span> </span>}
              inputStyle={`otpInput ${status === false ? "ootp" : ""}`}
            />
          </div>

          <div
            className="span"
            style={{ display: `${status === true ? "inline-block" : "none"}` }}
          >
            <img
              src={require("../../../Img/greentick.png")}
              className="greentick"
            />
            <span>Verification Complete</span>
          </div>

          <div
            className="span"
            style={{ display: `${status === false ? "inline-block" : "none"}` }}
          >
            <img
              src={require("../../../Img/cross.png")}
              className="greentick"
            />
            <span style={{fontSize:"1vw",position:"relative",top:"0.3vh"}}>Invalid Code</span>
          </div>

          <div style={{ marginTop: "20px" }}>
            <Button className={classes.button} onClick={(e)=>navigate('/forgotpassword')}>Back</Button>
            <Button className={classes.buttons}>Resend Code</Button>
          </div>
        </div>

        <div class="otpRectangle-side">
          {" "}
          <img
            src={require("../../../Img/OTP.png")}
            className="otpcouplesideImg"
          />{" "}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  emailNum: state.fp.emailNum,
});

export default connect(mapStateToProps)(OTP);
