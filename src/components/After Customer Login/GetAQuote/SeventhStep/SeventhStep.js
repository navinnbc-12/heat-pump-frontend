import React, { useState, useEffect } from "react";
import "./SeventhStep.css";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import URL from "../../../../GlobalUrl";
import globalAPI from "../../../../GlobalApi";
import { Button, TextField, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
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

const SeventhStep = () => {
  const classes = useStyles();
  const [loader, setLoader] = useState(false);
  const token = JSON.parse(localStorage.getItem("user"));
  const [focused, setFocused] = React.useState("");
  const [priority, setPriority] = useState("Gas");

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
        <h4 style={{ fontSize: "1.4vw", marginTop: "6%" }}>Heating System</h4>
        <hr className="s2hr2" />

        <div style={{ marginTop: "2.5%" }}>
          <FormControl className={classes.selectfield}>
            <InputLabel
              id="demo-simple-select-label"
              className={classes.selectinput}
            >
              Select
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              label="Priority"
              IconComponent={() =>
                focused ? (
                  <KeyboardArrowUpIcon className={classes.icons} />
                ) : (
                  <KeyboardArrowDownIcon className={classes.icons} />
                )
              }
            >
              <MenuItem value="Gas" style={{ fontWeight: 600 }}>
                {" "}
                Gas{" "}
              </MenuItem>
              <MenuItem value="Heat Pump" style={{ fontWeight: 600 }}>
                {" "}
                Heat Pump{" "}
              </MenuItem>
              <MenuItem value="Wood" style={{ fontWeight: 600 }}>
                {" "}
                Wood{" "}
              </MenuItem>
              <MenuItem value="Oil" style={{ fontWeight: 600 }}>
                {" "}
                Oil{" "}
              </MenuItem>
              <MenuItem value="LPG" style={{ fontWeight: 600 }}>
                {" "}
                LPG{" "}
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <h4 style={{ fontSize: "1.4vw", marginTop: "4%" }}>Current Bills</h4>
          <hr
            style={{
              backgroundColor: "#f2f3f2",
              border: "0.2vh solid #f2f3f2",
            }}
          />

          <h3 style={{ fontSize: "1.1vw", marginTop: "2%", color: "#fa5e00" }}>
            Electrictiy & {priority} Annual Usage
          </h3>
          <Typography sx={{ marginTop: "1.8vh" }}>
            <TextField
              label="Amount of Electricity(kWh)"
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
              InputProps={{
                style: { fontWeight: "bolder", fontFamily: "outfit" },
              }}
            />
          </Typography>

          <Typography sx={{ marginTop: "2vh" }}>
            <TextField
              label={`Amount of ${priority}(kWh)`}
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
              InputProps={{
                style: { fontWeight: "bolder", fontFamily: "outfit" },
              }}
            />
          </Typography>
          <h3 style={{ fontSize: "1.1vw", marginTop: "2%", color: "#fa5e00" }}>
            Electrictiy & {priority} Annual Spend
          </h3>
          <Typography sx={{ marginTop: "1.8vh" }}>
            <TextField
              label="Cost of Electricity(£)"
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
              InputProps={{
                style: { fontWeight: "bolder", fontFamily: "outfit" },
              }}
            />
          </Typography>

          <Typography sx={{ marginTop: "2vh" }}>
            <TextField
              label={`Cost of ${priority}(£)`}
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
              InputProps={{
                style: { fontWeight: "bolder", fontFamily: "outfit" },
              }}
            />
          </Typography>
        </div>
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
      </div>
    </Card>
  );
};

export default SeventhStep;
