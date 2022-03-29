import "./RCA2.css";
import React, { useState,useEffect } from "react";

import { makeStyles } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import { width } from "@mui/system";
import Radio from "@mui/material/Radio";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import validator from 'validator'


import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import URL from "../../../GlobalUrl";
import globalAPI from "../../../GlobalApi";


import { connect } from "react-redux";

import { customerDetailsAction } from "../../../Redux/customerDetails/customerDetails.action";
import { customerDetailsAutoSuggestion } from "../../../Redux/customerDetails/customerDetails.action";
import { customerDetailsReset } from "../../../Redux/customerDetails/customerDetails.action";

import { setSuggestionListAction } from "../../../Redux/suggestionList/suggestionList.action";
import Modal from "react-modal"



Modal.setAppElement("#root");

const useStyles = makeStyles({
  subtitle: {
    fontSize: "15px",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    color: "rgb(59,59,59)",
    letterSpacing: "0.03px",
    margin: "25px 0px 0px 100px",
    width: "450px",
    fontWeight: "600",
    fontSize: "17px",
  },
  radio: {
    height: "20px",
    width: "20px",
  },
  button: {
    marginLeft:"100px",
   // display: "inline-block",
    backgroundColor: "black",
    color: "white",
    width: "110px",
    height: "40px",
    marginTop: "15px",
    fontSize:"15px",
    borderRadius: "32.5px",
    textTransform:"none",
    "&:hover":{
      background: "black",
      color: "white",
    },
  },
    buttons: {
      margin: "15px 0px 0px 40px ",
      border: "solid 1px #d3d3d3",
      backgroundColor: "#f9f9f9",
      color: " #000",
      fontFamily:"outfit",
      fontSize:"15px",
      width: "180px",
      height: "40px",
      textTransform: "none",
      borderRadius: "32.5px",
      "&:hover": {
        textTransform: "none",
        backgroundColor: "#f9f9f9",
        color: "#000",
      },
    },
 
});

/* const business = {
  registeredName: "",
  tradeName: "",
  type: "",
};

const address = {
  postcode: "",
  startAddress: "",
  line1: "",
  line2: "",
  city: "",
}; */

const data = [{id: 0, label: "Limited Company"}, {id: 1, label: "Limited Liability Patnership"},{id:2,label:"Sole Trader"}];

function RCA2({ customerDetails, customerDetailsAction,suggestionList,setSuggestionListAction,customerDetailsAutoSuggestion,customerDetailsReset }) {
  // const [inputBusiness, setInputBusiness] = useState(business);
  // const [inputAddress, setInputAddress] = useState(address);
  const [searchValue, setsearchValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(true);
  const [businesstypecolor, setBusinesstypecolor] = useState(true)
  const navigate = useNavigate();
  const filtered = searchValue && suggestionList.suggestionList.filter(suggestion => { return  suggestion.summaryline.toLowerCase().includes(searchValue.toLowerCase()); });
  const filtered1 = searchValue && suggestionList.suggestionList.filter(suggestion => { return  !suggestion.summaryline.toLowerCase().includes(searchValue.toLowerCase()); });
  const filtered2 = [...filtered,...filtered1];
  const [isOpen, setIsOpen] = useState(false)

  const [input5Error, setInput5Error] = useState("")
  const [input6Error, setInput6Error] = useState("")
  const [input7Error, setInput7Error] = useState("")
  //const [input8Error, setInput8Error] = useState("mandatory field cannot be empty")
  const [input9Error, setInput9Error] = useState("")
  const [input10Error, setInput10Error] = useState("")
  const [input11Error, setInput11Error] = useState("")
  const [input12Error, setInput12Error] = useState("")

  //Dropdown

  const [isOpend, setOpend] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpend(!isOpend);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }

  const changeHandler = (e) => {
    e.preventDefault();
    customerDetailsAction({ [e.target.name]: e.target.value });
    setInput5Error("")
    setInput6Error("")
   
    setInput9Error("")
    setInput10Error("")
    setInput11Error("")
    setInput12Error("")

  };

  const changeHandler2 = (e) => {
    console.log(e.target.innerHTML)
    e.preventDefault();
    customerDetailsAction({ business_type: e.target.innerHTML });
    setBusinesstypecolor(false)
    setInput7Error("")
  };

  const changeHandler1 = (e) => {
    e.preventDefault();
    setsearchValue(e.target.value);
    
  };

  useEffect(() => {
    if(searchValue.length > 2){
   axios.get(`https://ws.postcoder.com/pcw/autocomplete/find?query=${searchValue}&country=uk&apikey=PCWFQ-4NFQ9-PZY8R-574WR`)
   //axios.get(`https://ws.postcoder.com/pcw/PCWFQ-4NFQ9-PZY8R-574WR/street/uk/${code}`)
   .then(res =>setSuggestionListAction(res.data))}
   
  }, [searchValue])
 
  useEffect(() => {
    console.log(customerDetails);
    
    }, [customerDetails])
  

  const clickHandler1 = (e) => {                               //Request failed with status code 403PCWBY-K73QV-5TPTP-7H75B
    if(!parseInt(e.target.id)){
     axios.get(`https://ws.postcoder.com/pcw/autocomplete/find?query=${searchValue}&country=uk&apikey=PCWBY-K73QV-5TPTP-7H75B&pathfilter=${e.target.id}`)
     .then(res =>{setSuggestionListAction(res.data)})
     
   }
   else{
     axios.get(`https://ws.postcoder.com/pcw/autocomplete/retrieve/?id=${e.target.id}&query=${searchValue}&country=uk&apikey=PCWBY-K73QV-5TPTP-7H75B&lines=3&include=posttown,postcode`)
     .then((res) => res.data[0])
     .then(resp => customerDetailsAutoSuggestion( resp))
     /* .then(respo => setpostc(respo.postcode)) */
   
     //setInputAddress(state => ({...state,posttown:resp.posttown ,address_1:resp.addresslane1,address_2:resp.addresslane2 }))
 
    
    console.log("hello");
    setSuggestionListAction([]);
    setsearchValue("")
    setShow(false)
     
   }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isLength(customerDetails.business_registered_name,{min:1,max:undefined})) {
      setInput5Error("Mandatory field cannot be empty")
      return false;
    }
    if (!validator.isLength(customerDetails.business_trade_name,{min:1,max:undefined})) {
      setInput6Error("Mandatory field cannot be empty")
      return false;
    }
    debugger
    if (!validator.isLength(customerDetails.business_type,{min:1,max:undefined})) {
      setInput7Error("Mandatory field cannot be empty")
      return false;
    }
    if (customerDetails.address_1 == "") {
      setInput9Error("Mandatory field cannot be empty")
      return false;
    }
    if (customerDetails.address_2 == "") {
      setInput10Error("Mandatory field cannot be empty")
      return false;
    }
    if (customerDetails.city == "") {
      setInput11Error("Mandatory field cannot be empty")
      return false;
    }
    if (customerDetails.postcode == "") {
      setInput12Error("Mandatory field cannot be empty")
      return false;
    }

    if (customerDetails.business_registered_name != "" && customerDetails.business_trade_name != "" && customerDetails.business_type !="" && customerDetails.address_1 != "" && customerDetails.address_2 != "" && customerDetails.city != "" && customerDetails.postcode != "" ){
    setLoader(true);
    const data = {
      email:customerDetails.email ,
      password:customerDetails.password ,
      name:customerDetails.name ,
      mobile:customerDetails.mobile ,
      business_registered_name:customerDetails.business_registered_name ,
      business_trade_name:customerDetails.business_trade_name ,
      business_type:customerDetails.business_type ,
      address_1:customerDetails.address_1 ,
      address_2:customerDetails.address_2 ,
      country:customerDetails.country ,
      city:customerDetails.city ,
      postcode:customerDetails.postcode ,
      admin: false,
    };
    axios
      .post(URL + globalAPI.register, data)
      .then((response) => {
        if (response.data.sucess) {
          setLoader(false);
          toast.success('Account Request Submitted');
          customerDetailsReset();
          navigate("/rca3");
        }
        else{
          toast.error(response.data.message);
        }
      })
      .catch((err) => {
        setLoader(false);
        toast.error("Something Went Wrong");
      });
     }else{
      toast.error("Something Went Wrong");
     }
     
  };


  const Result = ({ result }) => {
    return <li className="item" id = {`${result.id}`} onClick={(e) => clickHandler1(e)} >{`${result.summaryline} ${result.locationsummary&&result.locationsummary}`}</li>;
  };
  
  const ResultBlock = ({ results }) => {
    return (
      <div className="result-block">
        <ul>
          {results.map((r, i) => (
            <Result key={i} result={r} />
          ))}
        </ul>
      </div>
    );
  };

  const classes = useStyles();

  return (
   
    <div>
       {loader && (
      <div className="customLoader">
          <TailSpin color="#Fa5e00" height="100" width="100" />
      </div>
    )}
      <div className="rca2" onClick={isOpend?toggleDropdown:null} >
        <div className="rca2firstHalf">
          <div className="rca2HPD">
            <img
              src={require("../../../Img/HPDD.jpeg")}
              height="50px"
              width={"50px"}
            />
          </div>
          <h1 className="rca2div1">Request a Customer Account</h1>

          <div className="rca2left-bar"></div>
          <div className="rca2circle"></div>
          <div className="rca2right-bar"></div>

          <div className="rca2subtitle1">
            Your Business Details
          </div>

          <form action="">
            <input
              required
              className="rca2inputfields top input5"
              type="text"
              value={customerDetails.business_registered_name}
              onChange={changeHandler}
              name="business_registered_name"
              
            /> <label className="input5-label" >Business Registered Name*</label>  <span className=' rca2inputError input5Error' >{input5Error}</span>
            <input
              required
              className="rca2inputfields input6"
              type="text"
              value={customerDetails.business_trade_name}
              onChange={changeHandler}
              name="business_trade_name"
              
            /> <label className="input6-label" >Business Trade Name*</label>  <span className=' rca2inputError input6Error' >{input6Error}</span>
            {/* <select name="business_type" id="cars" className={`rca2inputfields input7 ${businesstypecolor&&"businesstypecolor"}`}  onChange={changeHandler2} >
              <option value=""   selected hidden className="optioncolor " >Business Type*</option>
              <option value="Limited Company" className="optioncolor option" >Limited Company</option>
              <option value="Limited Liability Patnership" className="optioncolor option" >Limited Liability Patnership</option>
              <option value="Sole Trader" className="optioncolor option" >Sole Trader</option>
            </select>     <span className=' rca2inputError input7Error' >{input7Error}</span> */}
             <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : <span style={{color:"#999"}} >Business Type*</span>}
        <i className={`fa fa-chevron-right icon ${isOpend && "open"}`}></i>
        <img src={require("../../../Img/adminDropdown.png")} className={`commondropdown ${isOpend&&"commondropdownrotate" }`}  />
      </div> 
      <div className={`dropdown-body ${isOpend && 'open'}`}>
        {items.map(item => (
          <div className="dropdown-item"  name="business_type" value={item.label}  onClick={e => {handleItemClick(e.target.id);toggleDropdown();changeHandler2(e)}} id ={item.id} key ={item.id}>
           {/*  <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span> */}
            {item.label}
          </div>
        ))}
      </div>
      
    </div>
            {/* <input
              required
              className="rca2inputfields input7 "
              type="text"
              value={customerDetails.business_type}
              onChange={changeHandler}
              name="business_type"
             
            /> <label className="input7-label" >Business Type*</label> */}

            <div style={{display:"flex",margin:"20px 0px 0px 100px"}}>
              <div
                
                style={{
                  display: "inline-block",
                  fontSize: "15px",
                  fontWeight: "300",
                }}
              >
                Address
              </div>
   
                <div className="rca2subtitle3"
                >
                  Enter Address manually
                </div>
                <Radio
                  type="radio"
                  name="radio"
                  className={classes.radio}
                  checked={checked}
                  onClick={() => {
                    checked ? setChecked(false) : setChecked(true);
                    show === false&&setShow(!show)
                  }}
                />
             {/*  </div> */}
            </div>

            <input
              className="rca2inputfields input8"
              type="text"
              value={searchValue}
              onChange={changeHandler1}
              name="startAddress"
              required
              disabled={checked === true ? true : false}
            /> <label className="input8-label" >Start typing address</label>   {/* <span className=' rca2inputError input8Error' >{input8Error}</span> */}
             {filtered2.length === 0 ? (
       ""
      ) : (
        <ResultBlock results={filtered2} />
      )}
            <input
              required
              className="rca2inputfields input9"
              type="text"
              value={customerDetails.address_1}
              onChange={changeHandler}
              name="address_1"
              placeholder={checked===false?"Address line 1*":""}
              disabled={checked == false ? true : false}
            /> {checked && <label className="input9-label" >Address line 1*</label>}   <span className=' rca2inputError input9Error' >{input9Error}</span>
            <input
              required
              className="rca2inputfields input10"
              type="text"
              value={customerDetails.address_2}
              onChange={changeHandler}
              name="address_2"
              placeholder={checked===false?"Address line 2*":""}
              disabled={checked === false ? true : false}
            /> {checked && <label className="input10-label" >Address line 2*</label>}  <span className=' rca2inputError input10Error' >{input10Error}</span>
            <input
              required
              className="rca2inputfields input11"
              type="text"
              value={customerDetails.city}
              onChange={changeHandler}
              name="city"
              placeholder={checked===false?"City/Town*":""}
              disabled={checked === false ? true : false}
            /> {checked &&<label className="input11-label" >City/Town*</label>}   <span className=' rca2inputError input11Error' >{input11Error}</span>
            <input
              required
              value={customerDetails.postcode}
              className="rca2inputfields top input12"
              type="text"
              onChange={changeHandler}
              name="postcode"
              placeholder={checked===false?"PostCode*":""}
              disabled={checked === false ? true : false} 
            /> {checked &&<label className="input12-label" >PostCode*</label>}     <span className=' rca2inputError input12Error' >{input12Error}</span>
            <img
            src={require("../../../Img/ellipse1.png")}
            height="360px"
            width={"250px"}
            alt=""
            className="rca2ellipse1"
          />

          {/*   <Button
              type="submit"
              className={classes.button}
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button> */}
            <div>
              <Button
                className={classes.button}
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </Button>
            <Button
              className={classes.buttons}
              style={{ paddingLeft: "50px", position: "relative" }}
              onClick={()=>navigate("/rca1")}
            >
              Previous
            </Button>
            <ArrowBackIosNewIcon
              style={{
                position: "relative",
                right: "170px",
                top: "12px",
                fontSize: "medium",
              }}
            />
           
          </div>
          </form>
        </div>

        <div className="rca2Rectangle-side">
          {" "}
          <img
            src={require("../../../Img/RCA2.png")}
            className="rca2couplesideImg"
          />{" "}
        </div>
      </div>
      <Modal
    isOpen={isOpen}
    className="myWarningModal"
    overlayClassName={"myWarningOverlay"}
    closeTimeoutMS={500}
    >
      <div>
       
        <h2 style={{textAlign:"center",color:"#fa5e00",marginTop:"30px"}} >Warning!</h2>
        <div style={{textAlign:"center",marginTop:"20px"}} >Mandatory fields cannot be Empty</div>
        <button className='ModalButton' onClick={() => setIsOpen(false)} >OK</button>

      </div>
    </Modal>
    </div>
  );
}
const mapStateToProps = (state) => ({
  customerDetails: state.cdr,
  suggestionList:state.sl
});

const mapDispatchToProps = (dispatch) => ({
  customerDetailsAction: (keypair) => dispatch(customerDetailsAction(keypair)),
  setSuggestionListAction:list => dispatch(setSuggestionListAction(list)),
  customerDetailsAutoSuggestion:singleList => dispatch(customerDetailsAutoSuggestion(singleList)),
  customerDetailsReset:()=> dispatch(customerDetailsReset())
});

export default connect(mapStateToProps, mapDispatchToProps)(RCA2);
