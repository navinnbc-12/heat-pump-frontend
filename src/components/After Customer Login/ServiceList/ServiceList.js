import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ServiceList.css";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import URL from "../../../GlobalUrl";
import globalAPI from "../../../GlobalApi";
import { TailSpin } from "react-loader-spinner";
import usePagination from "../../Pagination/Pagination";
import moment from "moment";
import { ThemeProvider, createTheme } from "@mui/material/styles";


import { connect } from "react-redux";
import { FirstPageAction } from "../../../Redux/FirstPage/FirstPage.action";


const theme = createTheme({
  palette: {
    primary: {main:"#000000	"},
  },
});

const ServiceList = ({FirstPageAction}) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [serviceno, setServiceno] = useState("");
  const [title, setTitle] = useState("");
  // const [updated, setUpdated] = useState("");
  const [priority, setPriority] = useState("");
  const [box, setBox] = useState([]);
  const [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const [count, setCount] = useState(1);
  const _DATA = usePagination(data, PER_PAGE);
  const [status, setStatus] = useState(1);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userName = userData.name;

  useEffect(() => {
    fetchData();
    fetchSeconddata();
  }, [page, status]);

  useEffect(() => {
    FirstPageAction(true)
  
  }, [])
  

  function fetchData() {
    const token = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    setLoader(true);
    axios
      .get(URL + globalAPI.mystatus, config)
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
          globalAPI.myreq +
          `?page=${page}&perPage=${PER_PAGE}&status=${status}&f_title=${title}&f_priority=${priority}&f_srid=${serviceno}`,
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
    navigate("/common/manageservice", { state: item._id });
  };
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div className="container">
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="title">My Service Requests</div>
      <hr className="containerhr" />
      <div className="paper">
        <div className="firstrow">
          <div className="names">{userName}</div>
          <div style={{ fontSize: "small" }}>Heat Pump Scotland,Glasgow</div>
          <hr className="hrFirst" />
        </div>

        <div className="secondrow">
          <div className="outerbox">
            <div className="squarebox" onClick={() => setStatus(1)}>
              <h1>{box.new}</h1>
            </div>
            <div className="second-row-text">New</div>
          </div>
          <div className="outerbox">
            <div className="squarebox" onClick={() => setStatus(2)}>
              <h1>{box.working}</h1>
            </div>
            <div className="second-row-text">Luths Working</div>
          </div>
          <div className="outerbox">
            <div className="squarebox" onClick={() => setStatus(3)}>
              <h1>{box.need_attention}</h1>
            </div>
            <div className="second-row-text">Need Your Attention</div>
          </div>
          <div className="outerbox">
            <div className="squarebox" onClick={() => setStatus(4)}>
              <h1>{box.closed}</h1>
            </div>
            <div className="second-row-text">Closed</div>
          </div>
        </div>
        <div className="third-row">
          <div className="search-by">Search By</div>
          <div
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <select
              className=" select-box box1"
              value={priority}
              onChange={(e) =>
                setPriority(
                  e.target.value == "1" ? 1 : e.target.value == "2" ? 2 : 3
                )
              }
            >
              <option value="" defaultValue hidden disabled>
                Priority
              </option>
              <option value="1">High</option>
              <option value="2">Medium</option>
              <option value="3">Low</option>
            </select>
            <input
              className="  select-box box1"
              type="text"
              placeholder="Service Request No"
              value={serviceno}
              onChange={(e) => setServiceno(e.target.value)}
            />
            <input
              className="  select-box box1"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* <select
              className="  select-box box1"
              value={updated}
              onChange={(e) => setUpdated(e.target.value)}
            >
              <option value="" defaultValue hidden disabled>
                  Updated
                </option>
              <option value="one">one</option>
              <option value="two">two</option>
              <option value="three">three</option>
            </select> */}
            <button className="searchbtn" onClick={() => fetchSeconddata()}>
              Search
            </button>
          </div>
        </div>
        <div className="fourth-row">
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            Service Requests List
          </div>
          <hr className="hrFirst" />
          <table>
            <thead>
              <tr>
                <th style={{ width: "90px" }}>Priority</th>
                <th style={{ width: "140px" }}>SR No.</th>
                <th scope="col" style={{ width: "250px" }}>
                  Title
                </th>
                <th scope="col" style={{ width: "220px" }}>
                  Site Details
                </th>
                <th scope="col" style={{ width: "200px" }}>
                  SR Type
                </th>
                <th scope="col" style={{ width: "180px" }}>
                  Last Updated
                  <br />
                  Date & Time
                </th>
                <th scope="col" style={{ width: "125px" }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="sortable">
              {_DATA.currentData().map((item, index) => {
                return (
                  <tr
                    onClick={() => manageService(item)}
                    key={index}
                    style={{ borderBottom: "solid 1px #d3d3d3" }}
                  >
                    {item.priority == 1 && (
                      <td style={{ paddingLeft: "10px" }}>
                        {" "}
                        <div className="hroundcircle">H</div>{" "}
                      </td>
                    )}
                    {item.priority == 2 && (
                      <td style={{ paddingLeft: "10px" }}>
                        {" "}
                        <div className="mroundcircle">M</div>{" "}
                      </td>
                    )}
                    {item.priority == 3 && (
                      <td style={{ paddingLeft: "10px" }}>
                        {" "}
                        <div className="lroundcircle">L</div>{" "}
                      </td>
                    )}
                    <td>{item.service_ref_number}</td>
                    <td>{item.title}</td>
                    <td>
                      {item.job_reference_id
                        ? item.job_reference_id.site_details
                        : "-"}
                    </td>
                    <td>{item.type ? item.type : "-"}</td>
                    <td>
                      {moment(item.updatedAt).format("DD/MM/YYYY h:mm a")}
                    </td>
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
          {_DATA.currentData().length == 0 && (
            <h4
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              No matching records found
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
          className="btnjob"
          onClick={(e) => navigate("/common/createlist")}
        >
          Create a Service Request
        </button>
      </div>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
FirstPageAction:(value) => dispatch(FirstPageAction(value))
})

export default connect(null,mapDispatchtoProps)(ServiceList);
