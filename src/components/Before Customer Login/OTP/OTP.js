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
import HPD from "../../../Img/HPDD.jpeg";

import OtpInput from "react-otp-input-rc-17";

import { connect } from "react-redux";
import { Grid } from "../../../common";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  button: {
    margin: "2.68vh 0px 0px 59px ",
    backgroundColor: "black",
    color: "white",
    width: "190px",
    height: "65px",
    borderRadius: "2.11vw",
    fontSize: "18px",
    fontFamily: "Outfit",
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
    width: "200px",
    fontFamily: "Outfit",
    fontSize: "18px",
    height: "65px",
    position: "absolute",
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
      const otp_token = JSON.parse(localStorage.getItem("otp_token"));
      console.log(otp_token);
      const data = {
        email: emailNum,
        otp: parseInt(otp),
        otp_token: otp_token,
      };
      console.log(data);
      setLoader(true);

      axios
        .post(URL + globalAPI.otp, data)
        .then((response) => {
          setLoader(false);
          const res = response.data;
          debugger;
          if (res.success) {
            localStorage.setItem(
              "reset_token",
              JSON.stringify(res.data.reset_token)
            );
            setStatus(true);
            setTimeout(() => {
              navigate("/newpassword");
            }, 2000);

            //toast.success(res.data.message);
          } else {
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
    <Box sx={{ display: "flex" }}>
      {loader && (
        <div className="customLoader">
          <TailSpin color="#Fa5e00" height="100" width="100" />
        </div>
      )}
      <Box sx={{ width: "60%" }}>
        {" "}
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
          style={{
            fontSize: "60px",
            fontWeight: "300",
            fontFamily: "Outfit",
            width: "783px",
            height: "88px",
            position: "relative",
            margin: "0 197px 20px 55px",
          }}
        >
          Check your Email
        </Typography>
        <Typography
          style={{
            fontSize: "22px",
            fontWeight: "300",
            fontFamily: "Outfit",
            width: "597px",
            lineHeight: "normal",
            letterSpacing: "0.03px",
            height: "84px",
            position: "relative",
            margin: "0px 379px -24px 59px",
          }}
        >
          Enter the code we just sent to {emailNum}.
        </Typography>
        <Box sx={{ display: "flex" }}>
          <div className="otpdiv">
            <OtpInput
              style={{ borderRadius: "10px" }}
              value={otp}
              onChange={changeHandler}
              focusStyle
              shouldAutoFocus
              isInputNum
              separator={<span> </span>}
              inputStyle={`otpInput ${status === false ? "ootp" : ""}`}
            />
          </div>
          <Box
            sx={{ display: "flex" }}
            style={{ display: `${status === true ? "inline-block" : "none"}` }}
          >
            <img
              src={require("../../../Img/greentick.png")}
              className="greentick1"
            />
            <Typography
              style={{
                margin: "5px 0 10px 0px",
                fontSize: "18px",
                fontFamily: "Outfit",
                fontWeight: "normal",
                position: "relative",
              }}
            >
              Verification Complete
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex" }}
            style={{ display: `${status === false ? "inline-block" : "none"}` }}
          >
            <img
              src={require("../../../Img/cross.png")}
              className="greentick1"
            />
            <Typography
              style={{
                margin: "5px 0 10px 0px",
                fontSize: "18px",
                fontFamily: "Outfit",
                position: "relative",
                fontWeight: "normal",
              }}
            >
              Invalid Code
            </Typography>
          </Box>
        </Box>
        <div style={{ marginTop: "20px" }}>
          <Button
            className={classes.button}
            onClick={(e) => navigate("/forgotpassword")}
          >
            Back
          </Button>
          <Button className={classes.buttons}>Resend Code</Button>
        </div>
      </Box>
      <Box class="otpRectangle-side">
        <img
          src={require("../../../Img/OTP.png")}
          className="otpcouplesideImg"
        />
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  emailNum: state.fp.emailNum,
});

export default connect(mapStateToProps)(OTP);
