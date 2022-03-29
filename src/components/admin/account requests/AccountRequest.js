import React, { useState,useEffect } from "react";
import axios from "axios";
import "./AccountRequest.css";
import usePagination from "../../Pagination/Pagination";
import { Pagination } from "@mui/material";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";
import URL from "../../../GlobalUrl";
import globalAPI from "../../../GlobalApi";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { connect } from "react-redux";
import { adminFirstPageAction } from "../../../Redux/AdminFirstPage/adminFirstPage.action";

const theme = createTheme({
  palette: {
    primary: {main:"#000000	"},
  },
});

const AccountRequest = ({adminFirstPageAction}) => {
  // const list = [
  //   {
  //     customer_name: "Joe Bloggs",
  //     mobile_no: "9787668994",
  //     email: "joe@gmail.com",
  //     business_name: "Heat Pump Scotland,Glasgow",
  //     time: "10/11/2021 05:00 PM",
  //     status: "In Progress",
  //   },
  //   {
  //     customer_name: "Joe Bloggs",
  //     mobile_no: "9787668994",
  //     email: "joe@gmail.com",
  //     business_name: "Heat Pump Scotland,Glasgow",
  //     time: "10/11/2021 05:00 PM",
  //     status: "In Progress",
  //   },
  //   {
  //     customer_name: "Joe Bloggs",
  //     mobile_no: "9787668994",
  //     email: "joe@gmail.com",
  //     business_name: "Heat Pump Scotland,Glasgow",
  //     time: "10/11/2021 05:00 PM",
  //     status: "In Progress",
  //   },
  // ];
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [box, setBox] = useState([]);
  const [search, setSearch] = useState("");
  const [mobno, setMobno] = useState("");
  const [business, setBusiness] = useState("");
  const [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const [count, setCount] = useState(1);
  const _DATA = usePagination(data, PER_PAGE);
  const [status, setStatus] = useState(1);


  useEffect(() => {
    fetchData();
    fetchSeconddata();
  }, [page,status]);

  useEffect(()=>{
     adminFirstPageAction(true)
  },[])

  function fetchData() {
    const token = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    setLoader(true);
    axios
      .get(URL + globalAPI.accountstatus, config)
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
    axios
      .get(
        URL +
          globalAPI.accountlist +
          `?page=${page}&perPage=${PER_PAGE}&status=${status}&bn=${business}&mno=${mobno}`,
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
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const manageService = (item) => {
    navigate("/admincommon/adminRCA", {state:item});
  };
  return (
    <div className="container">
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="title">Customer Account Requests</div>
      <hr className="containerhr" />
      <div className="paper">
        <div className="secondrow">
          <div className="outerbox" onClick={()=>{setStatus(1);setPage(1)}} >
            <div className="squarebox" >
              <h1>{box.new?box.new:0}</h1>
            </div>
            <div className="second-row-text">New</div>
          </div>
          <div className="outerbox" onClick={()=>{setStatus(2);setPage(1)}} >
            <div className="squarebox" >
              <h1>{box.inprogress?box.inprogress:0}</h1>
            </div>
            <div className="second-row-text">Inprogress</div>
          </div>
          <div className="outerbox" onClick={()=>{setStatus(3);setPage(1)}} >
            <div className="squarebox" >
              <h1>{box.active?box.active:0}</h1>
            </div>
            <div className="second-row-text">Active</div>
          </div>
        </div>
        <div className="third-row">
          <div className="search-by">Search By</div>
          <div
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <select
              className="select-box box1"
              value={status}
              onChange={(e) => {setStatus(e.target.value)}}
            >
              <option value="" defaultValue hidden disabled>
                Status
              </option>
              <option value="1">New</option>
              <option value="2">Inprogress</option>
              <option value="3">Active</option>
            </select>
            <input
              className="select-box box1"
              value={mobno}
              placeholder="Mobile No."
              onChange={(e) => {setMobno(e.target.value)}}
            />
            <input
              className="select-box box1"
              value={business}
              placeholder="Business Name"
              onChange={(e) => {setBusiness(e.target.value)}}
            />
            <button
              className="adminsearchbtn"
              type={"button"}
              value={business}
              placeholder="Search"
              onClick={() => {setPage(1); fetchSeconddata()}}
            >Search </button>
          </div>
        </div>
        <div className="fourth-row">
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            Customer Account Requests List
          </div>
          <hr className="hrFirst" />
          <table>
            <thead className="thead">
              <tr>
                <th>Customer Name</th>
                <th>Mobile Number</th>
                <th scope="col">Email</th>
                <th scope="col">Business Name</th>
                <th scope="col">Submitted Date Time</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {_DATA &&
                _DATA.currentData().map((item, index) => {
                  return (
                    <tr
                    onClick={() => manageService(item)}
                    key={index}
                    className="specifictr"
                    >
                      <td scope="row"> {item.name}</td>
                      <td>{item.mobile}</td>
                      <td>{item.email}</td>
                      <td>{item.business_registered_name}</td>
                      <td>{moment(item.createdAt).format('DD/MM/YYYY h:mm a')}</td>
                      {item.status ==1 && <td>New</td>}
                      {item.status ==2 && <td>Inprogress</td>}
                      {item.status ==3 && <td>Active</td>}
                    </tr>
                  );
                })}
            </tbody>
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
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  adminFirstPageAction:value => dispatch(adminFirstPageAction(value))
})

export default connect(null,mapDispatchToProps)(AccountRequest);