import React from 'react'
import "./PatientData.css";
import Database from "../../../assets/Database.jpg";
// import TextField from '@mui/material/TextField';
import TextareaAutosize from "@mui/material/TextareaAutosize";
// import Button from "@mui/material/Button";

export default function PatientData() {
  return (
    <>
    <div>
       <p></p> 
    </div>
    <div className=" flex items-center justify-center">
        <img src={Database} alt="Graph" className="object-cover"/>
    </div>
    <div className="Description">
    <p className="DescriptionHeading">Write New Prescription as per the Graph</p>
    <TextareaAutosize
            required
            maxRows={4}
            aria-label="maximum height"
            placeholder="Input Prescription....."
            style={{
              width: "72vw",
              height: 300,
              background: "transparent",
              borderRadius: 10,
              border: "1px solid #ccc",
              padding: 10,
              fontSize: 16,
            }}
          />
          <div classsName="Buttons">
          <button type="send" className="DescriptionButton">Send Prescription</button>
          <button type="send" className="DescriptionButtonDownload">Download Prescription</button>
          
          </div>
          </div>
    </>
  )
}
