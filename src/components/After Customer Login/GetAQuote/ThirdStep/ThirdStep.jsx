import React, { useState, useEffect, useMemo } from "react";
import "./ThirdStep.css";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import URL from "../../../../GlobalUrl";
import globalAPI from "../../../../GlobalApi";
import { Button, TextField, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";
import Modal from "@mui/material/Modal";
import { Close as CloseIcon } from "@mui/icons-material";
import { fontSize, textAlign } from "@mui/system";
import Table from "../ThirdStep/Components/table";
import Pagination from "../ThirdStep/Components/Pagination";
import IconButton from "@mui/material/IconButton";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import { Card } from "../../../../common";
import { getFabric } from "../../../../services/services";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};
const TableHeading = (
  <Typography sx={{ fontSize: "20px", fontWeight: "bold", padding: "20px" }}>
    Enrolment Details
  </Typography>
);

const data = [
  {
    type: "2",
    description: "Solid brick wall, dense plaster",
    detail: "Brick 102mm, plaster",
    image: "No image found",
  },
  {
    type: "3",
    description: "Solid brick wall, dense plaster",
    detail: "Brick 102mm, plaster",
    image: "No image found",
  },
  {
    type: "4",
    description: "Solid brick wall, dense plaster",
    detail: "Brick 102mm, plaster",
    image: "No image found",
  },
];

const demoData = [
  {
    label: "Main Building",
    "External Walls": {
      type: "",
      description: "",
      detail: "",
    },
    "Internal Walls": {
      type: "",
      description: "",
      detail: "",
    },
    "Roof Type": {
      type: "",
      description: "",
      detail: "",
    },
    Windows: {
      type: "",
      description: "",
      detail: "",
    },
    "Suspended Floors": {
      type: "",
      description: "",
      detail: "",
    },
    "Inner Floors": {
      type: "",
      description: "",
      detail: "",
    },
  },
];

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
});

const ThirdStep = (props) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const token = JSON.parse(localStorage.getItem("user"));
  const [dataArr, setDataArr] = useState(demoData);

  const addNewFabric = () => {
    let temp = [...dataArr];
    temp.push({
      label: `External ${temp.length}`,
      "External Walls": {},
      "Internal Walls": {},
      "Roof Type": {},
      Windows: {},
      "Suspended Floors": {},
      "Inner Floors": {},
    });
    setDataArr(temp);
  };

  const onSelect = (type, description, detail) => {
    let temp = dataArr;
    temp[0]["External Walls"].type = type;
    temp[0]["External Walls"].description = description;
    temp[0]["External Walls"].detail = detail;
    setDataArr(temp);
  };
  console.log(dataArr);
  const onClose = () => {
    setOpenModal(false);
  };

  const pagination = (
    <Pagination
      count={1}
      disabled={false}
      onChange={() => {
        // setOpenModal(false);
      }}
    />
  );
  const tableRows = useMemo(() => {
    return (
      (data &&
        data?.map(({ type, description, detail, image }) => ({
          onClick: () => {
            onSelect(type, description, detail);
            onClose();
          },
          items: [type, description, detail, image],
        }))) ||
      []
    );
  }, [onSelect, onClose]);
  useEffect(() => {
    console.log(getFabric().then((res) => res));
  });
  return (
    <>
      <Card>
        {loader && (
          <div className="customLoader">
            <TailSpin color="#fa5e00" height="100" width="100" />
          </div>
        )}
        <div className="s3text1">
          Step 3 of 9
          <img
            src={require("../../../../Img/step3.png")}
            className="s3baricon"
          />
        </div>

        <Typography
          style={{
            fontSize: "30px",
            fontFamily: "Outfit",
            fontWeight: "600",
            marginTop: "10vh",
          }}
        >
          Fabric details
        </Typography>
        <hr className="quote" />
        {dataArr.map((fabric, index) => (
          <Box sx={{ marginTop: "2%" }} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <h4
                  style={{
                    width: "257px",
                    fontSize: "22px",
                    fontFamily: "Outfit",
                    letterSpacing: "0.03",
                    fontWeight: "300",
                    color: "#fa5e00",
                    // fontWeight: "500",
                    // fontFamily: "Outfit",
                    lineHeight: "normal",
                    textAlign: "right",
                  }}
                >
                  {fabric["label"]}
                  <hr
                    style={{
                      width: "100%",
                      backgroundColor: "#f2f3f2",
                      border: "0.1vw solid #f2f3f2",
                    }}
                  />
                </h4>
              </Box>
              <Box
                sx={{
                  display: "flex !important",
                  flexDirection: "row !important",
                  alignItems: "center",
                  width: "100%",
                  // justifyContent: "center",
                }}
              >
                <Box>
                  <button
                    sx={{
                      fontFamily: "Outfit",
                    }}
                    variant="contained"
                    className="btn-house"
                    onClick={() => setOpenModal(true)}
                  >
                    External Walls
                  </button>
                </Box>
                {fabric["External Walls"]?.type && (
                  <Box
                    sx={{
                      width: "100%",
                      marginLeft: "110px",
                      display: "flex",
                      alignItems: "center",
                      // justifyContent: "space-around",
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: "120px",
                        minWidth: "120px",
                        borderRight: "2px solid #d3d3d3",
                        padding: "2%",
                        margin: "16.5px 0 16.5px 0",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#fa5e00",
                          fontWeight: "bold",
                          fontFamily: "Outfit",
                          lineHeight: "normal",
                        }}
                      >
                        Type {fabric["External Walls"]?.type}
                      </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "5%" }}>
                      {fabric["External Walls"]?.description && (
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontFamily: "Outfit",
                            lineHeight: "normal",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                              fontFamily: "Outfit",
                              lineHeight: "normal",
                            }}
                          >
                            Description:{" "}
                          </span>
                          {fabric["External Walls"]?.description}
                        </Typography>
                      )}

                      {fabric["External Walls"]?.detail && (
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontFamily: "Outfit",
                            lineHeight: "normal",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                              fontFamily: "Outfit",
                              lineHeight: "normal",
                            }}
                          >
                            Details:{" "}
                          </span>{" "}
                          {fabric["External Walls"].detail}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex !important",
                  flexDirection: "row !important",
                  alignItems: "center",
                  width: "100%",
                  // justifyContent: "center",
                }}
              >
                <Box>
                  <button
                    style={{
                      fontFamily: "Outfit",
                    }}
                    variant="contained"
                    className="btn-house"
                    onClick={() => setOpenModal(true)}
                  >
                    Internal Walls
                  </button>
                </Box>
                {fabric["Internal Walls"]?.type && (
                  <Box
                    sx={{
                      width: "100%",
                      marginLeft: "110px",
                      display: "flex",
                      alignItems: "center",
                      // justifyContent: "space-around",
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: "120px",
                        minWidth: "120px",
                        borderRight: "2px solid #d3d3d3",
                        padding: "2%",
                        margin: "16.5px 0 16.5px 0",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#fa5e00",
                          fontWeight: "bold",
                          fontFamily: "Outfit",
                          lineHeight: "normal",
                        }}
                      >
                        Type {fabric["Internal Walls"]?.type}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        marginLeft: "5%",
                        fontWeight: "500",
                        fontFamily: "Outfit",
                        lineHeight: "normal",
                      }}
                    >
                      {fabric["Internal Walls"]?.description && (
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontFamily: "Outfit",
                            lineHeight: "normal",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                              fontFamily: "Outfit",
                              lineHeight: "normal",
                            }}
                          >
                            Description:{" "}
                          </span>
                          {fabric["Internal Walls"].description}
                        </Typography>
                      )}

                      {fabric["Internal Walls"]?.detail && (
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontFamily: "Outfit",
                            lineHeight: "normal",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                              fontFamily: "Outfit",
                              lineHeight: "normal",
                            }}
                          >
                            Details:{" "}
                          </span>{" "}
                          {fabric["Internal Walls"].detail}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex !important",
                  flexDirection: "row !important",
                  alignItems: "center",
                  width: "100%",
                  // justifyContent: "center",
                }}
              >
                <Box>
                  <button
                    style={{
                      fontFamily: "Outfit",
                    }}
                    variant="contained"
                    className="btn-house"
                    onClick={() => setOpenModal(true)}
                  >
                    Roof Type
                  </button>
                </Box>
                {fabric["Roof Type"]?.type && (
                  <Box
                    sx={{
                      width: "100%",
                      marginLeft: "110px",
                      display: "flex",
                      alignItems: "center",
                      // justifyContent: "space-around",
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: "120px",
                        minWidth: "120px",
                        borderRight: "2px solid #d3d3d3",
                        padding: "2%",
                        margin: "16.5px 0 16.5px 0",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#fa5e00",
                          fontWeight: "bold",
                          fontFamily: "Outfit",
                          lineHeight: "normal",
                        }}
                      >
                        Type {fabric["Roof Type"]?.type}
                      </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "5%" }}>
                      {fabric["Roof Type"]?.description && (
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontFamily: "Outfit",
                            lineHeight: "normal",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                              fontFamily: "Outfit",
                              lineHeight: "normal",
                            }}
                          >
                            Description:{" "}
                          </span>
                          {fabric["Roof Type"].description}
                        </Typography>
                      )}

                      {fabric["Roof Type"]?.detail && (
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontFamily: "Outfit",
                            lineHeight: "normal",
                          }}
                        >
                          <span style={{ fontWeight: "bold" }}>Details: </span>{" "}
                          {fabric["Roof Type"].detail}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex !important",
                  flexDirection: "row !important",
                  alignItems: "center",
                  width: "100%",
                  // justifyContent: "center",
                }}
              >
                <Box>
                  <button
                    style={{
                      fontFamily: "Outfit",
                    }}
                    variant="contained"
                    className="btn-house"
                    onClick={() => setOpenModal(true)}
                  >
                    Windows
                  </button>
                </Box>
                {fabric["Windows"]?.type && (
                  <Box
                    sx={{
                      width: "100%",
                      marginLeft: "110px",
                      display: "flex",
                      alignItems: "center",
                      // justifyContent: "space-around",
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: "120px",
                        minWidth: "120px",
                        borderRight: "2px solid #d3d3d3",
                        padding: "2%",
                        margin: "16.5px 0 16.5px 0",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#fa5e00",
                          fontWeight: "bold",
                          fontFamily: "Outfit",
                          lineHeight: "normal",
                        }}
                      >
                        Type {fabric["Windows"]?.type}
                      </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "5%" }}>
                      {fabric["Windows"]?.description && (
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontFamily: "Outfit",
                            lineHeight: "normal",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                              fontFamily: "Outfit",
                              lineHeight: "normal",
                            }}
                          >
                            Description:{" "}
                          </span>
                          {fabric["Windows"].description}
                        </Typography>
                      )}

                      {fabric["Windows"]?.detail && (
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontFamily: "Outfit",
                            lineHeight: "normal",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                              fontFamily: "Outfit",
                              lineHeight: "normal",
                            }}
                          >
                            Details:{" "}
                          </span>{" "}
                          {fabric["Windows"].detail}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex !important",
                  flexDirection: "row !important",
                  alignItems: "center",
                  width: "100%",
                  // justifyContent: "center",
                }}
              >
                <Box>
                  <button
                    style={{
                      fontFamily: "Outfit",
                      lineHeight: "normal",
                      padding: "0px",
                    }}
                    variant="contained"
                    className="btn-house"
                    onClick={() => setOpenModal(true)}
                  >
                    Suspended Floors
                  </button>
                </Box>
                {fabric["Suspended Floors"]?.type && (
                  <Box
                    sx={{
                      width: "100%",
                      marginLeft: "110px",
                      display: "flex",
                      alignItems: "center",
                      // justifyContent: "space-around",
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: "120px",
                        minWidth: "120px",
                        borderRight: "2px solid #d3d3d3",
                        padding: "2%",
                        margin: "16.5px 0 16.5px 0",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#fa5e00",
                          fontWeight: "bold",
                          fontFamily: "Outfit",
                          lineHeight: "normal",
                        }}
                      >
                        Type {fabric["Suspended Floors"]?.type}
                      </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "5%" }}>
                      {fabric["Suspended Floors"]?.description && (
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontFamily: "Outfit",
                            lineHeight: "normal",
                          }}
                        >
                          <span
                            style={{ fontWeight: "bold", lineHeight: "normal" }}
                          >
                            Description:{" "}
                          </span>
                          {fabric["Suspended Floors"].description}
                        </Typography>
                      )}

                      {fabric["Suspended Floors"]?.detail && (
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontFamily: "Outfit",
                            lineHeight: "normal",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                              fontFamily: "Outfit",
                              lineHeight: "normal",
                            }}
                          >
                            Details:{" "}
                          </span>{" "}
                          {fabric["Suspended Floors"].detail}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex !important",
                  flexDirection: "row !important",
                  alignItems: "center",
                  width: "100%",
                  // justifyContent: "center",
                }}
              >
                <Box>
                  <button
                    variant="contained"
                    className="btn-house"
                    onClick={() => setOpenModal(true)}
                  >
                    Internal Floors
                  </button>
                </Box>
                {fabric["Inner Floors"]?.type && (
                  <Box
                    sx={{
                      width: "100%",
                      marginLeft: "110px",
                      display: "flex",
                      alignItems: "center",
                      // justifyContent: "space-around",
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: "120px",
                        minWidth: "120px",
                        borderRight: "2px solid #d3d3d3",
                        padding: "2%",
                        margin: "16.5px 0 16.5px 0",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#fa5e00",
                          fontWeight: "bold",
                          fontFamily: "Outfit",
                          lineHeight: "normal",
                        }}
                      >
                        Type {fabric["Inner Floors"]?.type}
                      </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "5%" }}>
                      {fabric["Inner Floors"]?.description && (
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontFamily: "Outfit",
                            lineHeight: "normal",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                              fontFamily: "Outfit",
                              lineHeight: "normal",
                            }}
                          >
                            Description:{" "}
                          </span>
                          {fabric["Inner Floors"].description}
                        </Typography>
                      )}

                      {fabric["Inner Floors"]?.detail && (
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontFamily: "Outfit",
                            lineHeight: "normal",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                              fontFamily: "Outfit",
                              lineHeight: "normal",
                            }}
                          >
                            Details:{" "}
                          </span>{" "}
                          {fabric["Inner Floors"].detail}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        ))}
        {/* <Box sx={{ marginTop: "2%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "257px",
                  fontSize: "22px",
                  fontFamily:"Outfit",
                  letterSpacing: "0.03",
                  color: "#fa5e00",
                  textAlign: "right",
                }}
              >
                External 1
                <hr
                  style={{
                    width: "100%",
                    backgroundColor: " #f2f3f2",
                    border: "0.1vw solid #f2f3f2",
                  }}
                />
              </div>
            </Box>
            <Box
              sx={{
                display: "flex !important",
                flexDirection: "row !important",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <Box>
                <button
                  variant="contained"
                  className="btn-house"
                  onClick={() => setOpenModal(true)}
                >
                  External Walls
                </button>
              </Box>
              <Box
                sx={{
                  width: "50%",
                  marginLeft: "3%",
                  display: "flex",

                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Box
                  sx={{ borderRight: "5px solid #d3d3d3", paddingRight: "5%" }}
                >
                  <Typography variant="h5">
                    {dataArr[0]["External Walls"].type}
                  </Typography>
                </Box>
                <Box>
                  <Typography>
                    <span style={{ fontWeight: "bold",fontFamily:"Outfit" }}>Description: </span>
                    {dataArr[0]["External Walls"].description}
                  </Typography>

                  <Typography>
                    <span style={{ fontWeight: "bold" ,fontFamily:"Outfit"}}>Details: </span>{" "}
                    {dataArr[0]["External Walls"].detail}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <button
                variant="contained"
                className="btn-house"
                onClick={() => setOpenModal(true)}
              >
                Internal Walls
              </button>
            </Box>
            <Box>
              <button
                variant="contained"
                className="btn-house"
                onClick={() => setOpenModal(true)}
              >
                Roof Type
              </button>
            </Box>
            <Box>
              <button
                variant="contained"
                className="btn-house"
                onClick={() => setOpenModal(true)}
              >
                Windows
              </button>
            </Box>
            <Box>
              <button
                variant="contained"
                className="btn-house"
                onClick={() => setOpenModal(true)}
              >
                Suspended Floors
              </button>
            </Box>
            <Box>
              <button
                variant="contained"
                className="btn-house"
                onClick={() => setOpenModal(true)}
              >
                Internal Floors
              </button>
            </Box>
          </Box>
        </Box> */}
        <Box>
          <button
            variant="contained"
            className="btn-house Add btn-icon"
            onClick={addNewFabric}
          >
            <span style={{ height: "27px", width: "27px" }}>
              <AddIcon sx={{ height: "27px", width: "27px" }} />
            </span>
            <span style={{ marginLeft: "20px" }}>Add Building</span>
          </button>
        </Box>
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
            onClick={props.next}
          >
            <span style={{ marginRight: "100px" }}>Continue</span>
            <span style={{ height: "27px", width: "27px" }}>
              <ChevronRightSharpIcon sx={{ height: "27px", width: "27px" }} />
            </span>
          </button>
        </Box>
      </Card>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <Box sx={style}>
          <IconButton
            onClick={() => setOpenModal(false)}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              bgcolor: "ternary.main",
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box component="span">
            <Typography
              variant="h5"
              component="h2"
              sx={{ color: "#fa5e00", fontWeight: "Bold", mb: 1.5 }}
            >
              External Walls
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: "Bold", mb: 0.7 }}
            >
              Fabric Details
            </Typography>
            <hr className="quote" style={{ width: "16%" }} />
          </Box>
          {/* Table List */}
          <Box sx={{ marginTop: "5%" }}>
            <Table
              headers={["Type", "Wall Construction", "Details", "Image"]}
              rows={tableRows}
              pagination={pagination}
              isLoading={false}
              isFetching={false}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ThirdStep;
