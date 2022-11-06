import React from 'react'
import doctor from "../../../assets/online-doctor-appointment.svg";

//Styles
import "./Head.css";

export default function Head() {
  return (
    <div>
        <div className="HomeHead">
            <div className="HeadContent">
                <p className="HeadContentTitle">HospyTool...
One stop for all medical queries</p>  
                <p className='HeadContentText'>Our team provides one stop solution to all your medical queries from booking a
test to visualizing your vitals to managing medicines. so whenever you require we will always meet here 
stay happy stay safe !!</p>
                <div>
                    <button className="HeadContentButton">Get Consulted</button>
                </div>
            </div>
            <div className='HeadImage wobble-hor-top'> 
                <img src={doctor} alt="doctor"/>
            </div>
        </div>
    </div>
  )
}
