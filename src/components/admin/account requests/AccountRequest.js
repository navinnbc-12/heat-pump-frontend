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
import { TextField } from "@mui/material";
import { makeStyles } from '@mui/styles';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

import { connect } from "react-redux";
import { adminFirstPageAction } from "../../../Redux/AdminFirstPage/adminFirstPage.action";

const theme = createTheme({
  palette: {
    primary: {main:"#000000	"},
  },
});
const useStyles = makeStyles({
  textfield:{
    fontSize:"1vw",
    '& label.Mui-focused': {
      color: 'black',

    },
    '& .MuiOutlinedInput-root': {
      borderRadius:"0.66vw",
      marginRight: "1.33vw",
      height:"6.71vh",
      width:"16vw",
     
      '&.Mui-focused fieldset': {
        borderColor: 'black',
        
      },
    },
  },
  selectfield: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "0.66vw",
      marginRight: "1.33vw",
      width: "13.67vw",
      height: "6.7vh",
      fontWeight: "bolder",
      fontSize:"1vw",
      fontFamily: "outfit",
      backgroundColor: "white",

      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
  selectinput:{
    marginBottom:"0.67vh",
    fontFamily:"outfit",
    fontWeight: "bolder",
    fontSize:"1.1vw"
    
  }
})
const AccountRequest = ({adminFirstPageAction}) => {
  const classes = useStyles();
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
  const [focused, setFocused] = React.useState("");

  useEffect(() => {
    fetchData();
    // fetchSeconddata();
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
        fetchSeconddata();
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
    <div className="arcontainer">
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="artitle">Customer Account Requests</div>
      <hr className="arcontainerhr" />
      <div className="arpaper">
        <div className="arsecondrow">
          <div className="arouterbox" onClick={()=>{setStatus(1);setPage(1)}} >
            <div className="arsquarebox" >
              <h1>{box.new?box.new:0}</h1>
            </div>
            <div className="arsecond-row-text">New</div>
          </div>
          <div className="arouterbox" onClick={()=>{setStatus(2);setPage(1)}} >
            <div className="arsquarebox" >
              <h1>{box.inprogress?box.inprogress:0}</h1>
            </div>
            <div className="arsecond-row-text">Inprogress</div>
          </div>
          <div className="arouterbox" onClick={()=>{setStatus(3);setPage(1)}} >
            <div className="arsquarebox" >
              <h1>{box.active?box.active:0}</h1>
            </div>
            <div className="arsecond-row-text">Active</div>
          </div>
        </div>
        <div className="arthird-row">
          <div className="arsearch-by">Search By</div>
          <div
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* <select
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
            </select> */}
            <div style={{display:"inline-block",width:"1.4vw"}}>
            <FormControl className={classes.selectfield}>
            <InputLabel id="demo-simple-select-label" className={classes.selectinput}>Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  label="Priority"
                  IconComponent={() =>
                    focused ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )
                  }
                >
                  <MenuItem value="1"> New </MenuItem>
                  <MenuItem value="2"> Inprogress </MenuItem>
                  <MenuItem value="3"> Active </MenuItem>
                </Select>
              </FormControl>
              </div>
            <TextField label="Mobile No" style={{marginLeft:"14vw"}}className={classes.textfield} value={mobno} onChange={(e) => setMobno(e.target.value)} size="small" InputLabelProps={{ style: { fontWeight:"bolder",fontFamily:"outfit",marginTop:"5px",fontSize:"1vw" } }} InputProps={{ style: { fontWeight:"bolder",fontFamily:"outfit", } }}/>
            <TextField label="Business Name" className={classes.textfield} value={business} onChange={(e) => setBusiness(e.target.value)} size="small" InputLabelProps={{ style: { fontWeight:"bolder",fontFamily:"outfit",marginTop:"5px",fontSize:"1vw"} }} InputProps={{ style: { fontWeight:"bolder",fontFamily:"outfit", } }}/>

            <button
              className="aradminsearchbtn"
              type={"button"}
              value={business}
              placeholder="Search"
              onClick={() => {setPage(1); fetchSeconddata()}}
            >Search </button>
          </div>
        </div>
        <div className="arfourth-row">
          <div style={{ fontSize: "1.7vw", fontWeight: "bold" }}>
            Customer Account Requests List
          </div>
          <hr className="arhrFirst" />
          <table>
            <thead className="arthead">
              <tr >
                <th>Customer Name</th>
                <th>Mobile Number</th>
                <th scope="col">Email</th>
                <th scope="col">Business Name</th>
                <th scope="col">Submitted Date Time</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="artbody">
              {_DATA &&
                _DATA.currentData().map((item, index) => {
                  return (
                    <tr
                    onClick={() => manageService(item)}
                    key={index}
                    className="arspecifictr"
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