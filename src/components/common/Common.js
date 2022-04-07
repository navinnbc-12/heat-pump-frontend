import React, { useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

import Modal from "react-modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router-dom";


import "./Common.css";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";



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
  
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
   
      <div style={{ display: "flex",height:"100%" }}>
        <div className={`${collapse ? " sidebar1" : "sidebar"}`}>
          <div   className="HPDSideBar" >
            <img
              src={require("../../Img/HPDD.jpeg")}
              /* height="40px"
              width={"40px"} */
             style={{height:"6.5vh"}}
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
              className="firstli li"
              onClick={() => setDisplay("redbar1")}
            >
              {" "}
              <img
                src={require("../../Img/sidebar1.png")}
             
                className="sidbar-icon"
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
            className="myquotes-text li"
          >
            {" "}
            <img
              src={require("../../Img/sidebar2.png")}
              className="sidbar-icon"
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
            className="my-servicerequest li"
          >
            {" "}
            <img
              src={require("../../Img/sidebar3.png")}
              className="sidbar-icon"
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
           /*  height="360px"
            width={"250px"} */
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
                className="collapse-icon"
              />
           { !firstPageStatus? (/* {<Link 
                to="servicerequest"
                style={{ textDecoration: "none", color: "black" }} >} */
               <img
                src={require("../../Img/toggleback.png")}
                onClick={() => {window.history.back()}}
                className="collapse-left"
              /> ):null}

              <div style={{ float: "right", marginRight: "6.11vw" }}>
                <img
                  src={require("../../Img/homeIcon.png")}
                
                  className="home-icon"
                  
                />
                <img
                  src={require("../../Img/bell.png")}
                
                  className="bell-icon"
                />

                <div className="name-icon">
                <span
                    style={{
                      position: "relative",
                      // bottom: "2vh",
                      top:"2.4vh",
                      left: "4.55vw",
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize:"1vw"
                    }}
                  >
                    {userInfo.name}
                  </span>
                  <div>
                  <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    style={{
                      width: "3.25vw",
                      height: "6.71vh",
                      marginLeft: "7.81vw",
                      position: "relative",
                      bottom: "2vh",
                      display: "inline-block",
                      left:"3vw",
                    }}
                    size="small"
                  >
                    <img
                      src={require("../../Img/account.png")}
                      className="account-icon"
                    />
                  </Button>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left top"
                              : "left bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >
                              <MenuItem onClick={handleClose}>Profile</MenuItem>
                              <MenuItem onClick={handleClose}>
                                My account
                              </MenuItem>
                              <MenuItem onClick={() => toggleModal()}>
                                Logout
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
                  
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
              <h5 style={{ fontSize: "1.43vw", margin: "0.67vh 0 0 0" }}>
                Are you sure you want to logout?
              </h5>
            </div>
            <div className="log-row2">
              <div style={{ marginTop: "1.6vh" }}>
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
