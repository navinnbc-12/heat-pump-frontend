import React, { useState, useEffect } from "react";
import "./SixthStep.css";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import URL from "../../../../GlobalUrl";
import globalAPI from "../../../../GlobalApi";
import { Button, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import { Card, TextField } from "../../../../common";
import StyledTextField from "../../../../common/textfield";

const useStyles = makeStyles({
  textfield: {
    "& label.Mui-focused": {
      color: "black",
      fontSize: "18px",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "0.46vw",
      marginRight: "3.73vw",
      height: "6.71vh",
      fontSize: "18px",
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
    fontSize: "18px",
    fontFamily: "Outfit",
    fontWeight: "300",
  },
  button1: {
    backgroundColor: "white",
    width: "20%",
    height: "1.5%",
    borderRadius: "2.5vw",
    marginTop: "5%",
    fontSize: "18px",
    fontFamily: "Outfit",
    fontWeight: "300",
    color: "black",
  },
  button2: {
    backgroundColor: "black",
    width: "20%",
    height: "1.5%",
    borderRadius: "2.5vw",
    marginTop: "5%",
    fontSize: "18px",
    fontFamily: "Outfit",
    fontWeight: "300",
    marginLeft: "2%",
  },
});

const SixthStep = (props) => {
  const classes = useStyles();
  const [loader, setLoader] = useState(false);
  const token = JSON.parse(localStorage.getItem("user"));
  const [inputList, setInputList] = useState([
    {
      room_desc: "",
      radiator_size: "",
      window_size: "",
    },
  ]);
  const Input = () => {
    return (
      <div style={{ marginTop: "2.5%" }}>
        <StyledTextField
          sx={{ marginRight: "40px", width: "20%" }}
          label="Room Description"
          value={""}
          onChange={""}
        />
        <StyledTextField
          sx={{ marginRight: "40px", width: "20%" }}
          label="Radiator (H x W in mm)"
          value={""}
          onChange={""}
        />
        <StyledTextField
          sx={{ width: "20%" }}
          label="Window (H x W in mm)"
          value={""}
          onChange={""}
        />
      </div>
    );
  };

  useEffect(() => {
    // setInputList(inputList.concat(<Input key={inputList.length} />));
  }, []);

  const onAddBtnClick = (event) => {
    // setInputList(inputList.concat(<Input key={inputList.length} />));
    let temp = [...inputList];
    temp.push({
      room_desc: "",
      radiator_size: "",
      window_size: "",
    });
    setInputList(temp);
  };
  const setData = (index, field, newValue) => {
    let temp = [...inputList];
    temp[index][field] = newValue;
    setInputList(temp);
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

      <Typography
        style={{
          fontSize: "30px",
          fontFamily: "Outfit",
          fontWeight: "600",
          marginTop: "10vh",
        }}
      >
        Radiator and Window Sizes
      </Typography>
      <hr className="s2hr2" />
      {/* {inputList} */}
      {inputList.length &&
        inputList?.map((item, index) => (
          <div style={{ marginTop: "2.5%" }} key={`inputList${index}`}>
            <StyledTextField
              sx={{ marginRight: "40px", width: "20%" }}
              label="Room Description"
              value={item?.room_desc || ""}
              onChange={(e) => {
                setData(index, "room_desc", e.target.value);
              }}
            />
            <StyledTextField
              sx={{ marginRight: "40px", width: "20%" }}
              label="Radiator (H x W in mm)"
              value={item?.radiator_size || ""}
              onChange={(e) => {
                setData(index, "radiator_size", e.target.value);
              }}
            />
            <StyledTextField
              sx={{ width: "20%" }}
              label="Window (H x W in mm)"
              value={item?.window_size || ""}
              onChange={(e) => {
                setData(index, "window_size", e.target.value);
              }}
            />
          </div>
        ))}

      <Typography>
        <Button
          sx={{
            "&:hover": {
              background: "#000",
            },
          }}
          className={classes.button}
          onClick={onAddBtnClick}
          variant="contained"
          startIcon={<AddIcon style={{ height: "5vh", width: "2vw" }} />}
        >
          Add Room
        </Button>
      </Typography>
      <Box sx={{ display: "flex", marginTop: "60px" }}>
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
            props.getPayloadData(["radiator_and_window_sizes"], [inputList]);
            props.next();
          }}
        >
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
