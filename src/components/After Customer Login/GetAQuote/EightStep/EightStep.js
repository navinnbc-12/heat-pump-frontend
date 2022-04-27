import React, { useState, useEffect } from "react";
import "./EightStep.css";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import URL from "../../../../GlobalUrl";
import globalAPI from "../../../../GlobalApi";
import { Button, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import { Card } from "../../../../common";

const useStyles = makeStyles({});

const EightStep = (props) => {
  const classes = useStyles();
  const [loader, setLoader] = useState(false);
  const [text, setText] = useState("");
  const token = JSON.parse(localStorage.getItem("user"));

  return (
    <Card>
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="s8text1">
        Step 8 of 9
        <img src={require("../../../../Img/step6.png")} className="s8baricon" />
      </div>

      <div>
        <Typography
          style={{
            fontSize: "30px",
            fontFamily: "Outfit",
            fontWeight: "600",
            marginTop: "10vh",
          }}
        >
          Other
        </Typography>
        <hr
          style={{
            backgroundColor: "#f2f3f2",
            border: "0.1vh solid #f2f3f2",
          }}
        />
        <div style={{ marginTop: "1.5%" }}>
          <textarea
            className="quotetextarea"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Any Other Comments"
          ></textarea>
        </div>
      </div>
      <Box sx={{ display: "flex" }}>
        <button
          variant="contained"
          className="btn-house btn-icon"
          onClick={props.prev}
        >
          <span style={{ height: "27px", width: "27px" }}>
            <ChevronLeftSharpIcon sx={{ height: "27px", width: "27px" }} />
          </span>
          <span style={{ marginLeft: "100px" }}>Previous</span>
        </button>
        <button
          variant="contained"
          className="btn-house Add btn-icon"
          onClick={() => {
            props.getPayloadData(["other_details"], [text]);
            props._addNewQuote();
          }}
        >
          <span style={{ marginRight: "100px" }}>Submit</span>
          <span style={{ height: "27px", width: "27px" }}>
            <ChevronRightSharpIcon sx={{ height: "27px", width: "27px" }} />
          </span>
        </button>
      </Box>
    </Card>
  );
};

export default EightStep;
