import React from 'react'
import Database from "../../../assets/Database.jpg";
import TextField from '@mui/material/TextField';

export default function DownloadReport() {
  return (
    <>
    <div>
       <p></p> 
    </div>
    <div className=" flex items-center justify-center">
        <img src={Database} alt="Graph" className="object-cover"/>
    </div>
    <h1 className="DataHeading">Input Data Here to Show on Graph</h1>
    <div className='InputFeild'>
    <TextField
          required
          id="outlined-required"
          label="Input Your Data Here"
        />
    </div>
    <div className="Description">
    <button type="send" className="DescriptionButtonDownload" disabled>Download New Prescription</button>
    </div>
    </>
  )
}
