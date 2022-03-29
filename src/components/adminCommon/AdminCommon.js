import React, { useEffect, useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import Modal from "react-modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


import "./AdminCommon.css";
import { connect } from "react-redux";

function AdminCommon({adminFirstPageStatus}) {
  const Navigate = useNavigate();
  const [collapse, setCollapse] = useState(false);
  const [display, setDisplay] = useState("redbar1");
  const [logout,setLogout] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem("userData"));

  const toggleModal = () => {
    setLogout(!logout);
  };
  const signout = () =>{
    localStorage.removeItem("user")
    localStorage.removeItem("userData")
    Navigate("/")

  }

console.log(adminFirstPageStatus)
  return (
   
      <div style={{ display: "flex",height:"100%" }}>
        <div className={`${collapse ? " adminsidebar1" : "adminsidebar"}`}>
          <div className="HPDSideBar">
            <img
              src={require("../../Img/HPDD.jpeg")}
              height="40px"
              width={"40px"}
            />
          </div>

          <Link
            to="accountrequest"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            <li
              style={
                display == "redbar1"
                  ? { fontWeight: "600" }
                  : { fontWeight: "300" }
              }
              className="adminfirstli"
              onClick={() => setDisplay("redbar1")}
            >
              {" "}
              <img
                src={require("../../Img/sidebaradmin1.png")}
                height="20px"
                width={"20px"}
              />{" "}
              Account Requests{" "}
              <img
                src={require("../../Img/redbar.png")}
                height="50px"
                width={"10px"}
                className="adminredbar1"
                style={
                  display == "redbar1"
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
              />{" "}
            </li>{" "}
          </Link>
          <li
            onClick={() => setDisplay("redbar2")}
            style={
              display == "redbar2"
                ? { fontWeight: "600" }
                : { fontWeight: "300" }
            }
          >
            {" "}
            <img
              src={require("../../Img/sidebaradmin2.png")}
              height="20px"
              width={"20px"}
            />{" "}
            Quotes Request {" "}
            <img
              src={require("../../Img/redbar.png")}
              height="50px"
              width={"10px"}
              className="adminredbar2"
              style={
                display == "redbar2"
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
            />{" "}
          </li>
          <Link
            to="adminsrl"
            style={{ textDecoration: "none", color: "black" }}
          >
          <li
            onClick={() => setDisplay("redbar3")}
            style={
              display == "redbar3"
                ? { fontWeight: "600" }
                : { fontWeight: "300" }
            }
          >
            {" "}
            <img
              src={require("../../Img/sidebaradmin3.png")}
              height="20px"
              width={"20px"}
            />{" "}
            Service Requests{" "}
            <img
              src={require("../../Img/redbar.png")}
              height="50px"
              width={"10px"}
              className="adminredbar3"
              style={
                display == "redbar3"
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
            />{" "}
          </li>
          </Link>
          <Link
            to="businessuser"
            style={{ textDecoration: "none", color: "black" }}
          >
          <li
            onClick={() => setDisplay("redbar4")}
            style={
              display == "redbar4"
                ? { fontWeight: "600" }
                : { fontWeight: "300" }
            }
          >
            {" "}
            <img
              src={require("../../Img/sidebaradmin41.jpg")}
              height="20px"
              width={"20px"}
              style={{borderRadius:"5px"}}
            />{" "}
            Business Users{" "}
            <img
              src={require("../../Img/redbar.png")}
              height="50px"
              width={"10px"}
              className="adminredbar4"
              style={
                display == "redbar4"
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
            />{" "}
          </li>
          </Link>
          <img
            src={require("../../Img/ellipse.png")}
            height="360px"
            width={"250px"}
            alt=""
            className="adminellipse"
          />
        </div>

        <div style={{ width: "100%" }}>
          <div className={`${collapse ? "adminnavbar1" : "adminnavbar"}`}>
            <div>
              <img
                src={require("../../Img/toggleSideBar.png")}
                onClick={() => setCollapse(!collapse)}
                height="40px"
                width={"40px"}
                className="admincollapse-icon"
              />
              {!adminFirstPageStatus?(<img
                src={require("../../Img/toggleback.png")}
                onClick={() => {window.history.back();}}
               
                height="40px"
                width={"40px"}
                className="admincollapse-left"
              />):null}

              <div style={{ float: "right", marginRight: "100px" }}>
                <img
                  src={require("../../Img/homeIcon.png")}
                  height="40px"
                  width={"40px"}
                  className="adminhome-icon"
                  
                />
                <img
                  src={require("../../Img/bell.png")}
                  height="40px"
                  width={"40px"}
                  className="adminbell-icon"
                />

                <div className="adminname-icon">
                  <span
                    style={{
                      position: "relative",
                      bottom: "15px",
                      left: "70px",
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    {userInfo.name}
                  </span>
                  <img
                    src={require("../../Img/account.png")}
                    height="40px"
                    width={"40px"}
                    className="adminaccount-icon"
                    onClick={() => toggleModal()}
                  />
                </div>
              </div>
            </div>
          </div>
          <Modal
        isOpen={logout}
        className="logoutmodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>
          <form>
            <div className="logclose">
              <IconButton onClick={toggleModal}>
                <CloseIcon sx={{ color: "black" }}></CloseIcon>
              </IconButton>
            </div>
            <div className="log-row1">
              <h5 style={{ fontSize: "22px", margin: "5px 0 0 0" }}>
                Are you sure you want to logout?
              </h5>
            </div>
            <div className="log-row2">
              <div style={{ marginTop: "10px" }}>
                <button className="yesbtn" onClick={()=>signout()}>
                  yes
                </button>
                <button className="nobtn" onClick={toggleModal}>
                  No
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
          <Outlet />
        </div>
      </div>
    
  );
}

const mapStatetoProps = (state) => ({
adminFirstPageStatus:state.afpr.adminfirstPageStatus
})

export default connect(mapStatetoProps) (AdminCommon);
