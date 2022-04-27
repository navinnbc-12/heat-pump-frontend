import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  IconButton,
  Pagination,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import Modal from "react-modal";
import "./CreateList.css";
import { toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";
import { FileUploader } from "react-drag-drop-files";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import URL from "../../../GlobalUrl";
import globalAPI from "../../../GlobalApi";
import usePagination from "../../Pagination/Pagination";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Stack, Grid } from "@mui/material/";
import { Card } from "../../../common";
import { connect } from "react-redux";
import { FirstPageAction } from "../../../Redux/FirstPage/FirstPage.action";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { makeStyles } from "@mui/styles";

Modal.setAppElement("#root");

const fileTypes = ["PDF", "PNG", "JPEG"];

const theme = createTheme({
  palette: {
    primary: { main: "#000000	" },
  },
});
const useStyles = makeStyles({
  selectfield: {
    marginTop: "20px",
    "& label.Mui-focused": {
      color: "black",
      fontFamily: "outfit",
      fontWeight: "bold",
      fontSize: "16px",
    },
    "& .MuiFormLabel-root": {
      fontWeight: "bold",
      fontSize: "16px",
      fontFamily: "outfit",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "9px",
      marginRight: "17px",
      width: "400px",
      height: "50px",
      fontWeight: "bolder",
      fontFamily: "outfit",
      backgroundColor: "white",

      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    icons: {
      fontSize: "8px",
    },
  },
  selectinput: {
    marginBottom: "4.5px",
    fontFamily: "outfit",
    fontWeight: "bold",
    fontSize: "16px",
  },
  rowfield: {
    "& label.Mui-focused": {
      color: "black",
      fontFamily: "outfit",
      fontWeight: "bold",
      fontSize: "16px",
    },
    "& .MuiFormLabel-root": {
      fontWeight: "bold",
      fontSize: "16px",
      fontFamily: "outfit",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "9px",
      marginRight: "17px",
      width: "400px",
      fontWeight: "bolder",
      fontFamily: "outfit",
      backgroundColor: "white",

      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    icons: {
      fontSize: "8px",
    },
  },
});
const CreateList = ({ FirstPageAction }) => {
  const classes = useStyles();
  const [high, setHigh] = useState(false);
  const [medium, setMedium] = useState(false);
  const [low, setLow] = useState(false);
  const [files, setFiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [servicetype, setServicetype] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [priority, setPriority] = useState("");
  const [attachments, setattachments] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [srno, setSrno] = useState("");
  const [data, setData] = useState([]);
  const [focused, setFocused] = React.useState("");
  const [site, setSite] = useState("");
  const [jobid, setJobid] = useState("");
  let [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const [count, setCount] = useState(1);
  const _DATA = usePagination(data, PER_PAGE);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userName = userData.name;
  const [fname, SetFname] = useState([]);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");

  useEffect(() => {
    FirstPageAction(false);
  }, []);

  useEffect(() => {
    jbModal();
  }, [page]);

  const handleClick = (name) => {
    if (name === "high") {
      setHigh(true);
      setPriority(1);
      setMedium(false);
      setLow(false);
      setError4("");
    } else if (name === "medium") {
      setPriority(2);
      setHigh(false);
      setMedium(true);
      setLow(false);
      setError4("");
    } else {
      setHigh(false);
      setPriority(3);
      setMedium(false);
      setLow(true);
      setError4("");
    }
  };

  const removeFile = (index) => {
    const newValue = [...files];
    newValue.splice(index, 1);
    setFiles(newValue);

    const newAttachments = [...attachments];
    newAttachments.splice(index, 1);
    setattachments(newAttachments);

    const newName = [...fname];
    newName.splice(index, 1);
    SetFname(newName);
  };

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const jbModal = () => {
    const token = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    setLoader(true);
    axios
      .get(URL + globalAPI.myjobs + `?page=${page}&perPage=${PER_PAGE}`, config)
      .then((response) => {
        setLoader(false);
        const res = response.data;
        if (res.success) {
          setCount(res.data.total_pages);
          setData(res.data.data);
        } else {
          toast.error("Something went wrong");
          setOpen(!open);
        }
      })
      .catch((e) => {
        setLoader(false);
        toast.error("Something went wrong");
        setOpen(!open);
      });
  };

  const onFileUpload = (e) => {
    if (e) {
      let formData = new FormData();
      formData.append("attachments", e);
      setLoader(true);
      const token = JSON.parse(localStorage.getItem("user"));
      axios({
        method: "post",
        url: URL + globalAPI.fileupload,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const res = response.data;
          setLoader(false);
          if (res.success) {
            // toast.success("File Added");
            debugger;
            attachments.push(res.data.message[0]);
            const newUpload = [];
            let a = res.data.message[0].slice(25);
            if (a.length > 20) {
              let b = a.slice(0, 27);
              let c = b + "...";
              newUpload.push(c);
            } else {
              newUpload.push(a);
            }
            fname.push(newUpload);
            setFiles([...files, e]);
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          setLoader(false);
          toast.error("Something Went Wrong");
        });
    } else {
      setLoader(false);
      toast.error("Please add Attachments");
    }
  };

  const uploadMapping = (e) => {
    e.preventDefault();
    if (servicetype == "") {
      setError1("Service Type cannot be Empty");
    }
    if (title == "") {
      setError2("Title cannot be Empty");
    }
    if (details == "") {
      setError3("Details cannot be Empty");
    }
    if (priority == "") {
      setError4("Please choose priority");
      return false;
    }

    if (
      servicetype !== "" &&
      title !== "" &&
      (details !== "") & (priority !== "")
    ) {
      setLoader(true);
      const token = JSON.parse(localStorage.getItem("user"));
      const data = {
        title: title,
        description: details,
        attachments: attachments,
        priority: priority,
        job_ref_number: jobid,
        site_details: site,
        type: servicetype,
        status: 1,
      };
      axios({
        method: "post",
        url: URL + globalAPI.myreq,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setLoader(false);
          const res = response.data;
          debugger;
          if (res.success) {
            setSubmitted(true);
            setSrno(res.data.service_ref_number);
          } else {
            toast.error(res.data.message);
          }
        })
        .catch(() => {
          setLoader(false);
          toast.error("Something went wrong");
        });
    } else {
      return false;
    }
  };

  const closeSubmitted = (e) => {
    setSubmitted(false);
    window.location.reload(false);
  };
  const settingJobref = (item) => {
    setJobid(item.job_ref_number);
    setSite(item.site_details);
    setOpen(!open);
  };
  const toggleModal = () => {
    setOpen(!open);
    jbModal();
  };
  return (
    <>
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="clcontainer">
        <Typography
          variant="h6"
          style={{ fontWeight: 300, fontSize: "55px", fontFamily: "outfit" }}
        >
          Create a Service Request
        </Typography>
        <hr className="clcontainerhr" />
        {!submitted && (
          <Card>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Stack>
                  <Typography>
                    <div className="clnames">{userName}</div>
                  </Typography>
                  <Typography>
                    <div style={{ fontSize: "18px", fontWeight: 700 }}>
                      {userData.business_trade_name} , {userData.city}
                    </div>
                    <hr className="clhrFirst" />
                  </Typography>

                  <Typography>
                    <button
                      className="btnjob"
                      style={{ fontSize: "13px" }}
                      onClick={toggleModal}
                    >
                      Job Reference
                    </button>
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack>
                  <Typography>
                    <div className="gridbox1">
                      <div style={{ fontSize: "18px", fontWeight: 600 }}>
                        Site
                      </div>
                      <div style={{ fontSize: "18px" }}>
                        {site ? site : "-"}
                      </div>
                      <div style={{ fontSize: "18px", fontWeight: 600 }}>
                        Job ID
                      </div>
                      <div style={{ fontSize: "18px" }}>
                        {jobid ? jobid : "-"}
                      </div>
                    </div>
                  </Typography>
                </Stack>
              </Grid>
            </Grid>{" "}
            <br />
            <hr className="clhr1" />
            <Grid>
              <Typography style={{ marginTop: "10px" }}>
                <FormControl className={classes.selectfield}>
                  <InputLabel
                    id="demo-simple-select-label"
                    className={classes.selectinput}
                  >
                    Service Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={servicetype}
                    onChange={(e) => {
                      setServicetype(e.target.value);
                      setError1("");
                    }}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    label="Service Type"
                  >
                    <MenuItem style={{ fontWeight: 600 }} value="Enquiry">
                      {" "}
                      Enquiry{" "}
                    </MenuItem>
                    <MenuItem
                      style={{ fontWeight: 600 }}
                      value="Design Clarifications"
                    >
                      {" "}
                      Design Clarifications{" "}
                    </MenuItem>
                  </Select>
                </FormControl>
                <span className="error1">{error1}</span>
              </Typography>

              <Typography>
                <TextField
                  label="Title"
                  variant="outlined"
                  value={title}
                  className={classes.selectfield}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setError2("");
                  }}
                  sx={{ marginTop: "20px" }}
                />
                <span className="error2">{error2}</span>
              </Typography>

              <br />
              <Typography>
                <TextField
                  label="Details"
                  variant="outlined"
                  multiline
                  rows={8}
                  className={classes.rowfield}
                  value={details}
                  onChange={(e) => {
                    setDetails(e.target.value);
                    setError3("");
                  }}
                />
                <span className="error3">{error3}</span>
              </Typography>

              <Typography>
                <h4 className="name1" style={{ fontSize: "18px" }}>
                  Attachments
                </h4>
                <hr className="clhr2" />

                <Typography>
                  <FileUploader
                    handleChange={(e) => onFileUpload(e)}
                    name="file"
                    types={fileTypes}
                    onTypeError={(err) =>
                      toast.error("Only pdf, png, jpeg files are allowed")
                    }
                    children={
                      <span className="cldragndrop">
                        Drag and Drop Here
                        <img
                          src={require("../../../Img/iconcloud.png")}
                          /*  height="25px"
                        width={"25px"} */
                          style={{
                            marginLeft: "20px",
                            height: "25px",
                            width: "20px",
                          }}
                        />
                      </span>
                    }
                  />

                  <span className="clor">OR</span>

                  <FileUploader
                    handleChange={(e) => onFileUpload(e)}
                    name="file"
                    types={fileTypes}
                    onTypeError={(err) =>
                      toast.error("Only pdf, png, jpeg files are allowed")
                    }
                    children={
                      <span className="clbrowse">
                        <button className="clbrowsebtn">Browse</button>
                      </span>
                    }
                  />
                </Typography>

                {files &&
                  files.map((item, index) => {
                    return (
                      <div
                        className="filemap filemapblock"
                        style={{ borderRadius: "22px" }}
                        key={index}
                      >
                        <span style={{ float: "left", marginLeft: "16px" }}>
                          <img
                            src={require("../../../Img/attachIcon.png")}
                            style={{
                              height: "21px",
                              width: "16px",
                            }}
                          />

                          <span className="fileName">{fname[index]}</span>
                        </span>

                        <img
                          src={require("../../../Img/iconDelete.png")}
                          onClick={() => removeFile(index)}
                          style={{
                            marginRight: "20px",
                            width: "20px",
                            height: "2.9vh",
                          }}
                        />
                      </div>
                    );
                  })}

                <h4 className="name2" style={{ fontSize: "20px" }}>
                  Priority
                </h4>

                <hr className="clhr2" />

                <div style={{ display: "inline-block", marginRight: "17px" }}>
                  <button
                    className={high ? "highBtnActive highBtn " : " highBtn"}
                    value="high"
                    onClick={(e) => handleClick(e.target.value)}
                  >
                    High
                  </button>

                  <button
                    className={
                      medium ? "mediumBtnActive  mediumBtn " : " mediumBtn"
                    }
                    value="medium"
                    onClick={(e) => handleClick(e.target.value)}
                  >
                    Medium
                  </button>

                  <button
                    className={low ? "lowBtnActive lowBtn " : " lowBtn"}
                    value="low"
                    onClick={(e) => handleClick(e.target.value)}
                  >
                    Low
                  </button>
                </div>
                <span className="error4">{error4}</span>

                <div>
                  <button
                    className="submitBtn"
                    onClick={(e) => uploadMapping(e)}
                  >
                    Submit
                  </button>
                </div>
              </Typography>
            </Grid>
          </Card>
        )}

        {submitted && (
          <>
            <div className="subpaper">
                <div className="subfirstrow">
                <Typography>
                    <div className="clnames">{userName}</div>
                  </Typography>
                  <Typography>
                    <div style={{ fontSize: "18px", fontWeight: 700 }}>
                      {userData.business_trade_name} , {userData.city}
                    </div>
                    <hr className="clhrFirst" />
                  </Typography>
                  {/* <hr className="subhrFirst" /> */}

                  <div className="subtext">
                    Your enquiry submission is successful. Ref:{srno}. You can
                    track the status of your service request using{" "}
                    <Link to="/common/servicerequest" className="subspan">
                      {" "}
                      <span>My Service Requests</span>
                    </Link>
                  </div>
                </div>
                <button className="submitBtn" onClick={() => closeSubmitted()}>
                  Close
                </button>
            </div>
            <div style={{ height: "160px" }}></div>
          </>
        )}

        <Modal
          isOpen={open}
          className="createmodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <div>
            <div className="dialogclose">
              <IconButton onClick={() => setOpen(!open)}>
                <CloseIcon sx={{ color: "black" }}></CloseIcon>
              </IconButton>
            </div>
            <div className="dialog-row1">
              <h5 className="dialogname">{userName}</h5>
              <h6 style={{ fontSize: "22px", margin: "5px 0 5px 0" }}>
                My Jobs
              </h6>
              <hr className="clhrFirst" />
            </div>
            <div style={{ paddingLeft: "25px" }}>
              <table sx={{ border: "none" }}>
                <thead className="thead">
                  <tr>
                    <th className="header">Job Reference</th>
                    <th className="header">Site Details</th>
                    <th className="header">Status</th>
                  </tr>
                </thead>
                <tbody className="tbody">
                  {_DATA.currentData().length >= 1 &&
                    _DATA.currentData().map((item, index) => {
                      return (
                        <tr
                          key={index}
                          onClick={() => settingJobref(item)}
                          className="sortabletr"
                        >
                          <td style={{fontSize:"18px"}}>{item.job_ref_number}</td>
                          <td style={{fontSize:"18px"}}>{item.site_details}</td>
                          {item.status == 1 && <td style={{fontSize:"18px"}}>New</td>}
                          {item.status == 2 && <td style={{fontSize:"18px"}}>HPD Working</td>}
                          {item.status == 3 && <td style={{fontSize:"18px"}}>Need Your Attention</td>}
                          {item.status == 4 && <td style={{fontSize:"18px"}}>Resolved</td>}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              {_DATA.currentData().length === 0 && (
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "40px",
                  }}
                >
                  No Records Found
                </h4>
              )}
            </div>
            {_DATA.currentData().length >= 1 && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ThemeProvider theme={theme}>
                  <Pagination
                    className="pagination"
                    count={count}
                    color="primary"
                    // variant="outlined"
                    page={page}
                    onChange={handleChange}
                  />
                </ThemeProvider>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  FirstPageAction: (value) => dispatch(FirstPageAction(value)),
});

export default connect(null, mapDispatchtoProps)(CreateList);
