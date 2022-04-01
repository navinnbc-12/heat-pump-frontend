import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from 'react';


import Login from "./components/Before Customer Login/Login/Login";
import RequestACustomerAccount from "./components/Before Customer Login/RequestACustomerAccount/RequestACustomerAccount";
import RCA1 from "./components/Before Customer Login/RCA1/RCA1";
import RCA2 from "./components/Before Customer Login/RCA2/RCA2";
import RCA3 from "./components/Before Customer Login/RCA3/RCA3";
import ForgotPassword from "./components/Before Customer Login/ForgotPassword/ForgotPassword";
import OTP from "./components/Before Customer Login/OTP/OTP";
import NewPassword from "./components/Before Customer Login/NewPassword/NewPassword";


import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import ServiceList from "./components/After Customer Login/ServiceList/ServiceList";
import CreateList from "./components/After Customer Login/CreateList/CreateList";

import ManageServiceRequest from "./components/After Customer Login/ManageServiceRequest/ManageServiceRequest";

import AccountRequest from "./components/admin/account requests/AccountRequest";

import Common from "./components/common/Common";
import AdminCommon from "./components/adminCommon/AdminCommon";
import AdminRCA from "./components/admin/AdminRCA/AdminRCA";
import AdminManageService from "./components/admin/AdminManageServiceRequest/AdminManageService";
import AdminServiceList from "./components/admin/AdminServiceList/AdminServiceList";

import { Navigate } from "react-router-dom";

import NoPage from "./components/PageNotFound/NoPage";

import {Dropdown }from "./components/Dropdown/Dropdown.js"
import BusinessUser from "./components/admin/BusinessUser/BusinessUser";



function App({ name, changeName, addName }) {

  return (
    <div className="App">
      <BrowserRouter>
      <PriorityComponent/>
      </BrowserRouter>
      
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable={false}
        pauseOnHover
      />
    </div>
  );
}

function PriorityComponent() {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("user"));
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData)
  console.log(window.location.pathname)

  useEffect(() => {
    if(window.location.pathname == "/common"){
      
      console.log(window.location.pathname)
      navigate("/common/servicerequest")
  }
  if(window.location.pathname == "/admincommon"){
      
    console.log(window.location.pathname)
    navigate("/admincommon/accountrequest")
}

  }, [])
  

 
  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={(!token)?<Login/>:(userData.admin)?<Navigate to = "/admincommon/accountrequest"/>:<Navigate to = "/common/servicerequest"/>} />
          <Route path="/signup" element={(!token)?<RequestACustomerAccount />:(userData.admin)?<Navigate to = "/admincommon/accountrequest"/>:<Navigate to = "/common/servicerequest"/>} />
          <Route path="/rca1" element={(!token)?<RCA1 />:(userData.admin)?<Navigate to = "/admincommon/accountrequest"/>:<Navigate to = "/common/servicerequest"/>} />
          <Route path="/rca2" element={(!token)?<RCA2 />:(userData.admin)?<Navigate to = "/admincommon/accountrequest"/>:<Navigate to = "/common/servicerequest"/>} />
          <Route path="/rca3" element={(!token)?<RCA3 />:(userData.admin)?<Navigate to = "/admincommon/accountrequest"/>:<Navigate to = "/common/servicerequest"/>} />
          <Route path="/forgotpassword" element={(!token)?<ForgotPassword />:(userData.admin)?<Navigate to = "/admincommon/accountrequest"/>:<Navigate to = "/common/servicerequest"/>} />
          <Route path="/otp" element={(!token)?<OTP />:(userData.admin)?<Navigate to = "/admincommon/accountrequest"/>:<Navigate to = "/common/servicerequest"/>} />
          <Route path="/newpassword" element={(!token)?<NewPassword />:(userData.admin)?<Navigate to = "/admincommon/accountrequest"/>:<Navigate to = "/common/servicerequest"/>} />
        
          {userData&&!userData.admin&&<Route path={"/common"} element={<Common/>}>
              <Route path = "createlist" element={<CreateList/>}/>
              <Route path="servicerequest" element={<ServiceList />} />
             {/*  <Route path="createservice" element={<CreateListSubmitted />} /> */}
              <Route path="manageservice" element={<ManageServiceRequest />} />
              <Route path="accountrequest" element={<AccountRequest />} />
          </Route>}

          {userData&&userData.admin&&<Route path="/admincommon" element={<AdminCommon/>} >
              <Route path="accountrequest" element={<AccountRequest />} />
              <Route path="adminRCA" element={<AdminRCA/>} />
              <Route path="adminmsr" element={<AdminManageService/>} />
              <Route path="adminsrl" element={<AdminServiceList/>} />
              <Route path="businessuser" element={<BusinessUser/>} />

          </Route>}
          

          <Route path="*" element={<NoPage/>}/>
          <Route path="/dropdown" element={<Dropdown/>}/>

        </Routes>
        



    </div>
  );
}






































const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

