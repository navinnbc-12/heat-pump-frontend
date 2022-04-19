import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { IconButton, Pagination } from "@mui/material";
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
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "0.61vw",
      marginRight: "1.22vw",
      width: "26vw",
      height: "6.04vh",
      fontWeight: "bolder",
      fontFamily: "outfit",
      backgroundColor: "white",

      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    icons: {
      fontSize: "0.5vw",
    },
  },
  selectinput: {
    marginBottom: "0.67vh",
    fontFamily: "outfit",
    fontWeight: "bold",
    fontSize: "1vw",
  },
});
const CreateList = ({ FirstPageAction }) => {
  const navigate = useNavigate();
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
  const [fname,SetFname] = useState([]);

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
    } else if (name === "medium") {
      setPriority(2);
      setHigh(false);
      setMedium(true);
      setLow(false);
    } else {
      setHigh(false);
      setPriority(3);
      setMedium(false);
      setLow(true);
    }
  };

  const removeFile = (index) => {
    const newValue = [...files];
    newValue.splice(index, 1);
    setFiles(newValue);

    //removing attachments
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
            debugger
            attachments.push(res.data.message[0]);
            const newUpload = [];
            let a = res.data.message[0].slice(25)
            if(a.length>20){
              let b = a.slice(0,27);
              let c = b + "...";
              newUpload.push(c);
            }else{
              newUpload.push(a);
            }
            fname.push(newUpload);
            // console.log(res.data.message[0].slice(25));
            // fname.push(res.data.message[0].slice(25));
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
        debugger
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
    <div>
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="clcontainer">
        <div className="cltitle">Create a Service Requests</div>
        <hr className="clcontainerhr" />
        {!submitted && (
          <div className="clpaper">
            <div className="clfirstrow">
              <div className="clnames">{userName}</div>
              <div style={{ fontSize: "0.8vw" }}>
                {userData.business_trade_name} , {userData.city}
              </div>
              <hr className="clhrFirst" />
            </div>
            <button
              className="btnjob"
              style={{ fontSize: "1vw" }}
              onClick={toggleModal}
            >
              Job Reference
            </button>
            <div className="gridmove">
              <div className="gridbox1">
                <div>Site</div>
                <div>{site ? site : "-"}</div>
                <div>Job ID</div>
                <div>{jobid ? jobid : "-"}</div>
              </div>
            </div>

            <hr className="clhr1" />
           
            <div style={{ marginTop: "4vh" }}>
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
                  onChange={(e) => setServicetype(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  label="Service Type"
                  IconComponent={() =>
                    focused ? (
                      <KeyboardArrowUpIcon className={classes.icons} />
                    ) : (
                      <KeyboardArrowDownIcon className={classes.icons} />
                    )
                  }
                >
                  <MenuItem style={{fontWeight:600}}value="Enquiry"> Enquiry </MenuItem>
                  <MenuItem style={{fontWeight:600}}value="Design Clarifications"> Design Clarifications </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <input
                type="text"
                className="clinput"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <label className="clinput-label">Title</label>
            </div>
            <div>
              <textarea
                id="details"
                name="details"
                rows="10"
                className="cltextarea"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
              ></textarea>
              <label className="cltextarea-label">Details</label>

              <h4 className="name1" style={{ fontSize: "1.2vw" }}>
                Attachments
              </h4>

              <hr className="clhr2" />

              <div>
                <FileUploader
                  handleChange={(e) => onFileUpload(e)}
                  name="file"
                  types={fileTypes}
                  onTypeError={(err) =>
                    toast.error("Only pdf, png, jpeg files are allowed")
                  }
                  children={
                    <span className="dragndrop">
                      Drag and Drop Here
                      <img
                        src={require("../../../Img/iconcloud.png")}
                        /*  height="25px"
                        width={"25px"} */
                        style={{
                          marginLeft: "20px",
                          height: "3.35vh",
                          width: "1.63vw",
                        }}
                      />
                    </span>
                  }
                />

                <span className="or">OR</span>

                <FileUploader
                  handleChange={(e) => onFileUpload(e)}
                  name="file"
                  types={fileTypes}
                  onTypeError={(err) =>
                    toast.error("Only pdf, png, jpeg files are allowed")
                  }
                  children={
                    <span className="browse">
                      <button className="browsebtn">Browse</button>
                    </span>
                  }
                />
              </div>

              {files &&
                files.map((item, index) => {
                  return (
                    <div
                      className="filemap"
                      style={{ borderRadius: "1.8vw" }}
                      key={index}
                    >
                      <span style={{ float: "left", marginLeft: "1vw" }}>
                        <img
                          src={require("../../../Img/attachIcon.png")}
                          style={{
                            height: "2.8vh",
                            width: "1vw",
                          }}
                        />

                        <span className="fileName">{fname[index]}</span>
                      </span>

                      <img
                        src={require("../../../Img/iconDelete.png")}
                        onClick={() => removeFile(index)}
                        style={{
                          marginRight: "20px",
                          width: "1.3vw",
                          height: "2.9vh",
                        }}
                      />
                    </div>
                  );
                })}

              <h4 className="name2" style={{ fontSize: "1.2vw" }}>
                Priority
              </h4>

              <hr className="clhr2" />

              <button
                className={high ? "highBtnActive highBtn " : " highBtn"}
                value="high"
                onClick={(e) =>
                  high ? setHigh(false) : handleClick(e.target.value)
                }
              >
                High
              </button>

              <button
                className={
                  medium ? "mediumBtnActive  mediumBtn " : " mediumBtn"
                }
                value="medium"
                onClick={(e) =>
                  medium ? setMedium(false) : handleClick(e.target.value)
                }
              >
                Medium
              </button>

              <button
                className={low ? "lowBtnActive lowBtn " : " lowBtn"}
                value="low"
                onClick={(e) =>
                  low ? setLow(false) : handleClick(e.target.value)
                }
              >
                Low
              </button>

              <div>
                {servicetype !== "" &&
                  priority !== "" &&
                  title !== "" &&
                  details !== "" && (
                    <button
                      className="submitBtn"
                      onClick={(e) => uploadMapping(e)}
                    >
                      Submit
                    </button>
                  )}
              </div>
            </div>
          </div>
        )}

        {submitted && (
          <>
            <div className="subpaper">
              <div className="subfirstrow">
                <div className="subnames">{userName}</div>
                <div>
                  {userData.business_trade_name}, {userData.city}
                </div>
                <hr className="subhrFirst" />

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
                          <td className="">{item.job_ref_number}</td>
                          <td className="">{item.site_details}</td>
                          {item.status == 1 && <td>New</td>}
                          {item.status == 2 && <td>HPD Working</td>}
                          {item.status == 3 && <td>Need Your Attention</td>}
                          {item.status == 4 && <td>Resolved</td>}
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
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  FirstPageAction: (value) => dispatch(FirstPageAction(value)),
});

export default connect(null, mapDispatchtoProps)(CreateList);
