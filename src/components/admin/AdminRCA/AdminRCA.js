import React, { useState, useEffect, useRef } from "react";
import "./AdminRCA.css";

import Radio from "@mui/material/Radio";
import { makeStyles } from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

import { toast } from "react-toastify";

import Modal from "react-modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FileUploader } from "react-drag-drop-files";
import globalAPI from "../../../GlobalApi";
import URL from "../../../GlobalUrl";
import axios from "axios";

import { connect } from "react-redux";
import { adminFirstPageAction } from "../../../Redux/AdminFirstPage/adminFirstPage.action";

const fileTypes = ["PDF", "PNG", "JPEG"];
const useStyles = makeStyles({
  radio: {
    height: "2.8vh",
    width: "1.33vw",
  },
});

function AdminRCA({ adminFirstPageAction }) {
  const { state } = useLocation();
  const [i, seti] = useState(false);
  const [i1, seti1] = useState(false);
  const [i2, seti2] = useState(false);
  const [i3, seti3] = useState(false);
  const [loader, setLoader] = useState(false);
  const [addfiles, setAddfiles] = useState(false);
  const [isOpend, setIsOpend] = useState(false);
  const [inputData, setInputData] = useState(useLocation().state);
  const [show, setShow] = useState(true);
  const [checked, setChecked] = useState(false);
  const token = JSON.parse(localStorage.getItem("user"));
  const initialStatus = inputData.status;
  const [status, setStatus] = useState(initialStatus);
  const [fname, SetFname] = useState([]);
  const [efname, SetEFname] = useState([]);
  // const ExistingLen = inputData.evidences.length;

  useEffect(() => {
    adminFirstPageAction(false);
  }, []);

  useEffect(() => {
    console.log("inputdata",inputData)
    const newArray = [];
        inputData && inputData.evidences.map((item,index)=>{
          let a = item.slice(25)
          if(a.length>20){
            let b = a.slice(0,20);
            let c = b + "...";
            newArray.push(c);
          }else{
            newArray.push(a);
          }
        }) 
        SetEFname(newArray)
  }, [inputData]);

  const changeHandler = (e) => {
    setInputData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const changeHandler2 = (e) => {
    e.target.blur();
    setInputData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const changestatus = (e) => {
    if (e.target.name == "inprogress") {
      setStatus(2);
    }
    if (e.target.name == "approve") {
      setStatus(3);
    }
    if (e.target.name == "reject") {
      setStatus(5);
    }
    if (e.target.name == "inactive") {
      setStatus(6);
    }
  };

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setLoader(true);
      debugger;
      const data = { ...inputData, status: status };
      setInputData({ ...inputData, status: status });
      axios({
        method: "patch",
        url: URL + globalAPI.adminedituser + `?id=${state._id}`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setLoader(false);
          const res = response.data;
          console.log(res);
          if (res.success) {
            toast.success("Status changed");
          } else {
            toast.error(res.data.message);
          }
        })
        .catch(() => {
          setLoader(false);
          toast.error("Something went wrong");
        });
    }
  }, [status]);

  const togglefileModal = () => {
    setAddfiles(!addfiles);
    SetFname([]);
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
          debugger
          if (res.success) {
            toast.success('File Added')
            inputData.evidences.push(res.data.message[0])
            const newUpload = [];
            let a = res.data.message[0].slice(25);
            if (a.length > 20) {
              let b = a.slice(0, 20);
              let c = b + "...";
              newUpload.push(c);
            } else {
              newUpload.push(a);
            }
            const newName = [...fname];
            newName.push(newUpload)
            SetFname(newName);

            const newFile = [...efname];
            newFile.push(newUpload)
            SetEFname(newFile);
            // efname.push(newUpload);
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

  const removeFile = (index) => {
    const newValue = [...inputData.evidences];
    newValue.splice(index, 1);
    setInputData((state) => ({ ...state, evidences: newValue }));

    const newName = [...efname];
    newName.splice(index, 1);
    SetEFname(newName);
  };

  const removeTFile = (index) => {
    // const oldLen = ExistingLen + index;
    const newValue = [...inputData.evidences];
    newValue.splice(index, 1);
    setInputData((state) => ({ ...state, evidences: newValue }));

    const newName = [...fname];
    newName.splice(index, 1);
    SetFname(newName);
  };

  const newUpload = (e) => {
    setLoader(true);
    const data = { ...inputData };
    axios({
      method: "patch",
      url: URL + globalAPI.adminedituser + `?id=${state._id}`,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setLoader(false);
        const res = response.data;
        console.log(res);
        if (res.success) {
          toast.success("Updated successfully");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch(() => {
        setLoader(false);
        toast.error("Something went wrong");
      });
  };


  const classess = useStyles();

  return (
    <div className="adminRCAcontainer">
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="adminRCAtitle" style={{ fontSize: "2.9vw" }}>
        Manage Customer Account Request
      </div>
      <hr className="adminRCAcontainerhr" />
      <div className="adminRCApaper">
        <div className="adminRCAfirstrow">
          <div className="adminRCAnames">{inputData.name}</div>{" "}
          <div className="adminRCAnew">
            {status == 1
              ? "New"
              : status == 2
              ? "In Progress"
              : status == 3
              ? "Approved"
              : status == 5
              ? "Rejected"
              : status == 6
              ? "Inactive"
              : "New"}
          </div>
          <div
            style={{ fontSize: "1vw", marginTop: "0.67vh", fontWeight: "bold" }}
          >{`${inputData.address_1}, ${inputData.city}`}</div>
          <hr className="adminRCAhrFirst" />
        </div>

        <div>
          <button
            className={`${
              status == 2 || status == 3 || status == 5
                ? "disbtn"
                : "progressbtn"
            }`}
            name="inprogress"
            onClick={(e) => changestatus(e)}
          >
            In Progress
          </button>
          <button
            className={`${
              status == 3 || status == 5 ? "disbtn" : "approvebtn"
            }`}
            name="approve"
            onClick={(e) => changestatus(e)}
          >
            Approve
          </button>
          <button
            className={`${status == 3 || status == 5 ? "disbtn" : "rejectbtn"}`}
            name="reject"
            onClick={(e) => changestatus(e)}
          >
            Reject
          </button>
          <button
            className={`${
              status == 1 || status == 2 || status == 5
                ? "disbtn"
                : "Inactivebtn"
            }`}
            name="inactive"
            onClick={(e) => changestatus(e)}
          >
            Inactive
          </button>
        </div>

        <div style={{ minWidth: "66.53vw" }}>
          <div className="accordiantitle" onClick={() => seti(!i)}>
            <div className="arrow-wrapper">
              <img
                src={require("../../../Img/adminarrow.png")}
                style={{ height: "1.1vh", width: "0.66vw" }}
                className={
                  i ? "fa fa-angle-down " : "fa fa-angle-down fa-rotate-180"
                }
              />
            </div>
            <span className="title-text">Customer Contact Details</span>
          </div>
          <div className={i ? "content content-open" : "content"}>
            <div
              className={i ? "content-text content-text-open" : "content-text"}
            >
              <div style={{ display: "inline-block", width: "33.85vw" }}>
                <input
                  required
                  className="admininputfields admininput1"
                  onChange={changeHandler}
                  value={inputData.name}
                  type="text"
                  name="name"
                />{" "}
                <label className="admininput1-label">Full Name</label>{" "}
              </div>
              <input
                required
                className="admininputfields admininput21 "
                onChange={changeHandler}
                value={inputData.email}
                type="text"
                name="email"
              />{" "}
              <label className="admininput21-label">Email Address</label>
              <div style={{ display: "inline-block", width: "33.85vw" }}>
                <input
                  required
                  className="admininputfields admininput3 "
                  onChange={changeHandler}
                  value={inputData.password}
                  type="password"
                  name="password"
                />{" "}
                <label className="admininput3-label">Password*</label>{" "}
              </div>
              <input
                required
                className="admininputfields admininput4 "
                onChange={changeHandler}
                value={inputData.mobile}
                type="text"
                name="mobile"
              />{" "}
              <label className="admininput4-label">Mobile Number*</label>
            </div>
          </div>
        </div>

        <div style={{ minWidth: "66.53vw" }}>
          <div className="accordiantitle" onClick={() => seti1(!i1)}>
            <div className="arrow-wrapper">
              <img
                src={require("../../../Img/adminarrow.png")}
                /*   height="8px"
              width={"10px"} */
                style={{ height: "1.1vh", width: "0.66vw" }}
                className={
                  i1 ? "fa fa-angle-down " : "fa fa-angle-down fa-rotate-180"
                }
              />
            </div>
            <span className="title-text">Business Details</span>
          </div>
          <div className={i1 ? "content content-open" : "content"}>
            <div
              className={i1 ? "content-text content-text-open" : "content-text"}
            >
              <div style={{ display: "inline-block", width: "33.85vw" }}>
                <input
                  required
                  className="admininputfields  admininput5"
                  type="text"
                  value={inputData.business_registered_name}
                  onChange={changeHandler}
                  name="business_registered_name"
                />{" "}
                <label className={"admininput5-label"}>
                  Business Registered Name*
                </label>{" "}
              </div>
              <input
                required
                className="admininputfields admininput6"
                type="text"
                value={inputData.business_trade_name}
                onChange={changeHandler}
                name="business_trade_name"
              />{" "}
              <label className="admininput6-label">Business Trade Name*</label>
              <select
                name="business_type"
                id="cars"
                className={`admininputfields admininput7`}
                onChange={changeHandler2}
                onClick={() => setIsOpend(!isOpend)}
              >
                <option value="" hidden className="optioncolor ">
                  Business Type*
                </option>
                <option value="Limited Company" className="optioncolor option">
                  Limited Company
                </option>
                <option
                  value="Limited Liability Patnership"
                  className="optioncolor option"
                >
                  Limited Liability Patnership
                </option>
                <option value="Sole Trader" className="optioncolor option">
                  Sole Trader
                </option>
              </select>{" "}
              <img
                src={require("../../../Img/adminDropdown.png")}
                className={`admincommondropdown ${
                  isOpend && "admincommondropdownrotate"
                }`}
              />
            </div>
          </div>
        </div>

        <div style={{ minWidth: "66.53vw" }}>
          <div className="accordiantitle" onClick={() => seti2(!i2)}>
            <div className="arrow-wrapper">
              <img
                src={require("../../../Img/adminarrow.png")}
                /*   height="8px"
              width={"10px"} */
                style={{ height: "1.1vh", width: "0.66vw" }}
                className={
                  i2 ? "fa fa-angle-down " : "fa fa-angle-down fa-rotate-180"
                }
              />
            </div>
            <span className="title-text">Business Address</span>
          </div>
          <div className={i2 ? "content content-open" : "content"}>
            <div
              className={i2 ? "content-text content-text-open" : "content-text"}
            >
              <div style={{ display: "inline-block", width: "33.85vw" }}>
                <input
                  required
                  className="admininputfields admininput1"
                  onChange={changeHandler}
                  value={inputData.name}
                  type="text"
                  name="name"
                />{" "}
                <label className="admininput1-label">Full Name</label>{" "}
              </div>
              <div className="adminrca2subtitle3">Enter Address manually</div>
              <Radio
                type="radio"
                name="radio"
                className={classess.radio}
                checked={checked}
                onClick={() => {
                  checked ? setChecked(false) : setChecked(true);
                  show === false && setShow(!show);
                }}
              />{" "}
              <br></br>
              <div style={{ display: "inline-block", width: "33.85vw" }}>
                <input
                  required
                  className="admininputfields admininput9"
                  type="text"
                  value={inputData.address_1}
                  onChange={changeHandler}
                  name="address_1"
                  placeholder={checked === false ? "Address line 1*" : ""}
                  disabled={checked == false ? true : false}
                />{" "}
                {checked && (
                  <label className="admininput9-label">Address line 1*</label>
                )}{" "}
              </div>
              <input
                required
                className="admininputfields admininput10"
                type="text"
                value={inputData.address_2}
                onChange={changeHandler}
                name="address_2"
                placeholder={checked === false ? "Address line 2*" : ""}
                disabled={checked === false ? true : false}
              />{" "}
              {checked && (
                <label className="admininput10-label">Address line 2*</label>
              )}
              <div style={{ display: "inline-block", width: "33.85vw" }}>
                <input
                  required
                  className="admininputfields admininput11"
                  type="text"
                  value={inputData.city}
                  onChange={changeHandler}
                  name="city"
                  placeholder={checked === false ? "City/Town*" : ""}
                  disabled={checked === false ? true : false}
                />{" "}
                {checked && (
                  <label className="admininput11-label">City/Town*</label>
                )}{" "}
              </div>
              <input
                required
                value={inputData.postcode}
                className="admininputfields top admininput12"
                type="text"
                onChange={changeHandler}
                name="postcode"
                placeholder={checked === false ? "PostCode*" : ""}
                disabled={checked === false ? true : false}
              />{" "}
              {checked && (
                <label className="admininput12-label">PostCode*</label>
              )}
            </div>
          </div>
        </div>

        <div style={{ minWidth: "66.53vw" }}>
          <div className="accordiantitle" onClick={() => seti3(!i3)}>
            <div className="arrow-wrapper">
              <img
                src={require("../../../Img/adminarrow.png")}
                /*   height="8px"
              width={"10px"} */
                style={{ height: "1.1vh", width: "0.66vw" }}
                className={
                  i3 ? "fa fa-angle-down " : "fa fa-angle-down fa-rotate-180"
                }
              />
            </div>
            <span className="title-text">Supporting Documents</span>
          </div>
          <div className={i3 ? "content content-open" : "content"}>
            <div
              className={i3 ? "content-text content-text-open" : "content-text"}
            >
              <button
                className="adminDocumentBtn"
                onClick={() => togglefileModal()}
              >
                Add Supporting Documents
              </button>
              <h4 className="adminname1">Attachments</h4>

              <hr className="adminclhr2" />
              {efname ? (
                efname.map((item, index) => {
                  return (
                    <div
                      className="adminRCAfile"
                      style={{ borderRadius: "1.9vw" }}
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

                        <span
                          className="adminfileName"
                          style={{ fontSize: "1vw" }}
                        >
                          {efname[index]}
                        </span>
                      </span>

                      <img
                        src={require("../../../Img/iconDelete.png")}
                        onClick={() => removeFile(index)}
                        height="22px"
                        width={"20px"}
                        style={{
                          marginRight: "1.33vw",
                          height: "3vh",
                          width: "1.33vw",
                        }}
                      />
                    </div>
                  );
                })
              ) : (
                <span style={{ marginLeft: "1.9vw", fontSize: "0.9vw" }}>
                  No attachments found
                </span>
              )}
              <br />
            </div>
          </div>
          <button className="adminsavebtn" onClick={() => newUpload()}>
            Save
          </button>
        </div>

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
              <h5 style={{ fontSize: "1.4vw", margin: "0.67vh 0 0 0" }}>
                Add Attachment
              </h5>
              <hr className="clhrFirst" />
              <h5 className="dialogname">{inputData.name}</h5>
            </div>
            <div className="dialog-row2">
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
                        style={{
                          marginLeft: "1.33vw",
                          height: "3.3vh",
                          width: "1.6vw",
                        }}
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
                      toast.error("Only pdf, png, jpeg files are allowed")
                    }
                    children={
                      <span className="browse">
                        <button className="browsebtn">Browse</button>
                      </span>
                    }
                  />
                </span>
              </div>
              {fname &&
                fname.map((item, index) => {
                  return (
                    <div
                      className="file"
                      style={{ borderRadius: "1.9vw" }}
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
                        onClick={() => removeTFile(index)}
                        style={{
                          marginRight: "1.33vw",
                          height: "3vh",
                          width: "1.33vw",
                        }}
                      />
                    </div>
                  );
                })}
                
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  adminFirstPageAction: (value) => dispatch(adminFirstPageAction(value)),
});

export default connect(null, mapDispatchToProps)(AdminRCA);
