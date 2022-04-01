import React,{useState,useEffect} from 'react'
import axios from "axios";
import { connect } from 'react-redux';
import "./BusinessUser.css"
import { adminFirstPageAction } from '../../../Redux/AdminFirstPage/adminFirstPage.action';
import Modal from "react-modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import usePagination from "../../Pagination/Pagination";
import { Pagination } from "@mui/material";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";
import URL from "../../../GlobalUrl";
import globalAPI from "../../../GlobalApi";

import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {main:"#000000	"},
  },
});


function BusinessUser({adminFirstPageAction}) {
  const [businessUser, setBusinessUser] = useState([{
    business_admin_email:"sandeshadmin1@gmail.com",
    business_admin_mobile:"7123471234",
    business_admin_fullName:"Sandesh",
    business_admin_status:true,
    business_admin_password:""
  },{
    business_admin_email:"navinadmin2@gmail.com",
    business_admin_mobile:"8123481234",
    business_admin_fullName:"Navin",
    business_admin_status:false,
    business_admin_password:""
  }]);

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[mob,setMob] = useState("");

  const  [modifyUser, setModifyUser] = useState({})
  useEffect(()=>{
    adminFirstPageAction(true)
    fetchSeconddata();
 },[]);
 const [popup,setPop] = useState(false);
 const [popup1,setPop1] = useState(false);
 const [data, setData] = useState([]);
 let [page, setPage] = useState(1);
 const PER_PAGE = 10;
 const [count, setCount] = useState(1);
 const _DATA = usePagination(data, PER_PAGE);
 const [status, setStatus] = useState(1);
 const [loader, setLoader] = useState(false);
  const onPopup = () =>{
    setPop(!popup);
  }
  const onPopup1 = () =>{
    console.log(modifyUser)
    setPop1(!popup1);
    
  }

  useEffect(() =>{
    
  },[modifyUser])
 
  function fetchSeconddata() {
    const token = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    setLoader(true);
    axios
      .get(
        URL +
          globalAPI.accountlist +`?page=${page}&perPage=${PER_PAGE}&status=1,6&badm=1`,
        config
      )
      .then((response) => {
        setLoader(false);
        debugger
        if (response) {
          const res = response.data.data.data;
          setCount(response.data.total_pages);
          setData(res);
          debugger
        } else {
          toast.error('error');
        }
      })
      .catch((e) => {
        setLoader(false);
        toast.error("Something went wrong");
      });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const data = {
      email:email ,
      password:password,
      name: name,
      mobile:mob,
      admin: true,
      business_admin: true,
      status:3,
      business_registered_name:"customerDetails" ,
      business_trade_name:"ustomerDetails" ,
      business_type:"customerDetails" ,
      address_1:"customerDetails" ,
      address_2:"customerDetails" ,
      country:"customerDetails" ,
      city:"customerDetails" ,
      postcode:"12323" ,
    };
    axios
      .post(URL + globalAPI.register, data)
      .then((response) => {
        if (response.data.sucess) {
          setLoader(false);
          toast.success('Account Created Successfully');
          onPopup()
          fetchSeconddata();
        }
        else{
          toast.error(response.data.message);
        }
      })
      .catch((err) => {
        setLoader(false);
        toast.error("Something Went Wrong");
      });
     
  };
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const statusChange = (item,e) =>{
    e.preventDefault();
    setLoader(true);
    const token = JSON.parse(localStorage.getItem("user"));
    const data = {
      status:parseInt(e.target.value)
    };
    axios({
      method: "patch",
      url: URL + globalAPI.adminedituser + `?id=${item}`,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setLoader(false);
        const res = response.data;
        if (res.success) {
            fetchSeconddata();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch(() => {
        setLoader(false);
        toast.error("Something went wrong");
      });
  }

  const modifyUserdetails = (e) => {
    setModifyUser(state => ({...state,[e.target.name]:e.target.value}))
  }

  const statusChange1 = (e) =>{
    debugger
    e.preventDefault();
    setLoader(true);
    const token = JSON.parse(localStorage.getItem("user"));
   /*  const data = {
      status:parseInt(e.target.value)
    }; */
    axios({
      method: "patch",
      url: URL + globalAPI.adminedituser + `?id=${modifyUser._id}`,
      data: modifyUser,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setLoader(false);
        const res = response.data;
        if (res.success) {
            fetchSeconddata();
            onPopup1()
            toast.success("Data Updated Succesfully")
        } else {
          toast.error(res.data.message);
        }
      })
      .catch(() => {
        setLoader(false);
        toast.error("Something went wrong");
      });
  }

  return (
    <div className="bucontainer">
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <h1 className="butitle">Business Users</h1>
      <hr className=" bucontainerhr" />
      <div style={{ marginTop: "50px" }}>
        <table className="butable">
          <thead className="buhead">
            <td className="buiemail">Email</td>{" "}
            <td className="buname">Full Name</td>{" "}
            <td className="bunumber">Mobile Number</td>{" "}
            <td className="bustatus">Status</td>
          </thead>
          {
            <tbody>
              {_DATA.currentData() ?
                _DATA.currentData().map((item) => {
                  return (
                    <tr className="butr"  key={item.business_admin_email} >
                      <td className="buadminemailData" onClick={() => {setModifyUser(item);onPopup1()}}  >
                        {item.email}
                      </td>{" "}
                      <td className="bunameData" onClick={() => {setModifyUser(item);onPopup1()}} >
                        {item.name}
                      </td>
                      <td className="bunumberData" onClick={() => {setModifyUser(item);onPopup1()}} >
                        {item.mobile}
                      </td>
                      <td className="bustatusdata"  >
                        <select className="buselecttag" onChange={(e)=>statusChange(item._id,e)}>
                          <option
                            className="buoption1"
                            selected={
                              item.status == 3 ? true : false
                            }
                            value="3"
                          >
                            Active
                          </option>
                          <option
                            className="buoption2"
                            selected={
                              item.status == 6 ? true : false
                            }
                            value="6"
                          >
                            Inactive
                          </option>
                        </select>{" "}
                        <img
                          className="budropdownimg"
                          src={require("../../../Img/adminDropdown.png")}
                        />
                      </td>
                    </tr>
                  );
                }):<div>No Business User exist</div>}
            </tbody>
          }
        </table>
        {_DATA.currentData().length == 0 && (
            <h4
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              No  matching records found
            </h4>
          )}

        
      </div>
      {_DATA.currentData().length >= 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
             <ThemeProvider theme={theme}>
              <Pagination
                className="pagination"
                count={count}
                page={page}
               /*  variant="outlined" */
                onChange={handleChange}
                color="primary"
              />
            </ThemeProvider>
          </div>
        )}

      <button className="bubtn" onClick={()=>onPopup()}>Create Business User</button>
      <Modal
        isOpen={popup}
        className="bausermodal"
        overlayClassName="bauseroverlay"
        closeTimeoutMS={500}
      >
        <div>
          <div className="bauserdialogclose">
            <IconButton onClick={()=>onPopup()}>
              <CloseIcon sx={{ color: "black" }}></CloseIcon>
            </IconButton>
          </div>
          <div className="bauserdialog-row1">
            <h5 style={{ fontSize: "22px", margin: "5px 0 0 0" }}>
              New Business User
            </h5>
            <hr className="clhrFirst" />
          </div>
          <div className="bauserdialog-row2">
            <div>
              <div style={{ display: "inline-block" }}>
                <input
                  type="text"
                  className="bainput"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                />
                <label className="bainput-label">Full Name</label>
              </div>
              <input
                type="text"
                className="ba2input"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
              <label className="ba2input-label">Email</label>
            </div>
            <div>
              <div style={{ display: "inline-block" }}>
                <input
                  type="text"
                  className="bainput"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                />
                <label className="bainput-label">Password</label>
              </div>
              <input
                type="text"
                className="ba2input"
                value={mob}
                onChange={(e)=>setMob(e.target.value)}
                required
              />
              <label className="ba2input-label">Mobile No</label>
            </div>
            {/* <div>
              <div style={{ display: "inline-block" }}>
                <input
                  type="text"
                  className="bainput"
                  value={""}
                  onChange={""}
                  required
                />
                <label className="bainput-label">Status</label>
              </div>
            </div> */}
            <div style={{ marginTop: "10px" }}>
              <button className="submitbtn" onClick={handleSubmit}>
                Submit
              </button>
              <button className="closebtn" onClick={()=>onPopup()}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={popup1}
        className="bausermodal"
        overlayClassName="bauseroverlay"
        closeTimeoutMS={500}
      >
        <div>
          <div className="bauserdialogclose">
            <IconButton onClick={()=>onPopup1()}>
              <CloseIcon sx={{ color: "black" }}></CloseIcon>
            </IconButton>
          </div>
          <div className="bauserdialog-row1">
            <h5 style={{ fontSize: "22px", margin: "5px 0 0 0" }}>
            Update Business User details
            </h5>
            <hr className="clhrFirst" />
          </div>
          <div className="bauserdialog-row2">
            <div>
              <div style={{ display: "inline-block" }}>
                <input
                  type="text"
                  className="bainput"
                  value={modifyUser.name}
                  onChange={modifyUserdetails}
                  name="name"
                  required
                />
                <label className="bainput-label">Full Name</label>
              </div>
              <input
                type="text"
                className="ba2input"
                value={modifyUser.email}
                onChange={modifyUserdetails}
                name="email"
                required
              />
              <label className="ba2input-label">Email</label>
            </div>
            <div>
              <div style={{ display: "inline-block" }}>
                <input
                  type="text"
                  className="bainput"
                  value={modifyUser.password}
                  onChange={modifyUserdetails}
                  name="password"
                  required
                />
                <label className="bainput-label">Password</label>
              </div>
              <input
                type="number"
                className="ba2input"
                value={modifyUser.mobile}
                onChange={modifyUserdetails}
                name="mobile"
                required
              />
              <label className="ba2input-label">Mobile No</label>
            </div>
          {/*   <div>
              <div style={{ display: "inline-block" }}>
                <input
                  type="text"
                  className="bainput"
                  value={modifyUser.business_admin_status}
                  onChange={""}
                  required
                />
                <label className="bainput-label">Status</label>
              </div>
            </div> */}
            <div style={{ marginTop: "20px" }}>
              <button className="submitbtn" onClick={statusChange1}>
                Submit
              </button>
              <button className="closebtn" onClick={()=>onPopup1()}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  adminFirstPageAction:(value) => dispatch(adminFirstPageAction(value))
})

export default connect(null,mapDispatchToProps)(BusinessUser);
