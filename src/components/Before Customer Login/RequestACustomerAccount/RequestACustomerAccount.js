import React, { useState } from "react";
import "./RequestACustomerAccount.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { display } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  heading: {
    margin: "50px 0px 0px 100px",
    fontSize: "50px",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "0.41px",
    textAlign: "left",
    color: " #000",
    display: "block",
    fontFamily: "Outfit",
  },
  subtitle: {
    width: "470px",
    margin: "5px 0px 0px 100px",
    position: "relative",
    fontWeight: "600",
    fontFamily: "Outfit",
    color: "#000000",
  },
  button: {
    position: "absolute",
    left: "100px",
    top: "380px",
    backgroundColor: "black",
    fontWeight: "300px",
    color: "white",
    width: "200px",
    height: "50px",
    borderRadius: "32.5px",
    textTransform: " none",
    "&:hover": {
      background: "black",
      color: "white",
      textTransform: " none",
      fontWeight: "300px",
    },
    HBD: {
      marginLeft: "100px",
    },
  },
});

function RequestACustomerAccount() {
  const classes = useStyles();
  return (
    <div>
      <div className="request-a-customer-account">
        <div className="firstHalf1">
          <div className="HPD-Existing-Logo">
            <img
              style={{ height: "6.5vh" }}
              src={require("../../../Img/HPDD.jpeg")}
            />
          </div>

          <h1 className="div1">Request a Customer Account</h1>
          <div
            style={{
              margin: "1.35vh 0px 0px 6.51vw",
              width: "29vw",
              fontSize: "17.07px",
              fontWeight: "300",
            }}
          >
            You must have a customer account with us to submit job details and
            get a quote from us.
          </div>

          <Link to="/rca1">
            <button className="buttonstart">
              {" "}
              Start Now{" "}
              <img
                src={require("../../../Img/iconright.png")}
                className="iconright"
                alt=""
              />{" "}
            </button>
          </Link>

          <img
            src={require("../../../Img/ellipse.png")}
            alt=""
            className="ellipse"
          />
        </div>

        <div class="Rectangle-side">
          {" "}
          <img
            src={require("../../../Img/couple1.png")}
            className="RACAcouplesideImg"
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default RequestACustomerAccount;
