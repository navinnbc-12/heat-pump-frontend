import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminServiceList.css";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import URL from "../../../GlobalUrl";
import globalAPI from "../../../GlobalApi";
import {TailSpin} from "react-loader-spinner";
import usePagination from "../../Pagination/Pagination";
import moment from "moment";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { connect } from "react-redux";
import { adminFirstPageAction } from "../../../Redux/AdminFirstPage/adminFirstPage.action";


const theme = createTheme({
  palette: {
    primary: {main:"#000000	"},
  },
});

const AdminServiceList = ({adminFirstPageAction}) => {
  // const list = [
  //   {
  //     priority: "H",
  //     srno: "SR12345678",
  //     title: "heat pump",
  //     site_details: "7 covaburn avenue,hamilton ML3 7TR",
  //     sr_type: "SR Type",
  //     time: "10/11/2021 05:00 PM",
  //     status: "luthus working",
  //   },
  //   {
  //     priority: "H",
  //     srno: "SR12345678",
  //     title: "heat pump",
  //     site_details: "7 covaburn avenue,hamilton ML3 7TR",
  //     sr_type: "SR Type",
  //     time: "10/11/2021 05:00 PM",
  //     status: "luthus working",
  //   },
  //   {
  //     priority: "H",
  //     srno: "SR12345678",
  //     title: "heat pump",
  //     site_details: "7 covaburn avenue,hamilton ML3 7TR",
  //     sr_type: "SR Type",
  //     time: "10/11/2021 05:00 PM",
  //     status: "luthus working",
  //   },
  //   {
  //     priority: "H",
  //     srno: "SR12345678",
  //     title: "heat pump",
  //     site_details: "7 covaburn avenue,hamilton ML3 7TR",
  //     sr_type: "NR Type",
  //     time: "10/11/2021 05:00 PM",
  //     status: "luthus working",
  //   },
  //   {
  //     priority: "H",
  //     srno: "SR12345678",
  //     title: "heat pump",
  //     site_details: "7 covaburn avenue,hamilton ML3 7TR",
  //     sr_type: "NR Type",
  //     time: "10/11/2021 05:00 PM",
  //     status: "luthus working",
  //   },
  //   {
  //     priority: "H",
  //     srno: "SR12345678",
  //     title: "heat pump",
  //     site_details: "7 covaburn avenue,hamilton ML3 7TR",
  //     sr_type: "NR Type",
  //     time: "10/11/2021 05:00 PM",
  //     status: "luthus working",
  //   },
  // ];
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [serviceno, setServiceno] = useState("");
  const [customerName, setCustomerName] = useState("")
  const [title, setTitle] = useState("");
  const [updated, setUpdated] = useState("");
  const [priority, setPriority] = useState("");
  const [box, setBox] = useState([]);
  const [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const [count, setCount] = useState(1);
  const _DATA = usePagination(data, PER_PAGE);
  const [status, setStatus] = useState(1);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userName = userData.name;
 
  useEffect(()=>{
    adminFirstPageAction(true)
 },[])

  useEffect(() => {
    fetchData();
    fetchSeconddata();
  }, [page,status]);

  function fetchData() {
    const token = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    setLoader(true);
    axios
      .get(URL + globalAPI.adminstatus, config)
      .then((response) => {
        setLoader(false);
        const res = response.data;
        setBox(res.data);
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
    debugger
    axios
      .get(
        URL +
          globalAPI.adminreq +
          `?page=${page}&perPage=${PER_PAGE}&status=${status}`,
        config
      )
      .then((response) => {
        setLoader(false);
        if (response.data.success) {
          const res = response.data.data;
          setCount(res.total_pages);
          setData(res.data);
          
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((e) => {
        setLoader(false);
        toast.error("Something went wrong");
      });
     
  }
 
  const manageService = (item) => {
    navigate("/admincommon/adminmsr", { state: item });
  };
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  console.log('data:-' ,data)
  return (
    <div className="adminslcontainer">
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="adminsltitle">My Service Requests</div>
      <hr className="adminslcontainerhr" />
      <div className="adminslpaper">
       {/*  <div className="adminslfirstrow">
          <div className="adminslnames">{userName}</div>
          <div style={{ fontSize: "small" }}>Heat Pump Scotland,Glasgow</div>
          <hr className="adminslhrFirst" />
        </div> */}

        <div className="adminslsecondrow">
          <div className="adminslouterbox">
            <div className="adminslsquarebox" onClick={()=>setStatus(1)}>
              <h1>{box.new}</h1>
            </div>
            <div className="adminslsecond-row-text">New</div>
          </div>
          <div className="adminslouterbox">
            <div className="adminslsquarebox" onClick={()=>setStatus(2)}>
              <h1>{box.working}</h1>
            </div>
            <div className="adminslsecond-row-text">Luths Working</div>
          </div>
          <div className="adminslouterbox">
            <div className="adminslsquarebox" onClick={()=>setStatus(3)}>
              <h1>{box.need_attention}</h1>
            </div>
            <div className="adminslsecond-row-text">Need Your Attention</div>
          </div>
          <div className="adminslouterbox">
            <div className="adminslsquarebox" onClick={()=>setStatus(4)}>
              <h1>{box.closed}</h1>
            </div>
            <div className="adminslsecond-row-text">Closed</div>
          </div>
        </div>
        <div className="adminslthird-row">
          <div className="adminslsearch-by">Search By</div>
          <div
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <select
              className=" adminslselect-box adminslbox1"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="one">High</option>
              <option value="two">Medium</option>
              <option value="three">Low</option>
            </select>
            <input
              className="  adminslselect-box adminslbox1"
              type="text"
              placeholder="Service Request No"
              value={serviceno}
              onChange={(e) => setServiceno(e.target.value)}
            />
              <input
              className="  adminslselect-box adminslbox1"
              type="text"
              placeholder="Customer Name"
              value={serviceno}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
              className="  adminslselect-box adminslbox1"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <select
              className="  adminslselect-box adminslbox1"
              value={updated}
              onChange={(e) => setUpdated(e.target.value)}
            >
              <option value="one">one</option>
              <option value="two">two</option>
              <option value="three">three</option>
            </select>
          </div>
        </div>
        <div className="adminslfourth-row">
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            Service Requests List
          </div>
          <hr className="adminslhrFirst" />
          <table className="adminsltable" >
            <thead>
              <tr className="adminsltr"
              >
                <th className="adminslth" style={{width:"90px"}}>Priority</th>
                <th className="adminslth" style={{width:"140px"}}>SR No.</th>
                <th className="adminslth" scope="col" style={{width:"290px"}}>Title</th>
                <th className="adminslth" scope="col" style={{ width: "220px" }}>
                  Site Details
                </th>
                <th className="adminslth" scope="col"style={{width:"160px"}}>SR Type</th>
                <th className="adminslth" scope="col" style={{width:"170px"}}>
                  Last Updated
                  <br />
                  Date & Time
                </th>
                <th className="adminslth" scope="col" style={{width:"135px"}}>Status</th>
              </tr>
            </thead>
            <tbody className="adminslsortable">
              {_DATA.currentData().map((item, index) => {
                return (
                  <tr
                    onClick={() => manageService(item)}
                    key={index}
                    style={{ borderBottom: "solid 1px #d3d3d3", }}
                    className="adminsltr"
                  >
                    {item.priority == 1 && (
                      <td style={{paddingLeft:"10px"}} className="adminsltd" >
                        {" "}
                        <div className="adminslhroundcircle">H</div>{" "}
                      </td>
                    )}
                    {item.priority == 2 && (
                      <td style={{paddingLeft:"10px"}} className="adminsltd" >
                        {" "}
                        <div className="adminslmroundcircle">M</div>{" "}
                      </td>
                    )}
                    {item.priority == 3 && (
                      <td style={{paddingLeft:"10px"}} className="adminsltd"  >
                        {" "}
                        <div className="adminsllroundcircle">L</div>{" "}
                      </td>
                    )}
                    <td className="adminsltd" >{item.service_ref_number}</td>
                    <td className="adminsltd" >{item.title}</td>
                    <td className="adminsltd" >{item.job_reference_id?item.job_reference_id.site_details:"-"}</td>
                    <td className="adminsltd" >{item.type?item.type:"-"}</td>
                    <td className="adminsltd" >{moment(item.updatedAt).format('DD/MM/YYYY h:mm a')}</td>
                    {/* <td>{item.status}</td> */}
                    {item.status == 1 && <td>New</td>}
                    {item.status == 2 && <td>Luths Working</td>}
                    {item.status == 3 && <td>Need Your Attention</td>}
                    {item.status == 4 && <td>Resolved</td>}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* {_DATA.currentData().length >= 3 && <hr className="hrfourth" />} */}
          {_DATA.currentData().length <= 0 && (
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
        <button
          className="adminslbtnjob"
          onClick={(e) => navigate("/common/createlist")}
        >
          Create a Service Request
        </button>
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  adminFirstPageAction:value => dispatch(adminFirstPageAction(value))
})

export default connect(null,mapDispatchToProps)(AdminServiceList);


