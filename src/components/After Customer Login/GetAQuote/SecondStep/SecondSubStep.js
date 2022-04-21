import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";

import step2ProgressBar from "../../../../Img/step2.png";
import { Card, Radio } from "../../../../common";
import {
  Box,
  FormControl,
  FormControlLabel,
  MenuItem,
  RadioGroup,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import StyledTextField from "../../../../common/textfield";
import Equipment from "./Equipment";
import HighEquipment from "./HighEquipment";

const SecondSubStep = () => {
  const [loader, setLoader] = useState(false);
  const [focused, setFocused] = useState(false);
  const [selectedGuestInWinter, setSelectedGuestInWinter] = useState("Select");

  return (
    <>
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

        <h4 style={{ fontSize: "1.4vw", marginTop: "10vh" }}>
          Guest/Additional People
        </h4>
        <hr className="s2hr2" />
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
            lineHeight: "normal",
            fontFamily: "Outfit",
            letterSpacing: "0.03px",
          }}
        >
          When designing the heating & hot water loads we look at the worst
          scenario. Imagine its chritsmas day & very cold outside-you may have
          guests in the house. There is likely to be peak demand for heating &
          hot water, and coincides with a time of year with very little solar
          for gain and/or to let any solar thermal or PV systems help.{" "}
        </Typography>
        <Typography
          sx={{
            marginTop: "53px",
            marginBottom: "20px",
            fontSize: "22px",
            fontWeight: "bold",
            lineHeight: "normal",
            fontFamily: "Outfit",
            letterSpacing: "0.03px",
          }}
        >
          Number of Guests in winter
        </Typography>
        <StyledTextField
          select
          sx={{ width: "30%", marginTop: "20px", marginBottom: "30px" }}
          value={selectedGuestInWinter}
          onChange={(e) => {
            setSelectedGuestInWinter(e.target.value);
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
          <MenuItem value="MORE THAN 3">more than 3</MenuItem>
          <MenuItem value="OTHER">Other</MenuItem>
        </StyledTextField>
        <Typography
          sx={{
            fontSize: "22px",
            marginBottom: "20px",
            fontWeight: "bold",
            lineHeight: "normal",
            fontFamily: "Outfit",
            letterSpacing: "0.03px",
          }}
        >
          How important is Hot Water for you?
        </Typography>
        <Box
          sx={{
            width: "100%",
            background: "#fafafa",
            borderRadius: "20px",
            paddingBottom: "30px",
            paddingTop: "15px",
            marginBottom: "30px",
          }}
        >
          <FormControl
            sx={{
              width: "100%",
              padding: "12px 100px 10px 100px",
            }}
          >
            <RadioGroup
              sx={{ justifyContent: "space-evenly" }}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="1"
            >
              <FormControlLabel
                sx={{}}
                value="1"
                control={<Radio />}
                label="1"
                FormControlLabelProps={{
                  style: { fontSize: "22px", fontWeight: "bold" },
                }}
                labelPlacement="top"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="2"
                labelPlacement="top"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="3"
                labelPlacement="top"
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="4"
                labelPlacement="top"
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="5"
                labelPlacement="top"
              />
              <FormControlLabel
                value="6"
                control={<Radio />}
                label="6"
                labelPlacement="top"
              />
              <FormControlLabel
                value="7"
                control={<Radio />}
                label="7"
                labelPlacement="top"
              />
              <FormControlLabel
                value="8"
                control={<Radio />}
                label="8"
                labelPlacement="top"
              />
              <FormControlLabel
                value="9"
                control={<Radio />}
                label="9"
                labelPlacement="top"
              />
              <FormControlLabel
                value="10"
                control={<Radio />}
                label="10"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              marginTop: "10px",
              justifyContent: "space-between",
              paddingLeft: "23px",
              paddingRight: "15px",
            }}
          >
            <Box sx={{ width: "33%", textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "500",
                  fontFamily: "Outfit",
                  lineHeight: "normal",
                  letterSpacing: "0.03px",
                  color: "#767676",
                }}
              >
                Low Priority/Can wait for hot water to recharge between use/Few
                guests
              </Typography>
            </Box>
            <Box sx={{ width: "32%", textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "500",
                  fontFamily: "Outfit",
                  lineHeight: "normal",
                  letterSpacing: "0.03px",
                  color: "#767676",
                }}
              >
                High Priority/Must have hot water quickly/Lots of guests
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Outfit",
          }}
        >
          Equipment
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "300",
            lineHeight: "1.2",
            fontFamily: "Outfit",
            color: "#767676",
            letterSpacing: "0.03px",
          }}
        >
          The internal heat gains can have some effect from equipment likely to
          be found in the property. Please try & estimate of items if any of
          these below
        </Typography>
        <Equipment />
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Outfit",
          }}
        >
          High Energy Equipment
        </Typography>
        <HighEquipment />
        <Typography
          sx={{
            fontSize: "22px",
            marginBottom: "20px",
            fontWeight: "bold",
            lineHeight: "normal",
            fontFamily: "Outfit",
            letterSpacing: "0.03px",
          }}
        >
          Will you be ok with say a wood stove helping on the very coldest days?
        </Typography>
        <Box
          sx={{
            width: "100%",
            background: "#fafafa",
            borderRadius: "20px",
            paddingBottom: "30px",
            paddingTop: "15px",
            marginBottom: "30px",
          }}
        >
          <FormControl
            sx={{
              width: "100%",
              padding: "12px 100px 10px 100px",
            }}
          >
            <RadioGroup
              sx={{ justifyContent: "space-evenly" }}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="1"
            >
              <FormControlLabel
                sx={{}}
                value="1"
                control={<Radio />}
                label="1"
                FormControlLabelProps={{
                  style: { fontSize: "22px", fontWeight: "bold" },
                }}
                labelPlacement="top"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="2"
                labelPlacement="top"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="3"
                labelPlacement="top"
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="4"
                labelPlacement="top"
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="5"
                labelPlacement="top"
              />
              <FormControlLabel
                value="6"
                control={<Radio />}
                label="6"
                labelPlacement="top"
              />
              <FormControlLabel
                value="7"
                control={<Radio />}
                label="7"
                labelPlacement="top"
              />
              <FormControlLabel
                value="8"
                control={<Radio />}
                label="8"
                labelPlacement="top"
              />
              <FormControlLabel
                value="9"
                control={<Radio />}
                label="9"
                labelPlacement="top"
              />
              <FormControlLabel
                value="10"
                control={<Radio />}
                label="10"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              marginTop: "10px",
              justifyContent: "space-between",
              paddingLeft: "23px",
              paddingRight: "15px",
            }}
          >
            <Box sx={{ width: "33%", textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "500",
                  fontFamily: "Outfit",
                  lineHeight: "normal",
                  letterSpacing: "0.03px",
                  color: "#767676",
                }}
              >
                No/Can’t wait or be bothered lighting and feeding a stove all
                day
              </Typography>
            </Box>
            <Box sx={{ width: "32%", textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "500",
                  fontFamily: "Outfit",
                  lineHeight: "normal",
                  letterSpacing: "0.03px",
                  color: "#767676",
                }}
              >
                No/Can’t wait or be bothered lighting and feeding a stove all
                day
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: "22px",
            marginBottom: "20px",
            fontWeight: "bold",
            lineHeight: "normal",
            fontFamily: "Outfit",
            letterSpacing: "0.03px",
          }}
        >
          Would you say you have a lower or higher use for electricity than the
          UK average?
        </Typography>
        <Box
          sx={{
            width: "100%",
            background: "#fafafa",
            borderRadius: "20px",
            paddingBottom: "30px",
            paddingTop: "15px",
            marginBottom: "30px",
          }}
        >
          <FormControl
            sx={{
              width: "100%",
              padding: "12px 100px 10px 100px",
            }}
          >
            <RadioGroup
              sx={{ justifyContent: "space-evenly" }}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="1"
            >
              <FormControlLabel
                sx={{}}
                value="1"
                control={<Radio />}
                label="1"
                FormControlLabelProps={{
                  style: { fontSize: "22px", fontWeight: "bold" },
                }}
                labelPlacement="top"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="2"
                labelPlacement="top"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="3"
                labelPlacement="top"
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="4"
                labelPlacement="top"
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="5"
                labelPlacement="top"
              />
              <FormControlLabel
                value="6"
                control={<Radio />}
                label="6"
                labelPlacement="top"
              />
              <FormControlLabel
                value="7"
                control={<Radio />}
                label="7"
                labelPlacement="top"
              />
              <FormControlLabel
                value="8"
                control={<Radio />}
                label="8"
                labelPlacement="top"
              />
              <FormControlLabel
                value="9"
                control={<Radio />}
                label="9"
                labelPlacement="top"
              />
              <FormControlLabel
                value="10"
                control={<Radio />}
                label="10"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              marginTop: "10px",
              justifyContent: "space-between",
              paddingLeft: "23px",
              paddingRight: "15px",
            }}
          >
            <Box sx={{ width: "33%", textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "500",
                  fontFamily: "Outfit",
                  lineHeight: "normal",
                  letterSpacing: "0.03px",
                  color: "#767676",
                }}
              >
                Vey low/totally offgrid-no appliances
              </Typography>
            </Box>
            <Box sx={{ width: "32%", textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "500",
                  fontFamily: "Outfit",
                  lineHeight: "normal",
                  letterSpacing: "0.03px",
                  color: "#767676",
                }}
              >
                Very high/Lots of gadgets and equipment
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
            lineHeight: "normal",
            fontFamily: "Outfit",
            letterSpacing: "0.03px",
          }}
        >
          Would you say you have a lower or higher use for heating than the UK
          average?
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "300",
            lineHeight: "normal",
            fontFamily: "Outfit",
            letterSpacing: "0.03px",
            color: "#767676",
            marginBottom: "20px",
          }}
        >
          You may consider elderly people etc may need the heating on more and
          at higher temperatures
        </Typography>
        <Box
          sx={{
            width: "100%",
            background: "#fafafa",
            borderRadius: "20px",
            paddingBottom: "30px",
            paddingTop: "15px",
            marginBottom: "30px",
          }}
        >
          <FormControl
            sx={{
              width: "100%",
              padding: "12px 100px 10px 100px",
            }}
          >
            <RadioGroup
              sx={{ justifyContent: "space-evenly" }}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="1"
            >
              <FormControlLabel
                sx={{}}
                value="1"
                control={<Radio />}
                label="1"
                FormControlLabelProps={{
                  style: { fontSize: "22px", fontWeight: "bold" },
                }}
                labelPlacement="top"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="2"
                labelPlacement="top"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="3"
                labelPlacement="top"
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="4"
                labelPlacement="top"
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="5"
                labelPlacement="top"
              />
              <FormControlLabel
                value="6"
                control={<Radio />}
                label="6"
                labelPlacement="top"
              />
              <FormControlLabel
                value="7"
                control={<Radio />}
                label="7"
                labelPlacement="top"
              />
              <FormControlLabel
                value="8"
                control={<Radio />}
                label="8"
                labelPlacement="top"
              />
              <FormControlLabel
                value="9"
                control={<Radio />}
                label="9"
                labelPlacement="top"
              />
              <FormControlLabel
                value="10"
                control={<Radio />}
                label="10"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              marginTop: "10px",
              justifyContent: "space-between",
              paddingLeft: "23px",
              paddingRight: "15px",
            }}
          >
            <Box sx={{ width: "33%", textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "500",
                  fontFamily: "Outfit",
                  lineHeight: "normal",
                  letterSpacing: "0.03px",
                  color: "#767676",
                }}
              >
                Lowest/never put the heating on, just use a jumper!
              </Typography>
            </Box>
            <Box sx={{ width: "32%", textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "500",
                  fontFamily: "Outfit",
                  lineHeight: "normal",
                  letterSpacing: "0.03px",
                  color: "#767676",
                }}
              >
                Yes/must have house warm at all times
              </Typography>
            </Box>
          </Box>
        </Box>
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
    </>
  );
};

export default SecondSubStep;
