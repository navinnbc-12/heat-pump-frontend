import React, { useState, useEffect } from "react";
import "./FifthStep.css";
import { FileUploader } from "react-drag-drop-files";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import URL from "../../../../GlobalUrl";
import globalAPI from "../../../../GlobalApi";
import { Box } from "@mui/material";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import { Card } from "../../../../common";

const fileTypes = ["PDF", "PNG", "JPEG"];

const FifthStep = () => {
  const [walls, setWalls] = useState([]);
  const [wattachments, setWattachments] = useState([]);
  const [roof, setRoof] = useState([]);
  const [rattachments, setRattachments] = useState([]);
  const [windows, setWindows] = useState([]);
  const [wiattachments, setWiattachments] = useState([]);
  const [eb, setEB] = useState([]);
  const [ebattachments, setEBattachments] = useState([]);
  const [er, setER] = useState([]);
  const [erattachments, setERattachments] = useState([]);
  const [pw, setPW] = useState([]);
  const [pwattachments, setPWattachments] = useState([]);
  const [loader, setLoader] = useState(false);
  const token = JSON.parse(localStorage.getItem("user"));

  const onFileUpload = (e, name) => {
    console.log(name);
    if (e) {
      let formData = new FormData();
      formData.append("attachments", e);
      setLoader(true);
      axios({
        method: "post",
        url: URL + globalAPI.fileupload,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          const res = response.data;
          setLoader(false);
          if (res.success) {
            if (name == "walls") {
              wattachments.push(res.data.message[0]);
              setWalls([...walls, e]);
            }
            if (name == "roof") {
              rattachments.push(res.data.message[0]);
              setRoof([...roof, e]);
            }
            if (name == "windows") {
              wiattachments.push(res.data.message[0]);
              setWindows([...windows, e]);
            }
            if (name == "eb") {
              ebattachments.push(res.data.message[0]);
              setEB([...eb, e]);
            }
            if (name == "er") {
              erattachments.push(res.data.message[0]);
              setER([...er, e]);
            }
            if (name == "pw") {
              pwattachments.push(res.data.message[0]);
              setPW([...pw, e]);
            }
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          setLoader(false);
          toast.error("Something Went Wrong");
        });
    } else {
      setLoader(false);
      toast.error("Please add Attachments");
    }
  };

  const removeFile = (name, index) => {
    if (name == "walls") {
      const newValue = [...walls];
      newValue.splice(index, 1);
      setWalls(newValue);
      const newAttachments = [...wattachments];
      newAttachments.splice(index, 1);
      setWattachments(newAttachments);
    }
    if (name == "roof") {
      const newValue = [...roof];
      newValue.splice(index, 1);
      setRoof(newValue);
      const newAttachments = [...rattachments];
      newAttachments.splice(index, 1);
      setRattachments(newAttachments);
    }
    if (name == "windows") {
      const newValue = [...windows];
      newValue.splice(index, 1);
      setWindows(newValue);
      const newAttachments = [...wiattachments];
      newAttachments.splice(index, 1);
      setWiattachments(newAttachments);
    }
    if (name == "eb") {
      const newValue = [...eb];
      newValue.splice(index, 1);
      setEB(newValue);
      const newAttachments = [...ebattachments];
      newAttachments.splice(index, 1);
      setEBattachments(newAttachments);
    }
    if (name == "er") {
      const newValue = [...er];
      newValue.splice(index, 1);
      setER(newValue);
      const newAttachments = [...erattachments];
      newAttachments.splice(index, 1);
      setERattachments(newAttachments);
    }
    if (name == "pw") {
      const newValue = [...pw];
      newValue.splice(index, 1);
      setPW(newValue);
      const newAttachments = [...pwattachments];
      newAttachments.splice(index, 1);
      setPWattachments(newAttachments);
    }
  };
  return (
    <Card>
      {loader && (
        <div className="customLoader">
          <TailSpin color="#fa5e00" height="100" width="100" />
        </div>
      )}
      <div className="s5text1">
        Step 5 of 9
        <img src={require("../../../../Img/step5.png")} className="s5baricon" />
      </div>

      <h4 style={{ fontSize: "1.4vw", marginTop: "10vh" }}>Upload Photos</h4>
      <hr className="s2hr2" />
      <h4 className="s5name1">Walls</h4>
      <hr className="s5hr2" />
      <div>
        <FileUploader
          handleChange={(e) => onFileUpload(e, "walls")}
          name="file"
          types={fileTypes}
          onTypeError={(err) =>
            toast.error("Only pdf, png, jpeg files are allowed")
          }
          children={
            <span className="s5dragndrop">
              Drag and Drop Here
              <img
                src={require("../../../../Img/iconcloud.png")}
                style={{
                  marginLeft: "20px",
                  height: "3.35vh",
                  width: "1.63vw",
                }}
              />
            </span>
          }
        />

        <span className="s5or">OR</span>

        <FileUploader
          handleChange={(e) => onFileUpload(e, "walls")}
          name="file"
          types={fileTypes}
          onTypeError={(err) =>
            toast.error("Only pdf, png, jpeg files are allowed")
          }
          children={
            <span className="s5browse">
              <button className="s5browsebtn">Browse</button>
            </span>
          }
        />
      </div>
      {walls &&
        walls.map((item, index) => {
          return (
            <div
              className="s5filemap"
              style={{ borderRadius: "1.8vw" }}
              key={index}
            >
              <span style={{ float: "left", marginLeft: "1vw" }}>
                <img
                  src={require("../../../../Img/attachIcon.png")}
                  style={{
                    marginLeft: "20px",
                    height: "2.8vh",
                    width: "1vw",
                  }}
                />

                <span className="s5fileName">Attachment-{index + 1}</span>
              </span>

              <img
                src={require("../../../../Img/iconDelete.png")}
                onClick={(e) => removeFile(e.target.name, index)}
                style={{
                  marginRight: "20px",
                  width: "1.3vw",
                  height: "2.9vh",
                }}
                name="walls"
              />
            </div>
          );
        })}

      <h4 className="s5name1">Roof</h4>
      <hr className="s5hr2" />
      <div>
        <FileUploader
          handleChange={(e) => onFileUpload(e, "roof")}
          name="file"
          types={fileTypes}
          onTypeError={(err) =>
            toast.error("Only pdf, png, jpeg files are allowed")
          }
          children={
            <span className="s5dragndrop">
              Drag and Drop Here
              <img
                src={require("../../../../Img/iconcloud.png")}
                style={{
                  marginLeft: "20px",
                  height: "3.35vh",
                  width: "1.63vw",
                }}
              />
            </span>
          }
        />

        <span className="s5or">OR</span>

        <FileUploader
          handleChange={(e) => onFileUpload(e, "roof")}
          name="file"
          types={fileTypes}
          onTypeError={(err) =>
            toast.error("Only pdf, png, jpeg files are allowed")
          }
          children={
            <span className="s5browse">
              <button className="s5browsebtn">Browse</button>
            </span>
          }
        />
      </div>
      {roof &&
        roof.map((item, index) => {
          return (
            <div
              className="s5filemap"
              style={{ borderRadius: "1.8vw" }}
              key={index}
            >
              <span style={{ float: "left", marginLeft: "1vw" }}>
                <img
                  src={require("../../../../Img/attachIcon.png")}
                  style={{
                    marginLeft: "20px",
                    height: "2.8vh",
                    width: "1vw",
                  }}
                />

                <span className="s5fileName">Attachment-{index + 1}</span>
              </span>

              <img
                src={require("../../../../Img/iconDelete.png")}
                onClick={(e) => removeFile(e.target.name, index)}
                style={{
                  marginRight: "20px",
                  width: "1.3vw",
                  height: "2.9vh",
                }}
                name="roof"
              />
            </div>
          );
        })}

      <h4 className="s5name1">Windows</h4>
      <hr className="s5hr2" />
      <div>
        <FileUploader
          handleChange={(e) => onFileUpload(e, "windows")}
          name="file"
          types={fileTypes}
          onTypeError={(err) =>
            toast.error("Only pdf, png, jpeg files are allowed")
          }
          children={
            <span className="s5dragndrop">
              Drag and Drop Here
              <img
                src={require("../../../../Img/iconcloud.png")}
                style={{
                  marginLeft: "20px",
                  height: "3.35vh",
                  width: "1.63vw",
                }}
              />
            </span>
          }
        />

        <span className="s5or">OR</span>

        <FileUploader
          handleChange={(e) => onFileUpload(e, "windows")}
          name="file"
          types={fileTypes}
          onTypeError={(err) =>
            toast.error("Only pdf, png, jpeg files are allowed")
          }
          children={
            <span className="s5browse">
              <button className="s5browsebtn">Browse</button>
            </span>
          }
        />
      </div>
      {windows &&
        windows.map((item, index) => {
          return (
            <div
              className="s5filemap"
              style={{ borderRadius: "1.8vw" }}
              key={index}
            >
              <span style={{ float: "left", marginLeft: "1vw" }}>
                <img
                  src={require("../../../../Img/attachIcon.png")}
                  style={{
                    marginLeft: "20px",
                    height: "2.8vh",
                    width: "1vw",
                  }}
                />

                <span className="s5fileName">Attachment-{index + 1}</span>
              </span>

              <img
                src={require("../../../../Img/iconDelete.png")}
                onClick={(e) => removeFile(e.target.name, index)}
                style={{
                  marginRight: "20px",
                  width: "1.3vw",
                  height: "2.9vh",
                }}
                name="windows"
              />
            </div>
          );
        })}

      <h4 className="s5name1">Existing Boiler</h4>
      <hr className="s5hr2" />
      <div>
        <FileUploader
          handleChange={(e) => onFileUpload(e, "eb")}
          name="file"
          types={fileTypes}
          onTypeError={(err) =>
            toast.error("Only pdf, png, jpeg files are allowed")
          }
          children={
            <span className="s5dragndrop">
              Drag and Drop Here
              <img
                src={require("../../../../Img/iconcloud.png")}
                style={{
                  marginLeft: "20px",
                  height: "3.35vh",
                  width: "1.63vw",
                }}
              />
            </span>
          }
        />

        <span className="s5or">OR</span>

        <FileUploader
          handleChange={(e) => onFileUpload(e, "eb")}
          name="file"
          types={fileTypes}
          onTypeError={(err) =>
            toast.error("Only pdf, png, jpeg files are allowed")
          }
          children={
            <span className="s5browse">
              <button className="s5browsebtn">Browse</button>
            </span>
          }
        />
      </div>
      {eb &&
        eb.map((item, index) => {
          return (
            <div
              className="s5filemap"
              style={{ borderRadius: "1.8vw" }}
              key={index}
            >
              <span style={{ float: "left", marginLeft: "1vw" }}>
                <img
                  src={require("../../../../Img/attachIcon.png")}
                  style={{
                    marginLeft: "20px",
                    height: "2.8vh",
                    width: "1vw",
                  }}
                />

                <span className="s5fileName">Attachment-{index + 1}</span>
              </span>

              <img
                src={require("../../../../Img/iconDelete.png")}
                onClick={(e) => removeFile(e.target.name, index)}
                style={{
                  marginRight: "20px",
                  width: "1.3vw",
                  height: "2.9vh",
                }}
                name="eb"
              />
            </div>
          );
        })}

      <h4 className="s5name1">Existing Radiator</h4>
      <hr className="s5hr2" />
      <div>
        <FileUploader
          handleChange={(e) => onFileUpload(e, "er")}
          name="file"
          types={fileTypes}
          onTypeError={(err) =>
            toast.error("Only pdf, png, jpeg files are allowed")
          }
          children={
            <span className="s5dragndrop">
              Drag and Drop Here
              <img
                src={require("../../../../Img/iconcloud.png")}
                style={{
                  marginLeft: "20px",
                  height: "3.35vh",
                  width: "1.63vw",
                }}
              />
            </span>
          }
        />

        <span className="s5or">OR</span>

        <FileUploader
          handleChange={(e) => onFileUpload(e, "er")}
          name="file"
          types={fileTypes}
          onTypeError={(err) =>
            toast.error("Only pdf, png, jpeg files are allowed")
          }
          children={
            <span className="s5browse">
              <button className="s5browsebtn">Browse</button>
            </span>
          }
        />
      </div>
      {er &&
        er.map((item, index) => {
          return (
            <div
              className="s5filemap"
              style={{ borderRadius: "1.8vw" }}
              key={index}
            >
              <span style={{ float: "left", marginLeft: "1vw" }}>
                <img
                  src={require("../../../../Img/attachIcon.png")}
                  style={{
                    marginLeft: "20px",
                    height: "2.8vh",
                    width: "1vw",
                  }}
                />

                <span className="s5fileName">Attachment-{index + 1}</span>
              </span>

              <img
                src={require("../../../../Img/iconDelete.png")}
                onClick={(e) => removeFile(e.target.name, index)}
                style={{
                  marginRight: "20px",
                  width: "1.3vw",
                  height: "2.9vh",
                }}
                name="er"
              />
            </div>
          );
        })}

      <h4 className="s5name1">Pipework</h4>
      <hr className="s5hr2" />
      <div>
        <FileUploader
          handleChange={(e) => onFileUpload(e, "pw")}
          name="file"
          types={fileTypes}
          onTypeError={(err) =>
            toast.error("Only pdf, png, jpeg files are allowed")
          }
          children={
            <span className="s5dragndrop">
              Drag and Drop Here
              <img
                src={require("../../../../Img/iconcloud.png")}
                style={{
                  marginLeft: "20px",
                  height: "3.35vh",
                  width: "1.63vw",
                }}
              />
            </span>
          }
        />

        <span className="s5or">OR</span>

        <FileUploader
          handleChange={(e) => onFileUpload(e, "pw")}
          name="file"
          types={fileTypes}
          onTypeError={(err) =>
            toast.error("Only pdf, png, jpeg files are allowed")
          }
          children={
            <span className="s5browse">
              <button className="s5browsebtn">Browse</button>
            </span>
          }
        />
      </div>
      {pw &&
        pw.map((item, index) => {
          return (
            <div
              className="s5filemap"
              style={{ borderRadius: "1.8vw" }}
              key={index}
            >
              <span style={{ float: "left", marginLeft: "1vw" }}>
                <img
                  src={require("../../../../Img/attachIcon.png")}
                  style={{
                    marginLeft: "20px",
                    height: "2.8vh",
                    width: "1vw",
                  }}
                />

                <span className="s5fileName">Attachment-{index + 1}</span>
              </span>

              <img
                src={require("../../../../Img/iconDelete.png")}
                onClick={(e) => removeFile(e.target.name, index)}
                style={{
                  marginRight: "20px",
                  width: "1.3vw",
                  height: "2.9vh",
                }}
                name="pw"
              />
            </div>
          );
        })}
      <Box sx={{ display: "flex" }}>
        <button variant="contained" className="btn-house btn-icon">
          <span style={{ height: "27px", width: "27px" }}>
            <ChevronLeftSharpIcon sx={{ height: "27px", width: "27px" }} />
          </span>
          <span style={{ marginLeft: "100px" }}>Previous</span>
        </button>
        <button variant="contained" className="btn-house Add btn-icon">
          <span style={{ marginRight: "100px" }}>Continue</span>
          <span style={{ height: "27px", width: "27px" }}>
            <ChevronRightSharpIcon sx={{ height: "27px", width: "27px" }} />
          </span>
        </button>
      </Box>
    </Card>
  );
};

export default FifthStep;
