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
import { InsertEmoticon } from "@mui/icons-material";
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
const SecondStep = (props) => {
  const [focused, setFocused] = React.useState("");
  const [loader, setLoader] = useState(false);
  const [weeklySlots, setWeeklySlots] = useState({
    slot1: Array(7).fill(false),
    slot2: Array(7).fill(false),
    slot3: Array(7).fill(false),
    slot4: Array(7).fill(false),
    slot5: Array(7).fill(false),
    slot6: Array(7).fill(false),
  });
  const [yearlySlots, setYearlySlots] = useState({
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    Jun: [],
    Jul: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  });
  const [selectedAdultOccupants, setSelectedAdultOccupants] = useState("1");
  const [selectedChildOccupants, setSelectedChildOccupants] = useState("1");
  const [selectedNoPerBedroom, setSelectedNoPerBedroom] = useState(1);
  function createData(name, Mon, Tues, Wed, Thur, Fri, Sat, Sun) {
    return { name, Mon, Tues, Wed, Thur, Fri, Sat, Sun };
  }
  const handleWeeklySlots = (index, slot) => {
    let temp = weeklySlots;
    temp[`slot${slot}`][index] = !weeklySlots[`slot${slot}`][index];
    setWeeklySlots(temp);
  };
  const getYearlySlots = (month, items) => {
    let temp = yearlySlots;
    temp[month] = [items];
    setYearlySlots(temp);
  };
  const rows = [
    createData(
      "0000 - 0600",
      <Checkbox
        defaultChecked={weeklySlots.slot1[0]}
        onChange={() => {
          handleWeeklySlots(0, 1);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot1[1]}
        onChange={() => {
          handleWeeklySlots(1, 1);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot1[2]}
        onChange={() => {
          handleWeeklySlots(2, 1);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot1[3]}
        onChange={() => {
          handleWeeklySlots(3, 1);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot1[4]}
        onChange={() => {
          handleWeeklySlots(4, 1);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot1[5]}
        onChange={() => {
          handleWeeklySlots(5, 1);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot1[6]}
        onChange={() => {
          handleWeeklySlots(6, 1);
        }}
      />
    ),

    createData(
      "0600 - 0800",
      <Checkbox
        defaultChecked={weeklySlots.slot2[0]}
        onChange={() => {
          handleWeeklySlots(0, 2);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot2[1]}
        onChange={() => {
          handleWeeklySlots(1, 2);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot2[2]}
        onChange={() => {
          handleWeeklySlots(2, 2);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot2[3]}
        onChange={() => {
          handleWeeklySlots(3, 2);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot2[4]}
        onChange={() => {
          handleWeeklySlots(4, 2);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot2[5]}
        onChange={() => {
          handleWeeklySlots(5, 2);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot2[6]}
        onChange={() => {
          handleWeeklySlots(6, 2);
        }}
      />
    ),
    createData(
      "0800 - 1000",
      <Checkbox
        defaultChecked={weeklySlots.slot3[0]}
        onChange={() => {
          handleWeeklySlots(0, 3);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot3[1]}
        onChange={() => {
          handleWeeklySlots(1, 3);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot3[2]}
        onChange={() => {
          handleWeeklySlots(2, 3);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot3[3]}
        onChange={() => {
          handleWeeklySlots(3, 3);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot3[4]}
        onChange={() => {
          handleWeeklySlots(4, 3);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot3[5]}
        onChange={() => {
          handleWeeklySlots(5, 3);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot3[6]}
        onChange={() => {
          handleWeeklySlots(6, 3);
        }}
      />
    ),
    createData(
      "1000  -  1400",
      <Checkbox
        defaultChecked={weeklySlots.slot4[0]}
        onChange={() => {
          handleWeeklySlots(0, 4);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot4[1]}
        onChange={() => {
          handleWeeklySlots(1, 4);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot4[2]}
        onChange={() => {
          handleWeeklySlots(2, 4);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot4[3]}
        onChange={() => {
          handleWeeklySlots(3, 4);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot4[4]}
        onChange={() => {
          handleWeeklySlots(4, 4);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot4[5]}
        onChange={() => {
          handleWeeklySlots(5, 4);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot4[6]}
        onChange={() => {
          handleWeeklySlots(6, 4);
        }}
      />
    ),
    createData(
      "1400  -  1800",
      <Checkbox
        defaultChecked={weeklySlots.slot5[0]}
        onChange={() => {
          handleWeeklySlots(0, 4);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot5[1]}
        onChange={() => {
          handleWeeklySlots(1, 5);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot5[2]}
        onChange={() => {
          handleWeeklySlots(2, 5);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot5[3]}
        onChange={() => {
          handleWeeklySlots(3, 5);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot5[4]}
        onChange={() => {
          handleWeeklySlots(4, 5);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot5[5]}
        onChange={() => {
          handleWeeklySlots(5, 5);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot5[6]}
        onChange={() => {
          handleWeeklySlots(6, 5);
        }}
      />
    ),
    createData(
      "1800  -  2359",
      <Checkbox
        defaultChecked={weeklySlots.slot6[0]}
        onChange={() => {
          handleWeeklySlots(0, 6);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot6[1]}
        onChange={() => {
          handleWeeklySlots(1, 6);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot6[2]}
        onChange={() => {
          handleWeeklySlots(2, 6);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot6[3]}
        onChange={() => {
          handleWeeklySlots(3, 6);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot6[4]}
        onChange={() => {
          handleWeeklySlots(4, 6);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot6[5]}
        onChange={() => {
          handleWeeklySlots(5, 6);
        }}
      />,
      <Checkbox
        defaultChecked={weeklySlots.slot6[6]}
        onChange={() => {
          handleWeeklySlots(6, 6);
        }}
      />
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

      <Typography
        style={{
          fontSize: "30px",
          fontFamily: "Outfit",
          fontWeight: "600",
          marginTop: "10vh",
        }}
      >
        Occupancy
      </Typography>
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
                  textAlign: "center",
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
                  textAlign: "center",
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
                  textAlign: "center",
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
                  textAlign: "center",
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
                  textAlign: "center",
                }}
                align="right"
              >
                Fri
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  textAlign: "center",
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
                  textAlign: "center",
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
      <TableWeek
        getYearlySlots={(month, items) => getYearlySlots(month, items)}
      />
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
        <MenuItem value="1">1 Adult</MenuItem>
        <MenuItem value="2">2 Adult</MenuItem>
        <MenuItem value="3">3 Adult</MenuItem>
        <MenuItem value="4">4 Adult</MenuItem>
        <MenuItem value="5">5 Adult</MenuItem>
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
        <MenuItem value="1">1 Child</MenuItem>
        <MenuItem value="2">2 Child</MenuItem>
        <MenuItem value="3">3 Child</MenuItem>
        <MenuItem value="4">4 Child</MenuItem>
        <MenuItem value="5">5 Child</MenuItem>
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
            // let temp1 = temp.map((item) => item);
            Object.values(weeklySlots).map((item) => {
              return item.map((slot, index) => {
                if (slot == true) item[index] = index + 1;
                else item[index] = null;
              });
            });
            // Object.values(weeklySlots).map((items) =>
            //   items.filter((slot) => slot !== isNaN)
            // );
            // let temp1 = {};
            // temp.map((item, index) => {
            //   temp1[`slot${index + 1}`] = item;
            // });

            props.getPayloadData(
              ["occupancy"],
              [
                {
                  weekly: weeklySlots,
                  // weeklySlots,
                  yearly: yearlySlots,
                  number_of_adultOccupants: selectedAdultOccupants,
                  number_of_childrenOccupants: selectedChildOccupants,
                  number_of_typicalOccupantsPerBedroom: selectedNoPerBedroom,
                },
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
    </Card>
  );
};

export default SecondStep;
