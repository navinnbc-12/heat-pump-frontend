import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StyledTextField from "../../../../common/textfield";
import { Box, MenuItem } from "@mui/material";

const HighEquipment = (props) => {
  const [focused, setFocused] = useState(false);
  const [selectedSauna, setSelectedSauna] = useState(
    props?.highEnergyEquipments.sauna
  );
  const [selectedHotTub, setSelectedHotTub] = useState(
    props?.highEnergyEquipments.hotTub
  );
  const [selectedSwimmingPool, setSelectedSwimmingPool] = useState(
    props?.highEnergyEquipments.swimmingPool
  );
  const [selectedKilns, setSelectedKilns] = useState(
    props?.highEnergyEquipments.kilns
  );
  const [selectedOther, setSelectedOther] = useState(
    props?.highEnergyEquipments.other
  );
  return (
    <>
      <Box sx={{ width: "80%" }}>
        <StyledTextField
          select
          label="Sauna"
          variant="outlined"
          sx={{ width: "30%", marginTop: "20px", marginBottom: "20px" }}
          value={selectedSauna}
          onChange={(e) => {
            setSelectedSauna(e.target.value);
            props?.getHighEnergyEquipments("sauna", e.target.value);
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
          label="Swimming Pool"
          variant="outlined"
          sx={{
            width: "30%",
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "20px",
          }}
          value={selectedSwimmingPool}
          onChange={(e) => {
            setSelectedSwimmingPool(e.target.value);
            props?.getHighEnergyEquipments("swimmingPool", e.target.value);
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
          label="Hot Tub"
          variant="outlined"
          sx={{
            width: "30%",
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "20px",
          }}
          value={selectedHotTub}
          onChange={(e) => {
            setSelectedHotTub(e.target.value);
            props?.getHighEnergyEquipments("hotTub", e.target.value);
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
          label="Kilns"
          variant="outlined"
          sx={{
            width: "30%",
            marginTop: "20px",
            marginBottom: "30px",
          }}
          value={selectedKilns}
          onChange={(e) => {
            setSelectedKilns(e.target.value);
            props?.getHighEnergyEquipments("kilns", e.target.value);
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
          label="Other"
          variant="outlined"
          sx={{
            width: "30%",
            marginTop: "20px",
            marginBottom: "30px",
            marginLeft: "20px",
          }}
          value={selectedOther}
          onChange={(e) => {
            setSelectedOther(e.target.value);
            props?.getHighEnergyEquipments("other", e.target.value);
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

export default HighEquipment;
