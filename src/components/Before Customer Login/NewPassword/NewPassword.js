import React from "react";
import "./NewPassword.css";

import { useState } from "react";
import HPD from "../../../Img/HPDD.jpeg";
import resetPassword from "../../../Img/newpassword.png";

import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";

import URL from "../../../GlobalUrl";
import globalAPI from "../../../GlobalApi";
import { Box, Divider } from "@mui/material";
import StyledTextField from "../../../common/textfield";

const useStyles = makeStyles({
  button: {
    textTransform: "none",
    margin: "2.68vh 0px 0px 60px ",
    backgroundColor: "black",
    color: "white",
    width: "230px",
    height: "65px",
    borderRadius: "32.5px",
    fontSize: "18px",
    fontFamily: "Outfit",
    "&:hover": {
      textTransform: "none",
      background: "black",
      color: "white",
    },
  },
  buttons: {
    textTransform: "none",
    margin: "2.7vh 0px 0px 1.3vw ",
    border: "solid 0.134vh #d3d3d3",
    backgroundColor: "#f9f9f9",
    color: " #000",
    width: "190px",
    height: "65px",
    borderRadius: "32.5px",
    fontSize: "18px",
    fontFamily: "Outfit",
    fontWeight: "300",
    "&:hover": {
      textTransform: "none",
      backgroundColor: "#f9f9f9",
      color: "#000",
    },
  },
});

const pass = {
  newPassword: "",
  confirmPassword: "",
};

function NewPassword() {
  const classes = useStyles();

  const [password, setPassword] = useState(pass);
  const [showpassword, setShowpassword] = useState({
    istrue: false,
    type: "password",
  });
  const [showpassword1, setShowpassword1] = useState({
    istrue: false,
    type: "password",
  });
  const [visibility, setVisibility] = useState("hidden");
  const [color, setColor] = useState("#a4a4a4");

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setPassword((state) => ({ ...state, [e.target.name]: e.target.value }));
    setColor("#a4a4a4");
    setVisibility("hidden");
  };

  const togglePassword = () => {
    if (showpassword.istrue) {
      setShowpassword((state) => ({
        ...state,
        istrue: false,
        type: "password",
      }));
    } else {
      setShowpassword((state) => ({ ...state, istrue: true, type: "text" }));
    }
  };
  const togglePassword1 = () => {
    if (showpassword1.istrue) {
      setShowpassword1((state) => ({
        ...state,
        istrue: false,
        type: "password",
      }));
    } else {
      setShowpassword1((state) => ({ ...state, istrue: true, type: "text" }));
    }
  };

  const submitHandler = () => {
    debugger;
    console.log("hello");
    if (password.newPassword.length < 8) {
      setColor("red");
      return;
    }
    if (password.newPassword != password.confirmPassword) {
      setVisibility("");
      return;
    } else {
      const reset_token = JSON.parse(localStorage.getItem("reset_token"));
      const data = {
        reset_token: reset_token,
        new_password: password.newPassword,
        confirm_new_password: password.confirmPassword,
      };
      setLoader(true);
      axios
        .post(URL + globalAPI.changePassword, data)
        .then((response) => {
          const res = response.data;
          setLoader(false);
          // toast.success(response.data.message);
          if (res.success) {
            toast.success(res.data.message);
            navigate("/");
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          setLoader(false);
          toast.error("Something Went Wrong");
        });
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      {loader && (
        <div className="customLoader">
          <TailSpin color="#Fa5e00" height="100" width="100" />
        </div>
      )}
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
          style={{
            fontSize: "60px",
            fontWeight: "300",
            fontFamily: "Outfit",
            width: "783px",
            height: "88px",
            position: "relative",
            margin: "0 197px 40px 55px",
          }}
        >
          Create New Password
        </Typography>
        <Typography
          style={{
            fontSize: "22px",
            fontWeight: "300",
            fontFamily: "Outfit",
            width: "597px",
            lineHeight: "normal",
            position: "relative",
            letterSpacing: "0.03px",
            height: "84px",
            margin: "0px 434px 20px 59px",
          }}
        >
          Your new password must be different from the previous used passwords..
        </Typography>
        <Typography
          style={{
            fontSize: "18px",
            fontFamily: "Outfit",
            fontWeight: "300",
            margin: "0 385px 5px 59px",
            position: "relative",
            color: "#a4a4a4",
          }}
        >
          Password
        </Typography>
        <StyledTextField
          sx={{ width: "500px", height: "63px", margin: "0 0 0 60px" }}
          type={showpassword.type}
          value={password.newPassword}
          onChange={changeHandler}
          name="newPassword"
        />
        {showpassword.istrue ? (
          <img
            src={require("../../../Img/iconEyeOpen.png")}
            alt=""
            className="npeyeIconOpen"
            onClick={togglePassword}
          />
        ) : (
          <img
            src={require("../../../Img/icon3.png")}
            alt=""
            className="npeyeIcon"
            onClick={togglePassword}
          />
        )}
        <Typography
          style={{
            color: `${color}`,
            fontFamily: "Outfit",
            fontSize: "18px",
            margin: "-11px 0px 0px 60px",
          }}
        >
          Must be atleast 8 characters
        </Typography>
        <Typography
          style={{
            fontSize: "18px",
            fontFamily: "Outfit",
            fontWeight: "300",
            margin: "30px 385px 5px 59px",
            color: "#a4a4a4",
            width: "250px",
          }}
        >
          Confirm Password
        </Typography>
        <StyledTextField
          sx={{ width: "500px", height: "63px", margin: "0 0 0 60px" }}
          type={showpassword1.type}
          value={password.confirmPassword}
          onChange={changeHandler}
          className="nppassword"
          name="confirmPassword"
        />
        {showpassword1.istrue ? (
          <img
            src={require("../../../Img/iconEyeOpen.png")}
            alt=""
            className="npeyeIconOpen"
            onClick={togglePassword1}
          />
        ) : (
          <img
            src={require("../../../Img/icon3.png")}
            alt=""
            className="npeyeIcon"
            onClick={togglePassword1}
          />
        )}
        <Typography
          style={{
            visibility: `${visibility}`,
            fontSize: "18px",
            fontFamily: "Outfit",
            position: "relative",
            margin: "-11px 0px 0px 62px",
            color: "red",
          }}
        >
          Both passwords should match
        </Typography>
        <Box style={{ marginTop: "4vh" }}>
          <Button className={classes.button} onClick={submitHandler}>
            Reset Password
          </Button>
          <Button className={classes.buttons}>Back</Button>
        </Box>
        <Divider
          sx={{
            width: "500px",
            margin: "100px 0 0 59px",
            border: "2px solid #f4f4f4",
            background: "#f4f4f4",
          }}
        />
        <div
          style={{
            margin: "0.7vh 0px 100px 59px",
            fontWeight: "600",
            fontSize: "18px",
            fontFamily: "Outfit",
          }}
        >
          <span>Need more help?</span>
          <Link to="/">
            <span className="learnMore">Learn More</span>
          </Link>
        </div>
      </Box>
      <Box class="npRectangle-side">
        <img
          src={resetPassword}
          className="npcouplesideImg"
          alt="Reset Password"
        />
      </Box>
    </Box>
  );
}

export default NewPassword;
