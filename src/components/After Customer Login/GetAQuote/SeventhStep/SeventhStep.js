import React, { useState, useEffect } from "react";
import "./SeventhStep.css";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import URL from "../../../../GlobalUrl";
import globalAPI from "../../../../GlobalApi";
import { Button, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import { Card, TextField } from "../../../../common";
import StyledTextField from "../../../../common/textfield";

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
      width: "25vw",
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
  selectfield: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "0.61vw",
      marginRight: "1.22vw",
      width: "15.22vw",
      height: "6.51vh",
      fontWeight: "bolder",
      fontFamily: "outfit",
      backgroundColor: "white",

      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    icons: {
      fontSize: "0.5vw",
    },
  },
  selectinput: {
    marginBottom: "0.67vh",
    fontFamily: "outfit",
    fontWeight: "bolder",
    fontSize: "1vw",
  },
});
const heatValue = {
  Gas: 1,
  "Heat Pump": 2,
  Wood: 3,
  Oil: 4,
  LPG: 5,
};
const SeventhStep = (props) => {
  const classes = useStyles();
  const [loader, setLoader] = useState(false);
  const token = JSON.parse(localStorage.getItem("user"));
  const [focused, setFocused] = React.useState("");
  const [priority, setPriority] = useState("Gas");
  const [priorityValue, setPriorityValue] = useState();
  const [currnetBills, setCurrentBills] = useState({});
  return (
    <Card>
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="s7text1">
        Step 7 of 9
        <img src={require("../../../../Img/step6.png")} className="s7baricon" />
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
          Heating System
        </Typography>
        <hr className="s2hr2" />

        <div style={{ marginTop: "2.5%" }}>
          <StyledTextField
            select
            sx={{ width: "20%" }}
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
              setPriorityValue(heatValue[e.target.value]);
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            IconComponent={() =>
              focused ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            }
          >
            <MenuItem value="Gas">Gas</MenuItem>
            <MenuItem value="Heat Pump">Heat Pump</MenuItem>
            <MenuItem value="Wood">Wood</MenuItem>
            <MenuItem value="Oil">Oil</MenuItem>
            <MenuItem value="LPG">LPG</MenuItem>
          </StyledTextField>
        </div>

        <div>
          <Typography
            style={{
              fontSize: "30px",
              fontFamily: "Outfit",
              fontWeight: "600",
              marginTop: "3%",
            }}
          >
            Current Bills
          </Typography>
          <hr
            style={{
              backgroundColor: "#f2f3f2",
              border: "0.2vh solid #f2f3f2",
            }}
          />

          <Typography
            style={{
              fontSize: "22px",
              fontFamily: "Outfit",
              fontWeight: "300",
              marginTop: "2%",
              color: "#fa5e00",
            }}
          >
            Electrictiy & {priority} Annual Usage
          </Typography>
          <Typography sx={{ marginTop: "1.8vh" }}>
            <TextField
              sx={{ width: "30%" }}
              label="Amount of Electricity (kWh)"
              value={currnetBills?.amount_of_electricity}
              onChange={(e) => {
                let temp = currnetBills;
                temp["amount_of_electricity"] = e.target.value;
                setCurrentBills(temp);
              }}
            />
          </Typography>

          <Typography sx={{ marginTop: "2vh" }}>
            <TextField
              sx={{ width: "30%" }}
              label={`Amount of ${priority} (kWh)`}
              value={currnetBills?.amount_of_gas}
              onChange={(e) => {
                let temp = currnetBills;
                temp["amount_of_gas"] = e.target.value;
                setCurrentBills(temp);
              }}
            />
          </Typography>
          <h3
            style={{
              fontSize: "22px",
              fontFamily: "Outfit",
              fontWeight: "300",
              marginTop: "2%",
              color: "#fa5e00",
            }}
          >
            Electrictiy & {priority} Annual Spend
          </h3>
          <Typography sx={{ marginTop: "1.8vh" }}>
            <TextField
              sx={{ width: "30%" }}
              label="Cost of Electricity (£)"
              value={currnetBills?.cost_of_electricity}
              onChange={(e) => {
                let temp = currnetBills;
                temp["cost_of_electricity"] = e.target.value;
                setCurrentBills(temp);
              }}
            />
          </Typography>

          <Typography sx={{ marginTop: "2vh" }}>
            <TextField
              sx={{ width: "30%" }}
              label={`Cost of ${priority} (£)`}
              value={currnetBills?.cost_of_gas}
              onChange={(e) => {
                let temp = currnetBills;
                temp["cost_of_gas"] = e.target.value;
                setCurrentBills(temp);
              }}
            />
          </Typography>
        </div>
        <Box sx={{ display: "flex", marginTop: "30px" }}>
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
              props.getPayloadData(
                [
                  "heating_system",
                  "amount_of_electricity",
                  "amount_of_gas",
                  "cost_of_electricity",
                  "cost_of_gas",
                ],
                [
                  priorityValue,
                  currnetBills.amount_of_electricity,
                  currnetBills.amount_of_gas,
                  currnetBills.cost_of_electricity,
                  currnetBills.cost_of_gas,
                ]
              );
              props.next();
            }}
          >
            <span style={{ marginRight: "100px" }}>Continue</span>
            <span style={{ height: "27px", width: "27px" }}>
              <ChevronRightSharpIcon sx={{ height: "27px", width: "27px" }} />
            </span>
          </button>
        </Box>
      </div>
    </Card>
  );
};

export default SeventhStep;
