import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
// import Checkbox from "../../../../common/checkbox";
import step2ProgressBar from "../../../../Img/step2.png";
import { Box, MenuItem, Table, Typography } from "@mui/material";
import "./SecondStep.css";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { withStyles } from "@material-ui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Card, Checkbox } from "../../../../common";
import TableWeek from "./TableWeek";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import StyledTextField from "../../../../common/textfield";
const StyledTableRow = withStyles((theme) => ({
  root: {
    height: 42,
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: "0px 16px",
  },
}))(TableCell);
const SecondStep = () => {
  const [focused, setFocused] = React.useState("");
  const [loader, setLoader] = useState(false);
  const [selectedAdultOccupants, setSelectedAdultOccupants] =
    useState("Select");
  const [selectedChildOccupants, setSelectedChildOccupants] =
    useState("Select");
  const [selectedNoPerBedroom, setSelectedNoPerBedroom] = useState("Select");
  function createData(name, Mon, Tues, Wed, Thur, Fri, Sat, Sun) {
    return { name, Mon, Tues, Wed, Thur, Fri, Sat, Sun };
  }

  const rows = [
    createData(
      "0000 - 0600",
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />
    ),
    createData(
      "0600 - 0800",
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />
    ),
    createData(
      "0800 -  1000",
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />
    ),
    createData(
      "1000  -  1400",
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />
    ),
    createData(
      "1400  -  1800",
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />
    ),
    createData(
      "1800  -  2359",
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />,
      <Checkbox />
    ),
  ];

  return (
    <Card>
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="step4text1">
        Step 2 of 9
        <img src={step2ProgressBar} className="s4baricon" alt="step 2" />
      </div>

      <h4 style={{ fontSize: "1.4vw", marginTop: "10vh" }}>Occupancy</h4>
      <hr className="s2hr2" />
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "bold",
          fontFamily: "outfit",
        }}
      >
        Please click when you think the property will typically be occupied in
        the week
      </Typography>
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "300",
          fontFamily: "outfit",
          color: "#767676",
        }}
      >
        Just imagine its a typical week when you/your family are in the property
      </Typography>
      <Box
        sx={{
          background: "#fcfcfc",
          borderRadius: "10px",
          width: "80%",
          height: "30%",
          margin: "20px 0px 45px 20px",
          padding: "18px 32px 5px 25px",
        }}
      >
        <Table sx={{}}>
          <TableHead sx={{ borderBottom: "none" }}>
            <StyledTableRow>
              <StyledTableCell sx={{ borderBottom: "none" }}></StyledTableCell>
              <StyledTableCell
                sx={{
                  borderBottom: "none",
                  fontSize: "22px",
                  fontWeight: "300",
                  fontFamily: "Outfit",
                }}
                align="right"
              >
                Mon
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderBottom: "none",
                  fontSize: "22px",
                  fontWeight: "300",
                  fontFamily: "Outfit",
                }}
                align="right"
              >
                Tues
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderBottom: "none",
                  fontSize: "22px",
                  fontWeight: "300",
                  fontFamily: "Outfit",
                }}
                align="right"
              >
                Wed
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderBottom: "none",
                  fontSize: "22px",
                  fontWeight: "300",
                  fontFamily: "Outfit",
                }}
                align="right"
              >
                Thur
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderBottom: "none",
                  fontSize: "22px",
                  fontWeight: "300",
                  fontFamily: "Outfit",
                }}
                align="right"
              >
                Fri
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderBottom: "none",
                  fontSize: "22px",
                  fontWeight: "300",
                  fontFamily: "Outfit",
                }}
                align="right"
              >
                Sat
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderBottom: "none",
                  fontSize: "22px",
                  fontWeight: "300",
                  fontFamily: "Outfit",
                }}
                align="right"
              >
                Sun
              </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  fontSize: "22px",
                  fontWeight: "300",
                  fontFamily: "Outfit",
                }}
              >
                <StyledTableCell
                  sx={{
                    borderBottom: "none",
                    fontSize: "22px",
                    fontWeight: "300",
                    fontFamily: "Outfit",
                  }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </StyledTableCell>
                <StyledTableCell sx={{ borderBottom: "none" }} align="center">
                  {row.Mon}
                </StyledTableCell>
                <StyledTableCell sx={{ borderBottom: "none" }} align="center">
                  {row.Tues}
                </StyledTableCell>
                <StyledTableCell sx={{ borderBottom: "none" }} align="center">
                  {row.Wed}
                </StyledTableCell>
                <StyledTableCell sx={{ borderBottom: "none" }} align="center">
                  {row.Thur}
                </StyledTableCell>
                <StyledTableCell sx={{ borderBottom: "none" }} align="center">
                  {row.Fri}
                </StyledTableCell>
                <StyledTableCell sx={{ borderBottom: "none" }} align="center">
                  {row.Sat}
                </StyledTableCell>
                <StyledTableCell sx={{ borderBottom: "none" }} align="center">
                  {row.Sun}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "bold",
          fontFamily: "outfit",
        }}
      >
        Please tick when you think the property will typically be occupied in
        the year
      </Typography>
      <TableWeek />
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "bold",
          fontFamily: "outfit",
        }}
      >
        Number of Adult Occupants
      </Typography>
      <StyledTextField
        select
        sx={{ width: "30%", marginTop: "20px", marginBottom: "30px" }}
        value={selectedAdultOccupants}
        onChange={(e) => {
          setSelectedAdultOccupants(e.target.value);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        IconComponent={() =>
          focused ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
        }
      >
        <MenuItem value="1 ADULT">1 Adult</MenuItem>
        <MenuItem value="2 ADULT">2 Adult</MenuItem>
        <MenuItem value="3 ADULT">3 Adult</MenuItem>
        <MenuItem value="4 ADULT">4 Adult</MenuItem>
        <MenuItem value="5 ADULT">5 Adult</MenuItem>
        <MenuItem value="OTHER">Other</MenuItem>
      </StyledTextField>

      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "bold",
          fontFamily: "outfit",
        }}
      >
        Number of Children (under 14) Occupants
      </Typography>
      <StyledTextField
        select
        sx={{ width: "30%", marginTop: "20px", marginBottom: "30px" }}
        value={selectedChildOccupants}
        onChange={(e) => {
          setSelectedChildOccupants(e.target.value);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        IconComponent={() =>
          focused ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
        }
      >
        <MenuItem value="1 CHILD">1 Child</MenuItem>
        <MenuItem value="2 CHILD">2 Child</MenuItem>
        <MenuItem value="3 CHILD">3 Child</MenuItem>
        <MenuItem value="4 CHILD">4 Child</MenuItem>
        <MenuItem value="5 CHILD">5 Child</MenuItem>
        <MenuItem value="OTHER">Other</MenuItem>
      </StyledTextField>
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "bold",
          fontFamily: "outfit",
        }}
      >
        Number of Typical Occupants per Bedroom (average)
      </Typography>
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "300",
          fontFamily: "outfit",
          color: "#767676",
        }}
      >
        Its an average/guess hence the half people numbers
      </Typography>
      <StyledTextField
        select
        sx={{ width: "30%", marginTop: "20px", marginBottom: "30px" }}
        value={selectedNoPerBedroom}
        onChange={(e) => {
          setSelectedNoPerBedroom(e.target.value);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        IconComponent={() =>
          focused ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
        }
      >
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="1.5">1.5</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="2.5">2.5</MenuItem>
        <MenuItem value="3">3</MenuItem>
        <MenuItem value="OTHER">Other</MenuItem>
      </StyledTextField>
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

export default SecondStep;
