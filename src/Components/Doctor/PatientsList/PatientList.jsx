import React from 'react'
// import { Link } from 'react-router-dom'

import "./PatientList.css"

// MUI
// import Button from "@mui/material/Button";

export default function PatientList() {
  return (
        <div className="DashBL">
      <div className="DashActiveName">Patient Data</div>

      <div className="DashTopBar">
        <div className="DashTopBarCount">Count: 5</div>
        <div className="DashTopBarControls">
          <div className="DashControlFilter">
            <input type="search" placeholder="Title/Tags" className="input" />
            <button className="Search">Search</button>
            {/* <select
              onChange={(e) => filterPublished(e.target.value)}
              name="active"
              id="active_applications"
            >
              <option value="all">All</option>
              <option value="unpub">Not Published</option>
              <option value="pub">Published</option>
            </select>
            <select
              onChange={(e) => filterFeatured(e.target.value)}
              name="featured"
              id="featured"
            >
              <option value={"all"}>All</option>
              <option value={"feat"}>Featured</option>
              <option value={"unfeat"}>Not Featured</option>
            </select> */}
          </div>
        </div>
      </div>

      <div className="DashBody">
        <div className="DashBodyHeader">
          <div className="DashVisaTitle">Name</div>
          <div className="DashVisaTitle">Disease</div>
          <div className="DashVisaTitle">Mobile</div>
          <div className="DashVisaTitle">Age</div>
          <div className="DashVisaTitle">Sex</div>
        </div>
        </div>
        </div>
  )
}
