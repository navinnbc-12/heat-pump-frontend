import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StyledTextField from "../../../../common/textfield";
import { Box, MenuItem } from "@mui/material";

const Equipment = () => {
  const [focused, setFocused] = useState(false);
  const [selectedTV, setSelectedTV] = useState(1);
  const [selectedMonitors, setSelectedMonitors] = useState(1);
  const [selectedLaptops, setSelectedLaptops] = useState(1);
  const [selectedITServers, setSelectedITServers] = useState(1);
  const [selectedPhotocopiers, setSelectedPhotocopiers] = useState(1);

  console.log("selectedTV", selectedTV);
  return (
    <>
      <Box sx={{ width: "80%" }}>
        <StyledTextField
          select
          label="TVs"
          variant="outlined"
          sx={{ width: "30%", marginTop: "20px", marginBottom: "20px" }}
          value={selectedTV}
          onChange={(e) => {
            setSelectedTV(e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          IconComponent={() =>
            focused ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="MORE THAN 6">more than 6</MenuItem>
        </StyledTextField>
        <StyledTextField
          select
          label="Laptops"
          variant="outlined"
          sx={{
            width: "30%",
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "20px",
          }}
          value={selectedLaptops}
          onChange={(e) => {
            setSelectedLaptops(e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          IconComponent={() =>
            focused ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="MORE THAN 6">more than 6</MenuItem>
        </StyledTextField>
        <StyledTextField
          select
          label="Monitors"
          variant="outlined"
          sx={{
            width: "30%",
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "20px",
          }}
          value={selectedMonitors}
          onChange={(e) => {
            setSelectedMonitors(e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          IconComponent={() =>
            focused ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="MORE THAN 6">more than 6</MenuItem>
        </StyledTextField>
      </Box>
      <Box sx={{ width: "80%" }}>
        <StyledTextField
          select
          label="IT servers"
          variant="outlined"
          sx={{
            width: "30%",
            marginTop: "20px",
            marginBottom: "30px",
          }}
          value={selectedITServers}
          onChange={(e) => {
            setSelectedITServers(e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          IconComponent={() =>
            focused ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="MORE THAN 6">more than 6</MenuItem>
        </StyledTextField>
        <StyledTextField
          select
          label="Photocopiers"
          variant="outlined"
          sx={{
            width: "30%",
            marginTop: "20px",
            marginBottom: "30px",
            marginLeft: "20px",
          }}
          value={selectedPhotocopiers}
          onChange={(e) => {
            setSelectedPhotocopiers(e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          IconComponent={() =>
            focused ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="MORE THAN 6">more than 6</MenuItem>
        </StyledTextField>
      </Box>
    </>
  );
};

export default Equipment;
