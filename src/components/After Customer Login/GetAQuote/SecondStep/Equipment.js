import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StyledTextField from "../../../../common/textfield";
import { Box, MenuItem } from "@mui/material";

const Equipment = (props) => {
  const [focused, setFocused] = useState(false);
  const [selectedTV, setSelectedTV] = useState(props?.equipments?.tvs);
  const [selectedMonitors, setSelectedMonitors] = useState(
    props?.equipments?.monitors
  );
  const [selectedLaptops, setSelectedLaptops] = useState(
    props?.equipments?.laptops
  );
  const [selectedITServers, setSelectedITServers] = useState(
    props?.equipments?.itServers
  );
  const [selectedPhotocopiers, setSelectedPhotocopiers] = useState(
    props?.equipments?.PhotoCopiers
  );

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
            props.getEquipments("tvs", e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          IconComponent={() =>
            focused ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
        >
          <MenuItem value="0">0</MenuItem>
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
            props.getEquipments("laptops", e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          IconComponent={() =>
            focused ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
        >
          <MenuItem value="0">0</MenuItem>
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
            props.getEquipments("monitors", e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          IconComponent={() =>
            focused ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
        >
          <MenuItem value="0">0</MenuItem>
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
            props.getEquipments("itServers", e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          IconComponent={() =>
            focused ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
        >
          <MenuItem value="0">0</MenuItem>
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
            props.getEquipments("PhotoCopiers", e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          IconComponent={() =>
            focused ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
        >
          <MenuItem value="0">0</MenuItem>
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
