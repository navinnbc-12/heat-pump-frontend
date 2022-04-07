import "./ManageServiceRequest.css";
import React, { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { saveAs } from "file-saver";
import { FileUploader } from "react-drag-drop-files";
import moment from "moment";

import globalAPI from "../../../GlobalApi";
import URL from "../../../GlobalUrl";
import axios from "axios";

import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";

import { connect } from "react-redux";
import { FirstPageAction } from "../../../Redux/FirstPage/FirstPage.action";

const fileTypes = ["PDF", "PNG", "JPEG"];
const ManageServiceRequest = ({ FirstPageAction }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state)
  const [loader, setLoader] = useState(false);
  const [notes, setNotes] = useState([]);
  const [details, setDetails] = useState({});
  const [attachments, setAttachments] = useState([]);
  const [openupdate, setOpenupdate] = useState(false);
  const [opensr, setOpensr] = useState(false);
  const [addfiles, setAddfiles] = useState(false);
  const [files, setFiles] = useState([]);
  const [text, setText] = useState("");
  const [closetext, setClosetext] = useState("");
  const [availableFiles, setavailableFiles] = useState([]);
  const [noupdate, setNoupdate] = useState(false);
  const [noclose, setNoclose] = useState(false);

  useEffect(() => {
    fetchData();
    fetchSeconddata();
  }, []);

  const toggleModal = (e) => {
    e.preventDefault();
    setOpenupdate(!openupdate);
    setText("");
  };

  const togglesrModal = () => {
    setOpensr(!opensr);
    setClosetext("");
  };

  const togglefileModal = () => {
    setAddfiles(!addfiles);
    setAttachments([]);
    setFiles([]);
  };

  useEffect(() => {
    FirstPageAction(false);
  }, []);

  function fetchData() {
    const token = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    setLoader(true);
    axios
      .get(URL + globalAPI.allnotes + `?srid=${state}`, config)
      .then((response) => {
        setLoader(false);
        const res = response.data;
        setNotes(res.data);
      })
      .catch((e) => {
        setLoader(false);
        toast.error("Something went wrong");
      });
  }

  function fetchSeconddata() {
    const token = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    setLoader(true);
    axios
      .get(URL + globalAPI.myreq + `/${state}`, config)
      .then((response) => {
        setLoader(false);
        const res = response.data;
        setDetails(res.data);
        console.log("details", details);
        setavailableFiles(res.data.attachments);
      })
      .catch((e) => {
        setLoader(false);
        toast.error("Something went wrong");
      });
  }

  async function printTickets(index) {
    const { data } = await getTicketsPdf(index);
    const blob = new Blob([data]);
    const att = availableFiles[index].split(".").pop();
    saveAs(blob, `Application${index + 1}.${att}`);
  }

  async function getTicketsPdf(index) {
    const token = JSON.parse(localStorage.getItem("user"));
    // const att = availableFiles[index].replace(`${details.creator_id}/`, "");
    const att = availableFiles[index];
    return axios.get(URL + globalAPI.getFile + `?fp=${att}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "arraybuffer",
    });
  }

  const removeFile = (index) => {
    const newValue = [...availableFiles];
    newValue.splice(index, 1);
    setLoader(true);
    const token = JSON.parse(localStorage.getItem("user"));
    axios({
      method: "patch",
      url: URL + globalAPI.myreq + `/${state}`,
      data: { attachments: newValue },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setLoader(false);
        const res = response.data;
        if (res.success) {
          fetchData();
          fetchSeconddata();
          toast.success("File Removed")
        } else {
          toast.error(res.data.message);
        }
      })
      .catch(() => {
        setLoader(false);
        toast.error("Something went wrong");
      });
  };

  const addUpdate = (e) => {
    e.preventDefault();
    if (text.length >= 1) {
      setLoader(true);
      setNoupdate(false);
      const token = JSON.parse(localStorage.getItem("user"));
      axios({
        method: "post",
        url: URL + globalAPI.addnotes + `?srid=${state}`,
        data: { description: text, title: text, type: 1 },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const res = response.data;
          setLoader(false);
          toggleModal(e);
          if (res.success) {
            fetchData();
            fetchSeconddata();
            toast.success("Updated Successfully");
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          setLoader(false);
          toggleModal(e);
          toast.error("Something Went Wrong");
        });
    } else {
      setNoupdate(true);
      return false;
    }
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
          "Content-Type": "application/pdf",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const res = response.data;
          setLoader(false);
          if (res.success) {
            // toast.success("File Added");
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
  const newUpload = (e) => {
    setLoader(true);
    const token = JSON.parse(localStorage.getItem("user"));
    axios({
      method: "post",
      url: URL + globalAPI.addnotes + `?srid=${state}`,
      data: {
        description: "Added a new attachment",
        title: "Added a new attachment",
        attachments: attachments,
        type: 1,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setLoader(false);
        togglefileModal();
        const res = response.data;
        if (res.success) {
          fetchData();
          fetchSeconddata();
          toast.success("File added successfully");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch(() => {
        setLoader(false);
        togglefileModal();
        toast.error("Something went wrong");
      });
  };
  const closingsr = (e) => {
    if (closetext.length >= 1) {
      setLoader(true);
      const token = JSON.parse(localStorage.getItem("user"));
      axios({
        method: "post",
        url: URL + globalAPI.addnotes + `?srid=${state}`,
        data: {description: closetext, type: 1,title: "--closed--", },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setLoader(false);
          togglesrModal();
          const res = response.data;
          if (res.success) {
            fetchData();
            fetchSeconddata();
            toast.success("Updated Successfully");
          } else {
            toast.error(res.data.message);
          }
        })
        .catch(() => {
          setLoader(false);
          togglesrModal();
          toast.error("Something went wrong");
        });
    } else {
      setNoclose(true);
    }
  };

  return (
    <div>
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="msrcontainer">
        <div className="msrtitle">Manage Service Request</div>
        <hr className="msrcontainerhr" />
        <div className="msrpaper">
          <div className="msrgrid1">
            <div className="msrtitle1">Service Request Summary</div>
            <hr className="msrhr1" />
            <div className="displaygrid">
              <div className="displayleft">Priority</div>
              {details.priority == 1 && (
                <div className="displaygrid1">
                  <div className="hroundcircle">H</div>
                </div>
              )}
              {details.priority == 2 && (
                <div className="displaygrid1">
                  <div className="mroundcircle">M</div>
                </div>
              )}
              {details.priority == 3 && (
                <div className="displaygrid1">
                  <div className="lroundcircle">L</div>
                </div>
              )}
              <div className="displayleft">Status</div>
              {details.status == 1 && (<div className="displaygrid1">New</div>)}
              {details.status == 2 && (
                <div className="displaygrid1">HPD Working</div>
              )}
              {details.status == 3 && (
                <div className="displaygrid1">Need Your Attention</div>
              )}
              {details.status == 4 && (
                <div className="displaygrid1">Closed</div>
              )}
              <div className="displayleft">Last Updated</div>
              <div className="displaygrid1">
                {moment(details.updatedAt).format("DD/MM/YYYY h:mm a")}
              </div>
              <div className="displayleft">Created</div>
              <div className="displaygrid1">
                {moment(details.createdAt).format("DD/MM/YYYY h:mm a")}
              </div>
              <div className="displayleft">Job Reference</div>
              <div className="displaygrid1">
                {details.job_reference_id
                  ? details.job_reference_id.job_ref_number
                  : "-"}
              </div>
              <div className="displayleft">Site</div>
              <div className="displaygrid1">
                {details.job_reference_id
                  ? details.job_reference_id.site_details
                  : "-"}
              </div>
            </div>
            <div className="msrtitle2">Attachments</div>
            <hr className="msrhr1" />
            {availableFiles &&
              availableFiles.map((item, index) => (
                <div key={index} className="msrattachment">
                  <img
                    src={require("../../../Img/attachIcon1.png")}
                    className="msrattachIcon"
                  />
                  <div className="div-name" onClick={() => printTickets(index)}>
                    Attachment {index + 1}
                  </div>
                  <span>
                    <img
                      src={require("../../../Img/cross1.png")}
                      className="msrcross1"
                      onClick={() => removeFile(index)}
                    />
                  </span>
                </div>
              ))}
          </div>
          <div className="msrgrid2">
            <div className="msrtitle3">
              {details.service_ref_number} - {details.title}
            </div>
            <span className="msrspan1">{details.description}</span>
            <div style={{ marginTop: "10.73vh" }}>
              <button className="msrbutton1" onClick={(e) => toggleModal(e)}>
                Add Update
              </button>
              <button className="msrbutton2" onClick={() => togglefileModal()}>
                Add Attachments
              </button>
              <button className="msrbutton3" onClick={() => togglesrModal()}>
                Close SR
              </button>
            </div>
          </div>
          <div className="msrgrid3">
            {notes &&
              notes.map((item, index) => {
                return (
                  <>
                    <div className="msrupdatesgrid" key={index}>
                      <div className="msrimage">
                        {item.type == 1 && (
                          <img
                            src={require("../../../Img/type1.png")}
                            className="msrCommonIcon"
                          />
                        )}
                        {item.type == 2 && (
                          <img
                            src={require("../../../Img/type2.png")}
                            className="msrCommonIcon1"
                          />
                        )}
                        {item.type == 4 && (
                          <img
                            src={require("../../../Img/type4.png")}
                            className="msrCommonIcon"
                          />
                        )}
                      </div>
                      <div className="msrbox1">
                        {item.type == 1 && (
                          <span className="msrspan21">
                            Update from Customer
                          </span>
                        )}
                        {item.type == 2 && (
                          <span className="msrspan21">
                            Update from HPD Staff
                          </span>
                        )}
                        {item.type == 3 && (
                          <span className="msrspan21">System Update</span>
                        )}
                        <span className="msrspan3">
                          {" "}
                          {moment(item.updatedAt).format("DD/MM/YYYY h:mm a")}
                        </span>
                        <div className="msrdiv3">{item.description}</div>
                      </div>
                    </div>
                    <hr className="msrhr11" />
                  </>
                );
              })}
            {notes.length === 0 && (
              <div style={{ textAlign: "center" }}>No Notes Found</div>
            )}
          </div>
        </div>
        <div style={{height:"8.72vh"}}>
        </div>
      </div>
      
      <Modal
        isOpen={openupdate}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>
          <form>
            <div className="dialogclose">
              <IconButton onClick={(e)=>toggleModal(e)}>
                <CloseIcon sx={{ color: "black" }}></CloseIcon>
              </IconButton>
            </div>
            <div className="dialog-row1">
              <h5 style={{ fontSize: "1.34vw", margin: "0.8vh 0 0 0" }}>
                Add Update
              </h5>
              <hr className="clhrFirst" />
              <h5 className="dialogname">
                {details.service_ref_number} - {details.title}
              </h5>
            </div>
            <div className="dialog-row2">
              <textarea
                className="modeltextarea"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  setNoupdate(false);
                }}
                placeholder="Update details"
              ></textarea>
              {noupdate && (
                <span style={{ color: "red", display: "block" }}>
                  No Updates Given
                </span>
              )}
              <div style={{ marginTop: "1.34vh" }}>
                <button className="submitbtn" onClick={(e) => addUpdate(e)}>
                  Submit
                </button>
                <button className="closebtn" onClick={() => toggleModal()}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        isOpen={opensr}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>
          <div className="dialogclose">
            <IconButton onClick={togglesrModal}>
              <CloseIcon sx={{ color: "black" }}></CloseIcon>
            </IconButton>
          </div>
          <div className="dialog-row1">
            <h5 style={{ fontSize: "1.34vw", margin: "0.67vh 0 0 0" }}>
              Close Service Request
            </h5>
            <hr className="clhrFirst" />
            <h5 className="dialogname">
              {details.service_ref_number} - {details.title}
            </h5>
          </div>
          <div className="dialog-row2">
            <textarea
              className="modeltextarea"
              value={closetext}
              onChange={(e) => setClosetext(e.target.value)}
              placeholder="Reason for closing"
              required
            ></textarea>
            {noclose && (
              <span style={{ color: "red", display: "block" }}>
                No Reason Given
              </span>
            )}
            <div style={{ marginTop: "1.34vh" }}>
              <button className="submitbtn" onClick={() => closingsr()}>
                Submit
              </button>
              <button className="closebtn" onClick={() => togglesrModal()}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={addfiles}
        className="myattachmodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>
          <div className="dialogclose">
            <IconButton onClick={() => togglefileModal()}>
              <CloseIcon sx={{ color: "black" }}></CloseIcon>
            </IconButton>
          </div>
          <div className="dialog-row1">
            <h5 style={{ fontSize: "1.34vw", margin: "0.67vh 0 0 0" }}>
              Add Attachment
            </h5>
            <hr className="clhrFirst" />
            <h5 className="dialogname">
              {details.service_ref_number} - {details.title}
            </h5>
          </div>
          <div className="dialog-row2">
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
                      height="3.35vw"
                      width={"1.52vw"}
                      style={{ marginLeft: "1.22vw" }}
                    />
                  </span>
                }
              />

              <span className="or">OR</span>

              <span>
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
              </span>
            </div>
            {files.map((item, index) => {
              return (
                <div
                  className="file"
                  style={{ borderRadius: "1.92vw" }}
                  key={index}
                >
                  <span style={{ float: "left", marginLeft: "0.9vw" }}>
                    <img
                      src={require("../../../Img/attachIcon.png")}
                      style={{ marginLeft: "1.22vw",height:"2.68vh",width:"0.91vw" }}
                    />

                    <span className="fileName">Attachment-{index + 1}</span>
                  </span>

                  <img
                    src={require("../../../Img/iconDelete.png")}
                    onClick={() => removeFile(index)}
                    
                    style={{ marginRight: "1.22vw",height:"2.68vh",width:"0.91vw" }}
                  />
                </div>
              );
            })}
            <div style={{ marginTop: "1.34vh" }}>
              <button className="submitbtn" onClick={() => newUpload()}>
                Submit
              </button>
              <button className="closebtn" onClick={() => togglefileModal()}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <div style={{ height: "8.18vh" }}></div>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  FirstPageAction: (value) => dispatch(FirstPageAction(value)),
});

export default connect(null, mapDispatchtoProps)(ManageServiceRequest);
