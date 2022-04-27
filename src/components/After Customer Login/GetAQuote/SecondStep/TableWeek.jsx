import React from "react";
import { Box, Table } from "@mui/material";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { withStyles } from "@material-ui/styles";
import { Radio } from "../../../../common";

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

const TableWeek = (props) => {
  // const [selectedValue, setSelectedValue] = React.useState("");
  const [selectedValueJan, setSelectedValueJan] = React.useState("");
  const [selectedValueFeb, setSelectedValueFeb] = React.useState("");
  const [selectedValueMar, setSelectedValueMar] = React.useState("");
  const [selectedValueApr, setSelectedValueApr] = React.useState("");
  const [selectedValueMay, setSelectedValueMay] = React.useState("");
  const [selectedValueJune, setSelectedValueJune] = React.useState("");
  const [selectedValueJuly, setSelectedValueJuly] = React.useState("");
  const [selectedValueAug, setSelectedValueAug] = React.useState("");
  const [selectedValueSept, setSelectedValueSept] = React.useState("");
  const [selectedValueOct, setSelectedValueOct] = React.useState("");
  const [selectedValueNov, setSelectedValueNov] = React.useState("");
  const [selectedValueDec, setSelectedValueDec] = React.useState("");

  const handleChange = (event) => {
    // setSelectedValue(event.target.value);
    // setSelectedValueJan(event.target.value);
    // setSelectedValueFeb(event.target.value);
    // setSelectedValueMar(event.target.value);
    // setSelectedValueApr(event.target.value);
    // setSelectedValueMay(event.target.value);
    // setSelectedValueJune(event.target.value);
    // setSelectedValueJuly(event.target.value);
    setSelectedValueAug(event.target.value);
    setSelectedValueSept(event.target.value);
    setSelectedValueOct(event.target.value);
    setSelectedValueNov(event.target.value);
    setSelectedValueDec(event.target.value);
  };
  const handleChangeJan = (event) => {
    setSelectedValueJan(event.target.value);
    props.getYearlySlots("Jan", event.target.value);
  };
  const handleChangeFeb = (event) => {
    setSelectedValueFeb(event.target.value);
    props.getYearlySlots("Feb", event.target.value);
  };
  const handleChangeMar = (event) => {
    setSelectedValueMar(event.target.value);
    props.getYearlySlots("Mar", event.target.value);
  };
  const handleChangeApr = (event) => {
    setSelectedValueApr(event.target.value);
    props.getYearlySlots("Apr", event.target.value);
  };
  const handleChangeMay = (event) => {
    setSelectedValueMay(event.target.value);
    props.getYearlySlots("May", event.target.value);
  };
  const handleChangeJune = (event) => {
    setSelectedValueJune(event.target.value);
    props.getYearlySlots("Jun", event.target.value);
  };
  const handleChangeJuly = (event) => {
    setSelectedValueJuly(event.target.value);
    props.getYearlySlots("Jul", event.target.value);
  };
  const handleChangeAug = (event) => {
    setSelectedValueAug(event.target.value);
    props.getYearlySlots("Aug", event.target.value);
  };
  const handleChangeSept = (event) => {
    setSelectedValueSept(event.target.value);
    props.getYearlySlots("Sep", event.target.value);
  };
  const handleChangeOct = (event) => {
    setSelectedValueOct(event.target.value);
    props.getYearlySlots("Oct", event.target.value);
  };
  const handleChangeNov = (event) => {
    setSelectedValueNov(event.target.value);
    props.getYearlySlots("Nov", event.target.value);
  };
  const handleChangeDec = (event) => {
    setSelectedValueDec(event.target.value);
    props.getYearlySlots("Dec", event.target.value);
  };

  function createData(name, All_weeks, weeks, week, Weekends, Not_Occupied) {
    return { name, All_weeks, weeks, week, Weekends, Not_Occupied };
  }

  const rows = [
    createData(
      "Jan",
      <Radio
        checked={selectedValueJan === "1"}
        onChange={handleChangeJan}
        value="1"
        name="radio-buttons"
        inputProps={{ "aria-label": "All_weeks_Jan" }}
      />,
      <Radio
        checked={selectedValueJan === "2"}
        onChange={handleChangeJan}
        value="2"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Jan" }}
      />,
      <Radio
        checked={selectedValueJan === "3"}
        onChange={handleChangeJan}
        value="3"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Jan" }}
      />,
      <Radio
        checked={selectedValueJan === "4"}
        onChange={handleChangeJan}
        value="4"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Jan" }}
      />,
      <Radio
        checked={selectedValueJan === "5"}
        onChange={handleChangeJan}
        value="5"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Jan" }}
      />
    ),
    createData(
      "Feb",
      <Radio
        checked={selectedValueFeb === "1"}
        onChange={handleChangeFeb}
        value="1"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Fed" }}
      />,
      <Radio
        checked={selectedValueFeb === "2"}
        onChange={handleChangeFeb}
        value="2"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Feb" }}
      />,
      <Radio
        checked={selectedValueFeb === "3"}
        onChange={handleChangeFeb}
        value="3"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Feb" }}
      />,
      <Radio
        checked={selectedValueFeb === "4"}
        onChange={handleChangeFeb}
        value="4"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Feb" }}
      />,
      <Radio
        checked={selectedValueFeb === "5"}
        onChange={handleChangeFeb}
        value="5"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Feb" }}
      />
    ),
    createData(
      "March",
      <Radio
        checked={selectedValueMar === "1"}
        onChange={handleChangeMar}
        value="1"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Mar" }}
      />,
      <Radio
        checked={selectedValueMar === "2"}
        onChange={handleChangeMar}
        value="2"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Mar" }}
      />,
      <Radio
        checked={selectedValueMar === "3"}
        onChange={handleChangeMar}
        value="3"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Mar" }}
      />,
      <Radio
        checked={selectedValueMar === "4"}
        onChange={handleChangeMar}
        value="4"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Mar" }}
      />,
      <Radio
        checked={selectedValueMar === "5"}
        onChange={handleChangeMar}
        value="5"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Mar" }}
      />
    ),
    createData(
      "Apr",
      <Radio
        checked={selectedValueApr === "1"}
        onChange={handleChangeApr}
        value="1"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Apr" }}
      />,
      <Radio
        checked={selectedValueApr === "2"}
        onChange={handleChangeApr}
        value="2"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Apr" }}
      />,
      <Radio
        checked={selectedValueApr === "3"}
        onChange={handleChangeApr}
        value="3"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Apr" }}
      />,
      <Radio
        checked={selectedValueApr === "4"}
        onChange={handleChangeApr}
        value="4"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Apr" }}
      />,
      <Radio
        checked={selectedValueApr === "5"}
        onChange={handleChangeApr}
        value="5"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Apr" }}
      />
    ),
    createData(
      "May",
      <Radio
        checked={selectedValueMay === "1"}
        onChange={handleChangeMay}
        value="1"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_May" }}
      />,
      <Radio
        checked={selectedValueMay === "2"}
        onChange={handleChangeMay}
        value="2"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_May" }}
      />,
      <Radio
        checked={selectedValueMay === "3"}
        onChange={handleChangeMay}
        value="3"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_May" }}
      />,
      <Radio
        checked={selectedValueMay === "4"}
        onChange={handleChangeMay}
        value="4"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_May" }}
      />,
      <Radio
        checked={selectedValueMay === "5"}
        onChange={handleChangeMay}
        value="5"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_May" }}
      />
    ),
    createData(
      "June",
      <Radio
        checked={selectedValueJune === "1"}
        onChange={handleChangeJune}
        value="1"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_June" }}
      />,
      <Radio
        checked={selectedValueJune === "2"}
        onChange={handleChangeJune}
        value="2"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_June" }}
      />,
      <Radio
        checked={selectedValueJune === "3"}
        onChange={handleChangeJune}
        value="3"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_June" }}
      />,
      <Radio
        checked={selectedValueJune === "4"}
        onChange={handleChangeJune}
        value="4"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_June" }}
      />,
      <Radio
        checked={selectedValueJune === "5"}
        onChange={handleChangeJune}
        value="5"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_June" }}
      />
    ),
    createData(
      "July",
      <Radio
        checked={selectedValueJuly === "1"}
        onChange={handleChangeJuly}
        value="1"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_July" }}
      />,
      <Radio
        checked={selectedValueJuly === "2"}
        onChange={handleChangeJuly}
        value="2"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_July" }}
      />,
      <Radio
        checked={selectedValueJuly === "3"}
        onChange={handleChangeJuly}
        value="3"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_July" }}
      />,
      <Radio
        checked={selectedValueJuly === "4"}
        onChange={handleChangeJuly}
        value="4"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_July" }}
      />,
      <Radio
        checked={selectedValueJuly === "5"}
        onChange={handleChangeJuly}
        value="5"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_July" }}
      />
    ),
    createData(
      "Aug",
      <Radio
        checked={selectedValueAug === "1"}
        onChange={handleChangeAug}
        value="1"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Aug" }}
      />,
      <Radio
        checked={selectedValueAug === "2"}
        onChange={handleChangeAug}
        value="2"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Aug" }}
      />,
      <Radio
        checked={selectedValueAug === "3"}
        onChange={handleChangeAug}
        value="3"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Aug" }}
      />,
      <Radio
        checked={selectedValueAug === "4"}
        onChange={handleChangeAug}
        value="4"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Aug" }}
      />,
      <Radio
        checked={selectedValueAug === "5"}
        onChange={handleChangeAug}
        value="5"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Aug" }}
      />
    ),
    createData(
      "Sept",
      <Radio
        checked={selectedValueSept === "1"}
        onChange={handleChangeSept}
        value="1"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Sept" }}
      />,
      <Radio
        checked={selectedValueSept === "2"}
        onChange={handleChangeSept}
        value="2"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Sept" }}
      />,
      <Radio
        checked={selectedValueSept === "3"}
        onChange={handleChangeSept}
        value="3"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Sept" }}
      />,
      <Radio
        checked={selectedValueSept === "4"}
        onChange={handleChangeSept}
        value="4"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Sept" }}
      />,
      <Radio
        checked={selectedValueSept === "5"}
        onChange={handleChangeSept}
        value="5"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Sept" }}
      />
    ),
    createData(
      "Oct",
      <Radio
        checked={selectedValueOct === "1"}
        onChange={handleChangeOct}
        value="1"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Oct" }}
      />,
      <Radio
        checked={selectedValueOct === "2"}
        onChange={handleChangeOct}
        value="2"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Oct" }}
      />,
      <Radio
        checked={selectedValueOct === "3"}
        onChange={handleChangeOct}
        value="3"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Oct" }}
      />,
      <Radio
        checked={selectedValueOct === "4"}
        onChange={handleChangeOct}
        value="4"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Oct" }}
      />,
      <Radio
        checked={selectedValueOct === "5"}
        onChange={handleChangeOct}
        value="5"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Oct" }}
      />
    ),
    createData(
      "Nov",
      <Radio
        checked={selectedValueNov === "1"}
        onChange={handleChangeNov}
        value="1"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Nov" }}
      />,
      <Radio
        checked={selectedValueNov === "2"}
        onChange={handleChangeNov}
        value="2"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Nov" }}
      />,
      <Radio
        checked={selectedValueNov === "3"}
        onChange={handleChangeNov}
        value="3"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Nov" }}
      />,
      <Radio
        checked={selectedValueNov === "4"}
        onChange={handleChangeNov}
        value="4"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Nov" }}
      />,
      <Radio
        checked={selectedValueNov === "5"}
        onChange={handleChangeNov}
        value="5"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Nov" }}
      />
    ),
    createData(
      "Dec",
      <Radio
        checked={selectedValueDec === "1"}
        onChange={handleChangeDec}
        value="1"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Dec" }}
      />,
      <Radio
        checked={selectedValueDec === "2"}
        onChange={handleChangeDec}
        value="2"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Dec" }}
      />,
      <Radio
        checked={selectedValueDec === "3"}
        onChange={handleChangeDec}
        value="3"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Dec" }}
      />,
      <Radio
        checked={selectedValueDec === "4"}
        onChange={handleChangeDec}
        value="4"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Dec" }}
      />,
      <Radio
        checked={selectedValueDec === "5"}
        onChange={handleChangeDec}
        value="5"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Dec" }}
      />
    ),
  ];

  return (
    <>
      <Box
        sx={{
          background: "#fcfcfc",
          borderRadius: "10px",
          width: "90%",
          height: "50%",
          margin: "20px 0px 45px 20px",
          padding: "18px 32px 5px 25px",
        }}
      >
        <Table>
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
                align="center"
              >
                All weeks
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderBottom: "none",
                  fontSize: "22px",
                  fontWeight: "300",
                  fontFamily: "Outfit",
                }}
                align="center"
              >
                1-2 weeks
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderBottom: "none",
                  fontSize: "22px",
                  fontWeight: "300",
                  fontFamily: "Outfit",
                }}
                align="center"
              >
                &#60; 1 week
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderBottom: "none",
                  fontSize: "22px",
                  fontWeight: "300",
                  fontFamily: "Outfit",
                }}
                align="center"
              >
                Weekends
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  borderBottom: "none",
                  fontSize: "22px",
                  fontWeight: "300",
                  fontFamily: "Outfit",
                }}
                align="center"
              >
                Not Occupied
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
                  {row.All_weeks}
                </StyledTableCell>
                <StyledTableCell sx={{ borderBottom: "none" }} align="center">
                  {row.weeks}
                </StyledTableCell>
                <StyledTableCell sx={{ borderBottom: "none" }} align="center">
                  {row.week}
                </StyledTableCell>
                <StyledTableCell sx={{ borderBottom: "none" }} align="center">
                  {row.Weekends}
                </StyledTableCell>
                <StyledTableCell sx={{ borderBottom: "none" }} align="center">
                  {row.Not_Occupied}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default TableWeek;
