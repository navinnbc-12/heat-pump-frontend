import React, { useState, useEffect } from "react";
import "./SixthStep.css";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import URL from "../../../../GlobalUrl";
import globalAPI from "../../../../GlobalApi";
import { Button, TextField, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import { Card } from "../../../../common";

const useStyles = makeStyles({
  textfield: {
    "& label.Mui-focused": {
      color: "black",
      fontSize: "1vw",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "0.46vw",
      marginRight: "3.73vw",
      height: "6.71vh",
      fontSize: "1vw",
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
  button: {
    backgroundColor: "black",
    width: "20%",
    height: "1.5%",
    borderRadius: "2.5vw",
    marginTop: "5%",
    fontSize: "1vw",
  },
  button1: {
    backgroundColor: "white",
    width: "20%",
    height: "1.5%",
    borderRadius: "2.5vw",
    marginTop: "5%",
    fontSize: "1vw",
    color: "black",
  },
  button2: {
    backgroundColor: "black",
    width: "20%",
    height: "1.5%",
    borderRadius: "2.5vw",
    marginTop: "5%",
    fontSize: "1vw",
    marginLeft: "2%",
  },
});

const SixthStep = () => {
  const classes = useStyles();
  const [loader, setLoader] = useState(false);
  const token = JSON.parse(localStorage.getItem("user"));
  const [inputList, setInputList] = useState([]);
  const Input = () => {
    return (
      <div style={{ marginTop: "2.5%" }}>
        <TextField
          label="Room Description"
          className={classes.textfield}
          value={""}
          onChange={""}
          size="small"
          InputLabelProps={{
            style: {
              fontWeight: "bolder",
              fontFamily: "outfit",
              fontSize: "1vw",
            },
          }}
          InputProps={{ style: { fontWeight: "bolder", fontFamily: "outfit" } }}
        />
        <TextField
          label="Radiator(H X W in mm)"
          className={classes.textfield}
          value={""}
          onChange={""}
          size="small"
          InputLabelProps={{
            style: {
              fontWeight: "bolder",
              fontFamily: "outfit",
              fontSize: "1vw",
            },
          }}
          InputProps={{ style: { fontWeight: "bolder", fontFamily: "outfit" } }}
        />
        <TextField
          label="Window(H X W in mm)"
          className={classes.textfield}
          value={""}
          onChange={""}
          size="small"
          InputLabelProps={{
            style: {
              fontWeight: "bolder",
              fontFamily: "outfit",
              fontSize: "1vw",
            },
          }}
          InputProps={{ style: { fontWeight: "bolder", fontFamily: "outfit" } }}
        />
      </div>
    );
  };

  useEffect(() => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  }, []);

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <Card>
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="s6text1">
        Step 6 of 9
        <img src={require("../../../../Img/step6.png")} className="s6baricon" />
      </div>

      <h4 style={{ fontSize: "1.4vw", marginTop: "6%" }}>
        Radiator and Window Sizes
      </h4>
      <hr className="s2hr2" />
      {inputList}
      <Typography>
        <Button
          className={classes.button}
          onClick={onAddBtnClick}
          variant="contained"
          startIcon={<AddIcon style={{ height: "5vh", width: "2vw" }} />}
        >
          Add Room
        </Button>
      </Typography>
      <Box sx={{ display: "flex" }}>
        <button variant="contained" className="btn-house btn-icon">
          <span style={{ height: "27px", width: "27px" }}>
            <ChevronLeftSharpIcon sx={{ height: "27px", width: "27px" }} />
          </span>
          <span style={{ marginLeft: "100px" }}>Previous</span>
        </button>
        <button variant="contained" className="btn-house Add btn-icon">
          <span style={{ marginRight: "100px" }}>Continue</span>
          <span style={{ height: "27px", width: "27px" }}>
            <ChevronRightSharpIcon sx={{ height: "27px", width: "27px" }} />
          </span>
        </button>
      </Box>
    </Card>
  );
};

export default SixthStep;
