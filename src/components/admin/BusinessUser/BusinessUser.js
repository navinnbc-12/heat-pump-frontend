import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux';
import "./BusinessUser.css"
import { adminFirstPageAction } from '../../../Redux/AdminFirstPage/adminFirstPage.action';
import Modal from "react-modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
  const  [modifyUser, setModifyUser] = useState({})
  useEffect(()=>{
    adminFirstPageAction(true)
 },[]);
 const [popup,setPop] = useState(false);
 const [popup1,setPop1] = useState(false);

  const onPopup = () =>{
    setPop(!popup);
  }
  const onPopup1 = () =>{
    setPop1(!popup1);
  }


  useEffect(() =>{
    
  },[modifyUser])
  return (
    <div className="bucontainer">
      <h1 className="butitle">Business Users</h1>
      <hr className=" bucontainerhr" />
      <div style={{ marginTop: "50px" }}>
        <table className="butable">
          <thead className="buhead">
            <td className="buiemail">Email</td>{" "}
            <td className="buname">Full Name</td>{" "}
            <td className='bupassword' > Password </td>
            <td className="bunumber">Mobile Number</td>{" "}
            <td className="bustatus">Status</td>
          </thead>
          {
            <tbody>
              {businessUser ?
                businessUser.map((item) => {
                  return (
                    <tr className="butr"  key={item.business_admin_email} >
                      <td className="buadminemailData" onClick={() => {setModifyUser(item);onPopup1()}}  >
                        {item.business_admin_email}
                      </td>{" "}
                      <td className="bunameData" onClick={() => {setModifyUser(item);onPopup1()}} >
                        {item.business_admin_fullName}
                      </td>
                      <td className="buPasswordData" onClick={() => {setModifyUser(item);onPopup1()}} >
                        {item.business_admin_password}
                      </td>
                      <td className="bunumberData" onClick={() => {setModifyUser(item);onPopup1()}} >
                        {item.business_admin_mobile}
                      </td>
                      <td className="bustatusdata"  >
                        <select className="buselecttag">
                          <option
                            className="buoption1"
                            selected={
                              item.business_admin_status == true ? true : false
                            }
                            value=""
                          >
                            Active
                          </option>
                          <option
                            className="buoption2"
                            selected={
                              item.business_admin_status == false ? true : false
                            }
                            value=""
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
      </div>
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
                  value={""}
                  onChange={""}
                  required
                />
                <label className="bainput-label">Full Name</label>
              </div>
              <input
                type="text"
                className="ba2input"
                value={""}
                onChange={""}
                required
              />
              <label className="ba2input-label">Email</label>
            </div>
            <div>
              <div style={{ display: "inline-block" }}>
                <input
                  type="text"
                  className="bainput"
                  value={""}
                  onChange={""}
                  required
                />
                <label className="bainput-label">Password</label>
              </div>
              <input
                type="text"
                className="ba2input"
                value={""}
                onChange={""}
                required
              />
              <label className="ba2input-label">Mobile No</label>
            </div>
            <div>
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
            </div>
            <div style={{ marginTop: "10px" }}>
              <button className="submitbtn" onClick={""}>
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
              Modify Business User
            </h5>
            <hr className="clhrFirst" />
          </div>
          <div className="bauserdialog-row2">
            <div>
              <div style={{ display: "inline-block" }}>
                <input
                  type="text"
                  className="bainput"
                  value={modifyUser.business_admin_fullName}
                  onChange={""}
                  required
                />
                <label className="bainput-label">Full Name</label>
              </div>
              <input
                type="text"
                className="ba2input"
                value={modifyUser.business_admin_email}
                onChange={""}
                required
              />
              <label className="ba2input-label">Email</label>
            </div>
            <div>
              <div style={{ display: "inline-block" }}>
                <input
                  type="text"
                  className="bainput"
                  value={modifyUser.business_admin_password}
                  onChange={""}
                  required
                />
                <label className="bainput-label">Password</label>
              </div>
              <input
                type="text"
                className="ba2input"
                value={modifyUser.business_admin_mobile}
                onChange={""}
                required
              />
              <label className="ba2input-label">Mobile No</label>
            </div>
            <div>
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
            </div>
            <div style={{ marginTop: "10px" }}>
              <button className="submitbtn" onClick={""}>
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
