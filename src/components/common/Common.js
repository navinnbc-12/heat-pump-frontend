import React, { useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

import Modal from "react-modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router-dom";


import "./Common.css";
import { connect } from "react-redux";



function Common({firstPageStatus}) {
  const Navigate = useNavigate();
  const [collapse, setCollapse] = useState(false);
  const [display, setDisplay] = useState("redbar1");
  const [logout,setLogout] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem("userData"));

  console.log(userInfo.name)

  const toggleModal = () => {
    setLogout(!logout);
  };
  const signout = () =>{
    localStorage.removeItem("user")
    localStorage.removeItem("userData")
    /* localStorage.clear(); */
    Navigate("/")

  }
  console.log(firstPageStatus)
  return (
   
      <div style={{ display: "flex",height:"100%" }}>
        <div className={`${collapse ? " sidebar1" : "sidebar"}`}>
          <div className="HPDSideBar">
            <img
              src={require("../../Img/HPDD.jpeg")}
              height="40px"
              width={"40px"}
            />
          </div>

          <Link
            to="servicerequest"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            <li
              style={
                display == "redbar1"
                  ? { fontWeight: "600" }
                  : { fontWeight: "300" }
              }
              className="firstli"
              onClick={() => setDisplay("redbar1")}
            >
              {" "}
              <img
                src={require("../../Img/sidebar1.png")}
                height="20px"
                width={"20px"}
              />{" "}
              Get a Quote{" "}
              <img
                src={require("../../Img/redbar.png")}
                height="50px"
                width={"10px"}
                className="redbar1"
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
              src={require("../../Img/sidebar2.png")}
              height="20px"
              width={"20px"}
            />{" "}
            My Quotes{" "}
            <img
              src={require("../../Img/redbar.png")}
              height="50px"
              width={"10px"}
              className="redbar2"
              style={
                display == "redbar2"
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
            />{" "}
          </li>
          <Link
            to="servicerequest"
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
              src={require("../../Img/sidebar3.png")}
              height="20px"
              width={"20px"}
            />{" "}
            My Service Requests{" "}
            <img
              src={require("../../Img/redbar.png")}
              height="50px"
              width={"10px"}
              className="redbar3"
              style={
                display == "redbar3"
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
            className="ellipse"
          />
        </div>

        <div style={{ width: "100%" }}>
          <div className={`${collapse ? "navbar1" : "navbar"}`}>
            <div>
              <img
                src={require("../../Img/toggleSideBar.png")}
                onClick={() => setCollapse(!collapse)}
                height="40px"
                width={"40px"}
                className="collapse-icon"
              />
           { !firstPageStatus? (/* {<Link 
                to="servicerequest"
                style={{ textDecoration: "none", color: "black" }} >} */
               <img
                src={require("../../Img/toggleback.png")}
                onClick={() => {window.history.back()}}
                height="40px"
                width={"40px"}
                className="collapse-left"
              /> /* </Link> */):null}

              <div style={{ float: "right", marginRight: "100px" }}>
                <img
                  src={require("../../Img/homeIcon.png")}
                  height="40px"
                  width={"40px"}
                  className="home-icon"
                  
                />
                <img
                  src={require("../../Img/bell.png")}
                  height="40px"
                  width={"40px"}
                  className="bell-icon"
                />

                <div className="name-icon">
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
                    className="account-icon"
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
 firstPageStatus:state.fpr.firstPageStatus
})

export default connect(mapStatetoProps)(Common);
