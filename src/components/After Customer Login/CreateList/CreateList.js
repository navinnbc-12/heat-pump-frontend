import React, { useState,useEffect } from "react";
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


import { connect } from "react-redux";
import { FirstPageAction } from "../../../Redux/FirstPage/FirstPage.action";

Modal.setAppElement("#root");

const fileTypes = ["PDF", "PNG", "JPEG"];
const jobs = [
  {
    id: "JR12345678",
    site: "10 windyridge Hamilton ML37TR",
    status: "completed",
  },
  {
    id: "JR90815678",
    site: "7 Covalburn Avenue Hamilton ML37TR",
    status: "inprogress",
  },
  {
    id: "JR12345678",
    site: "7 windyridge Avenue Hamilton ML37TR",
    status: "completed",
  },
  { id: "4", site: "east", status: "new" },
  { id: "5", site: "northeast", status: "admin look" },
];
const CreateList = ({FirstPageAction}) => {
  const navigate = useNavigate();
  const [high, setHigh] = useState(false);
  const [medium, setMedium] = useState(false);
  const [low, setLow] = useState(false);
  const [files, setFiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [servicetype, setServicetype] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [priority, setPriority] = useState(1);
  const [attachments, setattachments] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [srno, setSrno] = useState("");
  const [data, setData] = useState([]);
  // const data = [
  //   {
  //     id: "JR12345678",
  //     site: "10 windyridge Hamilton ML37TR",
  //     status: "completed",
  //   },
  //   {
  //     id: "JR90815678",
  //     site: "7 Covalburn Avenue Hamilton ML37TR",
  //     status: "inprogress",
  //   },
  //   {
  //     id: "JR12345678",
  //     site: "7 windyridge Avenue Hamilton ML37TR",
  //     status: "completed",
  //   },
  //   { id: "4", site: "east", status: "new" },
  //   { id: "5", site: "northeast", status: "admin look" },
  // ];
  const [site,setSite] = useState("");
  const [jobid,setJobid]= useState("");
  let [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const [count, setCount] = useState(1);
  const _DATA = usePagination(data, PER_PAGE);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userName = userData.name;

  useEffect(() => {
    FirstPageAction(false)
  }, [])
  

  const handleSelectChange = (event) => {
    setServicetype(event.target.value);
  };

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

  };

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const toggleModal = () => {
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
          // setCount(2);
          setOpen(!open);
          if (res.data.data === []) {
          }
        }
        // else {
        //   toast.error(response.data.message);
        // }
      })
      .catch((e) => {
        setLoader(false);
        toast.error("Something went wrong");
      });
    setOpen(!open);
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
            toast.success("File Added");
            attachments.push(res.data.message[0]);
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
      job_reference_id: null,
      type: servicetype,
      status:1,
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
        if (res.success) {
          // toast.success("Submitted Successfully");
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
  const settingJobref = (item) =>{
    setJobid(item.job_ref_number)
    setSite(item.site_details)
    setOpen(!open);
  }
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
              <div style={{ fontSize: "small" }}>
               HeatPump ,scotland glasglow
              </div>
              <hr className="clhrFirst" />
            </div>
            <button className="btnjob" onClick={toggleModal}>
              Job Reference
            </button>
            <div className="gridmove">
              <div className="gridbox1">
                <div>Site</div>
                <div>{site?site:"-"}</div>
                <div>Job ID</div>
                <div>{jobid?jobid:"-"}</div>
              </div>
            </div>

            <hr className="clhr1" />
            <div>
              <select
                className="servicetype"
                value={servicetype}
                onChange={handleSelectChange}
              >
                <option value="" defaultValue hidden disabled>
                  Service Type
                </option>
                <option value="Enquiry" className="optiontag">
                  Enquiry
                </option>
                <option value="Design Clarifications" className="optiontag">
                  Design Clarifications
                </option>
                {/* <option value="three" className="optiontag">
                  Service 3
                </option> */}
              </select>
              {/* <label className='clinput-label'>Service Type</label> */}
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

              <h4 className="name1">Attachments</h4>

              <hr className="clhr2" />

              <div>
                <FileUploader
                  handleChange={(e) => onFileUpload(e)}
                  name="file"
                  types={fileTypes}
                  onTypeError={(err) =>
                    toast.error("Only pdf,png,jpeg files are allowed")
                  }
                  children={
                    <span className="dragndrop">
                      Drag and Drop Here
                      <img
                        src={require("../../../Img/iconcloud.png")}
                        height="25px"
                        width={"25px"}
                        style={{ marginLeft: "20px" }}
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
                    toast.error("Only pdf,png,jpeg files are allowed")
                  }
                  children={
                    <span className="browse">
                      <button className="browsebtn">Browse</button>
                    </span>
                  }
                />
              </div>

              {files && files.map((item, index) => {
                return (
                  <div
                    className="filemap"
                    style={{ borderRadius: "30px" }}
                    key={index}
                  >
                    <span style={{ float: "left", marginLeft: "15px" }}>
                      <img
                        src={require("../../../Img/attachIcon.png")}
                        height="20px"
                        width={"15px"}
                        style={{ marginLeft: "20px" }}
                      />

                      <span className="fileName">Attachment-{index + 1}</span>
                    </span>

                    <img
                      src={require("../../../Img/iconDelete.png")}
                      onClick={() => removeFile(index)}
                      height="22px"
                      width={"20px"}
                      style={{ marginRight: "20px" }}
                    />
                  </div>
                );
              })}

              <h4 className="name2">Priority</h4>

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
                  details !== "" &&
                  files.length >= 1 && (
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
          <div className="subpaper">
            <div className="subfirstrow">
              <div className="subnames">{userName}</div>
              <div style={{ fontSize: "30px", fontWeight: "300" }}>
                Heat Pump Scotland,Glasgow
              </div>
              <hr className="subhrFirst" />

              <div className="subtext">
                Your enquiry submission is successful. Ref:{srno}. You can track
                the status of your service request using{" "}
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
                          <td className="">{item.status}</td>
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
                <Pagination
                  className="pagination"
                  count={count}
                  color="standard"
                  variant="outlined "
                  page={page}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  FirstPageAction:(value) => dispatch(FirstPageAction(value))
  })
  
export default connect(null,mapDispatchtoProps)(CreateList);
  