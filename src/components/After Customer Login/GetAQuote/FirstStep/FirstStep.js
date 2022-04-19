import React, { useState, useEffect } from "react";
import "./FirstStep.css";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import URL from "../../../../GlobalUrl";
import globalAPI from "../../../../GlobalApi";

const fileTypes = ["PDF", "PNG", "JPEG"];

const FirstStep = () => {
  const [plans, setPlans] = useState([]);
  const [loader, setLoader] = useState(false);
  const token = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="s1Paper">
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="s1text1">
        Step 1 of 9
        <img src={require("../../../../Img/step1.png")} className="s1baricon" />
      </div>

      <h4 style={{ fontSize: "1.2vw", marginTop: "10vh" }}>Site Details</h4>
    </div>
  );
};

export default FirstStep;
