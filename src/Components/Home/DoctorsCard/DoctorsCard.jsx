import React from 'react'
import {doc_data} from "../../../Data/Testimonials/Data_doctor"
import {PopupButton} from "react-calendly";
//Styles
import "./DoctorsCard.css"

export default function DoctorsCard() {
    return (
        <div className='GridContainer'>
    {doc_data.map((doc) => {
        return (
            <div>
        <div className="GridBoxes">
            <div className="GridImage">
                <img className="" src={doc.img_url} alt="BonnieImage"/>
                <p className="DoctorName text_det det">{doc.name}</p>
                <span className="DoctorSpeciality text_det">{doc.speciality}</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                <PopupButton className="bg-green-400 border-2 border-[#002C5F] text-white px-5 py-3 rounded-3xl duration-500 hover:shadow-2xl w-56 text-sm lg:text-base"
                            url="https://calendly.com/kitretsu"
                            rootElement={
                                document.getElementById("root")
                            }
                            text="Book Now"/>
                    {/* <a href="#_" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a> */}
                </div>
            </div>
        </div>
    </div>
        )
    })}
    </div>
    )
};
