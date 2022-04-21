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

const TableWeek = () => {
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
  };
  const handleChangeFeb = (event) => {
    setSelectedValueFeb(event.target.value);
  };
  const handleChangeMar = (event) => {
    setSelectedValueMar(event.target.value);
  };
  const handleChangeApr = (event) => {
    setSelectedValueApr(event.target.value);
  };
  const handleChangeMay = (event) => {
    setSelectedValueMay(event.target.value);
  };
  const handleChangeJune = (event) => {
    setSelectedValueJune(event.target.value);
  };
  const handleChangeJuly = (event) => {
    setSelectedValueJuly(event.target.value);
  };
  const handleChangeAug = (event) => {
    setSelectedValueAug(event.target.value);
  };
  const handleChangeSept = (event) => {
    setSelectedValueSept(event.target.value);
  };
  const handleChangeOct = (event) => {
    setSelectedValueOct(event.target.value);
  };
  const handleChangeNov = (event) => {
    setSelectedValueNov(event.target.value);
  };
  const handleChangeDec = (event) => {
    setSelectedValueDec(event.target.value);
  };

  function createData(name, All_weeks, weeks, week, Weekends, Not_Occupied) {
    return { name, All_weeks, weeks, week, Weekends, Not_Occupied };
  }

  const rows = [
    createData(
      "Jan",
      <Radio
        checked={selectedValueJan === "  All_weeks_Jan"}
        onChange={handleChangeJan}
        value="  All_weeks_Jan"
        name="radio-buttons"
        inputProps={{ "aria-label": "  All_weeks_Jan" }}
      />,
      <Radio
        checked={selectedValueJan === "weeks_Jan"}
        onChange={handleChangeJan}
        value="weeks_Jan"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Jan" }}
      />,
      <Radio
        checked={selectedValueJan === "week_Jan"}
        onChange={handleChangeJan}
        value="week_Jan"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Jan" }}
      />,
      <Radio
        checked={selectedValueJan === "Weekends_Jan"}
        onChange={handleChangeJan}
        value="Weekends_Jan"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Jan" }}
      />,
      <Radio
        checked={selectedValueJan === "Not_Occupied_Jan"}
        onChange={handleChangeJan}
        value="Not_Occupied_Jan"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Jan" }}
      />
    ),
    createData(
      "Feb",
      <Radio
        checked={selectedValueFeb === " All_weeks_Fed"}
        onChange={handleChangeFeb}
        value=" All_weeks_Fed"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Fed" }}
      />,
      <Radio
        checked={selectedValueFeb === "weeks_Feb"}
        onChange={handleChangeFeb}
        value="weeks_Feb"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Feb" }}
      />,
      <Radio
        checked={selectedValueFeb === "week_Feb"}
        onChange={handleChangeFeb}
        value="week_Feb"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Feb" }}
      />,
      <Radio
        checked={selectedValueFeb === "Weekends_Feb"}
        onChange={handleChangeFeb}
        value="Weekends_Feb"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Feb" }}
      />,
      <Radio
        checked={selectedValueFeb === "Not_Occupied_Feb"}
        onChange={handleChangeFeb}
        value="Not_Occupied_Feb"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Feb" }}
      />
    ),
    createData(
      "March",
      <Radio
        checked={selectedValueMar === " All_weeks_Mar"}
        onChange={handleChangeMar}
        value=" All_weeks_Mar"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Mar" }}
      />,
      <Radio
        checked={selectedValueMar === "weeks_Mar"}
        onChange={handleChangeMar}
        value="weeks_Mar"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Mar" }}
      />,
      <Radio
        checked={selectedValueMar === "week_Mar"}
        onChange={handleChangeMar}
        value="week_Mar"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Mar" }}
      />,
      <Radio
        checked={selectedValueMar === "Weekends_Mar"}
        onChange={handleChangeMar}
        value="Weekends_Mar"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Mar" }}
      />,
      <Radio
        checked={selectedValueMar === "Not_Occupied_Mar"}
        onChange={handleChangeMar}
        value="Not_Occupied_Mar"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Mar" }}
      />
    ),
    createData(
      "Apr",
      <Radio
        checked={selectedValueApr === " All_weeks_Apr"}
        onChange={handleChangeApr}
        value=" All_weeks_Apr"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Apr" }}
      />,
      <Radio
        checked={selectedValueApr === "weeks_Apr"}
        onChange={handleChangeApr}
        value="weeks_Apr"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Apr" }}
      />,
      <Radio
        checked={selectedValueApr === "week_Apr"}
        onChange={handleChangeApr}
        value="week_Apr"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Apr" }}
      />,
      <Radio
        checked={selectedValueApr === "Weekends_Apr"}
        onChange={handleChangeApr}
        value="Weekends_Apr"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Apr" }}
      />,
      <Radio
        checked={selectedValueApr === "Not_Occupied_Apr"}
        onChange={handleChangeApr}
        value="Not_Occupied_Apr"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Apr" }}
      />
    ),
    createData(
      "May",
      <Radio
        checked={selectedValueMay === " All_weeks_May"}
        onChange={handleChangeMay}
        value=" All_weeks_May"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_May" }}
      />,
      <Radio
        checked={selectedValueMay === "weeks_May"}
        onChange={handleChangeMay}
        value="weeks_May"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_May" }}
      />,
      <Radio
        checked={selectedValueMay === "week_May"}
        onChange={handleChangeMay}
        value="week_May"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_May" }}
      />,
      <Radio
        checked={selectedValueMay === "Weekends_May"}
        onChange={handleChangeMay}
        value="Weekends_May"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_May" }}
      />,
      <Radio
        checked={selectedValueMay === "Not_Occupied_May"}
        onChange={handleChangeMay}
        value="Not_Occupied_May"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_May" }}
      />
    ),
    createData(
      "June",
      <Radio
        checked={selectedValueJune === " All_weeks_June"}
        onChange={handleChangeJune}
        value=" All_weeks_June"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_June" }}
      />,
      <Radio
        checked={selectedValueJune === "weeks_June"}
        onChange={handleChangeJune}
        value="weeks_June"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_June" }}
      />,
      <Radio
        checked={selectedValueJune === "week_June"}
        onChange={handleChangeJune}
        value="week_June"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_June" }}
      />,
      <Radio
        checked={selectedValueJune === "Weekends_June"}
        onChange={handleChangeJune}
        value="Weekends_June"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_June" }}
      />,
      <Radio
        checked={selectedValueJune === "Not_Occupied_June"}
        onChange={handleChangeJune}
        value="Not_Occupied_June"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_June" }}
      />
    ),
    createData(
      "July",
      <Radio
        checked={selectedValueJuly === " All_weeks_July"}
        onChange={handleChangeJuly}
        value=" All_weeks_July"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_July" }}
      />,
      <Radio
        checked={selectedValueJuly === "weeks_July"}
        onChange={handleChangeJuly}
        value="weeks_July"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_July" }}
      />,
      <Radio
        checked={selectedValueJuly === "week_July"}
        onChange={handleChangeJuly}
        value="week_July"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_July" }}
      />,
      <Radio
        checked={selectedValueJuly === "Weekends_July"}
        onChange={handleChangeJuly}
        value="Weekends_July"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_July" }}
      />,
      <Radio
        checked={selectedValueJuly === "Not_Occupied_July"}
        onChange={handleChangeJuly}
        value="Not_Occupied_July"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_July" }}
      />
    ),
    createData(
      "Aug",
      <Radio
        checked={selectedValueAug === " All_weeks_Aug"}
        onChange={handleChangeAug}
        value=" All_weeks_Aug"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Aug" }}
      />,
      <Radio
        checked={selectedValueAug === "weeks_Aug"}
        onChange={handleChangeAug}
        value="weeks_Aug"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Aug" }}
      />,
      <Radio
        checked={selectedValueAug === "week_Aug"}
        onChange={handleChangeAug}
        value="week_Aug"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Aug" }}
      />,
      <Radio
        checked={selectedValueAug === "Weekends_Aug"}
        onChange={handleChangeAug}
        value="Weekends_Aug"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Aug" }}
      />,
      <Radio
        checked={selectedValueAug === "Not_Occupied_Aug"}
        onChange={handleChangeAug}
        value="Not_Occupied_Aug"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Aug" }}
      />
    ),
    createData(
      "Sept",
      <Radio
        checked={selectedValueSept === " All_weeks_Sept"}
        onChange={handleChangeSept}
        value=" All_weeks_Sept"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Sept" }}
      />,
      <Radio
        checked={selectedValueSept === "weeks_Sept"}
        onChange={handleChangeSept}
        value="weeks_Sept"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Sept" }}
      />,
      <Radio
        checked={selectedValueSept === "week_Sept"}
        onChange={handleChangeSept}
        value="week_Sept"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Sept" }}
      />,
      <Radio
        checked={selectedValueSept === "Weekends_Sept"}
        onChange={handleChangeSept}
        value="Weekends_Sept"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Sept" }}
      />,
      <Radio
        checked={selectedValueSept === "Not_Occupied_Sept"}
        onChange={handleChangeSept}
        value="Not_Occupied_Sept"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Sept" }}
      />
    ),
    createData(
      "Oct",
      <Radio
        checked={selectedValueOct === " All_weeks_Oct"}
        onChange={handleChangeOct}
        value=" All_weeks_Oct"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Oct" }}
      />,
      <Radio
        checked={selectedValueOct === "weeks_Oct"}
        onChange={handleChangeOct}
        value="weeks_Oct"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Oct" }}
      />,
      <Radio
        checked={selectedValueOct === "week_Oct"}
        onChange={handleChangeOct}
        value="week_Oct"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Oct" }}
      />,
      <Radio
        checked={selectedValueOct === "Weekends_Oct"}
        onChange={handleChangeOct}
        value="Weekends_Oct"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Oct" }}
      />,
      <Radio
        checked={selectedValueOct === "Not_Occupied_Oct"}
        onChange={handleChangeOct}
        value="Not_Occupied_Oct"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Oct" }}
      />
    ),
    createData(
      "Nov",
      <Radio
        checked={selectedValueNov === "All_weeks_Nov"}
        onChange={handleChangeNov}
        value=" All_weeks_Nov"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Nov" }}
      />,
      <Radio
        checked={selectedValueNov === "weeks_Nov"}
        onChange={handleChangeNov}
        value="weeks_Nov"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Nov" }}
      />,
      <Radio
        checked={selectedValueNov === "week_Nov"}
        onChange={handleChangeNov}
        value="week_Nov"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Nov" }}
      />,
      <Radio
        checked={selectedValueNov === "Weekends_Nov"}
        onChange={handleChangeNov}
        value="Weekends_Nov"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Nov" }}
      />,
      <Radio
        checked={selectedValueNov === "Not_Occupied_Nov"}
        onChange={handleChangeNov}
        value="Not_Occupied_Nov"
        name="radio-buttons"
        inputProps={{ "aria-label": "Not_Occupied_Nov" }}
      />
    ),
    createData(
      "Dec",
      <Radio
        checked={selectedValueDec === " All_weeks_Dec"}
        onChange={handleChangeDec}
        value=" All_weeks_Dec"
        name="radio-buttons"
        inputProps={{ "aria-label": " All_weeks_Dec" }}
      />,
      <Radio
        checked={selectedValueDec === "weeks_Dec"}
        onChange={handleChangeDec}
        value="weeks_Dec"
        name="radio-buttons"
        inputProps={{ "aria-label": "weeks_Dec" }}
      />,
      <Radio
        checked={selectedValueDec === "week_Dec"}
        onChange={handleChangeDec}
        value="week_Dec"
        name="radio-buttons"
        inputProps={{ "aria-label": "week_Dec" }}
      />,
      <Radio
        checked={selectedValueDec === "Weekends_Dec"}
        onChange={handleChangeDec}
        value="Weekends_Dec"
        name="radio-buttons"
        inputProps={{ "aria-label": "Weekends_Dec" }}
      />,
      <Radio
        checked={selectedValueDec === "Not_Occupied_Dec"}
        onChange={handleChangeDec}
        value="Not_Occupied_Dec"
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
                align="right"
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
                align="right"
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
                align="right"
              >
                1 week
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
                Weekends
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
