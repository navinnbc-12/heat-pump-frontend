import "./Login.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast} from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import URL from "../../../GlobalUrl";
import globalAPI from "../../../GlobalApi";
import validator from 'validator'


const passwords = {
  value: "",
  type: "password",
  showpassword: false,
};

const Login = () => {
  const [password, setPassword] = useState(passwords);
  const [emailValue, setEmailValue] = useState("");
  const [remember, setRemember] = useState(false);
  const [visibility, setVisibility] = useState("hidden");

  const [inputLogin1Error, setInputLogin1Error] = useState("")

  const [inputLogin2Error, setInputLogin2Error] = useState("")

  const [loader, setLoader] = useState(false);
  const [color, setColor] = useState("#a4a4a4");

  const navigate = useNavigate();

  const togglePassword = () => {
    if (password.showpassword) {
      setPassword((state) => ({
        ...state,
        type: "password",
        showpassword: false,
      }));
    } else {
      setPassword((state) => ({ ...state, type: "text", showpassword: true }));
    }
  };

  const changeHandler = (e) => {
    setInputLogin1Error("");
    setInputLogin2Error("");
    if (e.target.name === "password") {
      setPassword((state) => ({ ...state, value: e.target.value }));
    } else if (e.target.name === "email") {
      setEmailValue(e.target.value);
    }
  };

  const blurFunc = () => {
   
    if(emailValue == ""){
     
      return false;
    }
    if (!validator.isEmail(emailValue)) {
      setInputLogin1Error("Please enter valid Email");
      return false;
    }
 
  }

  const blurFunc1 = () => {
    if(password.value == ""){
      
      return false;
    }
    if (!validator.isLength(password.value,{min:8,max:undefined})) {
     setInputLogin2Error("Must be at least 8 characters");
      return false;
    }
  }

  const handleLogin = (e) => {
    debugger
    e.preventDefault();
    if (!validator.isEmail(emailValue)) {
      setInputLogin1Error("Please enter valid Email");
      /* return false; */
    }
    if(emailValue == ""){
      setInputLogin1Error("Email Address cannot be Empty");
      /* return false; */
    }
    if (!validator.isLength(password.value,{min:8,max:undefined})) {
      setInputLogin2Error("Must be at least 8 characters");
       return false;
     }
  
    if(password.value == ""){
      setInputLogin2Error("Password cannot be Empty");
      /* return false; */
    }
    
    if (emailValue !== "" && password.value !== "" && !loader) {
      debugger
      setLoader(true);
      const data = {
        email: emailValue,
        password: password.value,
      };
      axios
        .post(URL + globalAPI.login, data)
        .then((response) => {
          const res =response.data
          console.log(res);
          if (res.sucess) {
            localStorage.setItem("userData", JSON.stringify(res.data));
            localStorage.setItem("user", JSON.stringify(res.data.token));
            setLoader(false);
            if(res.data.admin){
              navigate('/admincommon/accountrequest')
              return
            }
            navigate('/common/servicerequest');
          }
          else{
            setLoader(false);
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          setLoader(false);
          toast.error("Something Went Wrong");
        });
    } else {
    }
  };

  /* useEffect(() => {
    console.log(emailValue);
  }, [emailValue]); */

  return (
    <div>
      {loader && (
        <div className="customLoader">
          <TailSpin color="#Fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="-Login">
        <div className="firstHalf">
          <div className="HPD-Existing-Logo---01-1">
            <img
              src={require("../../../Img/HPDD.jpeg")}
              height="50px"
              width={"50px"}
              className="HBD"
            />
          </div>
          <div className="Login">Login</div> 
          
          <form action=""  >
          <div style={{position:"relative"}} >
            <input
              type="text"
              className="email "
              value={emailValue}
              onChange={changeHandler}
              name="email"
              required
              onBlur={blurFunc}
              
            />
            
            <img
              src={require("../../../Img/icon.png")}
              height="12px"
              width={"16px"}
              alt=""
              className="emailIcon"
             
            />
            <label className="email-label" >Email Address </label> <span className='inputLogin1Error inputLoginError' >{inputLogin1Error}</span>
            <span style={{ visibility: `${visibility}` }} className="loginspan2">
            Both passwords should match
            </span>
            </div>
            <div style={{position:"relative"}} >
            <input
              type={password.type}
              value={password.value}
              onChange={changeHandler}
              className="password"
              name="password"
              required
              onBlur={blurFunc1}
            />
            <img
              src={require("../../../Img/icon2.png")}
              alt=""
              className="passwordIcon"
            />
            {password.showpassword ? (
              <img
                src={require("../../../Img/iconEyeOpen.png")}
                alt=""
                className="eyeIconOpen"
                onClick={togglePassword}
              />
            ) : (
              <img
                src={require("../../../Img/icon3.png")}
                alt=""
                className="eyeIcon"
                onClick={togglePassword}
              />
            )}
            <label className="password-label" >Password</label> <span className='inputLogin2Error inputLoginError' >{inputLogin2Error}</span>
            <span className="loginspan1" style={{ color: `${color}` }}>
              Must be at least 8 characters
            </span>
            </div>
            <div className="icontick">
              {remember ? (
                <div
                  style={{
                    border: "2px solid black",
                    display: "inline-block",
                    height: "12px",
                    width: "12px",
                  }}
                  onClick={() => setRemember(false)}
                />
              ) : (
                <img
                  src={require("../../../Img/icontick.png")}
                  height="12px"
                  width={"12px"}
                  alt=""
                  onClick={() => setRemember(true)}
                />
              )}
              <span style={{}} className="remember">
                Remember me
              </span>
              <Link to="/forgotpassword">
                <span className="Forgot-password">Forgot password?</span>{" "}
              </Link>
            </div>

            <button className="login-button" onClick={(e) => handleLogin(e)}>
              Login
            </button>
          </form>

          <div style={{ margin: "22px 0px 0px 165px" }}>
            <span
              class="Dont-have-an-account-Sign-Up"
              style={{ fontWeight: "600" }}
            >
              Don’t have an account?
              <Link
                to="/signup"
                style={{ color: "#fa5e00", marginLeft: "2px" }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    color: "#fa5e00",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Sign-Up
                </span>{" "}
              </Link>
            </span>
          </div>

          <div
            style={{
              margin: "30px 0px 0px 185px",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            <span>By continuing, you agree to our</span>
          </div>

          <div className="terms-policies">
            <span style={{ fontWeight: "300" }}>Terms of Service</span>
            <span style={{ marginLeft: "5px", fontWeight: "300" }}>
              Privacy Policy
            </span>
          </div>
        </div>
        <div class="Rectangle-2">
          {" "}
          <img
            src={require("../../../Img/couple1.png")}
            className="couple1Img"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
