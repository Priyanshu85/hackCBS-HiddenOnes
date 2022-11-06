import React from 'react'
import Navbar from '../../Components/Common/Navbar/Navbar'
import Footer from '../../Components/Common/Footer/Footer'
import PatientList from "../../Components/Doctor/PatientsList/PatientList";

export default function Doctor() {
  return (
    <>
    <Navbar/>
    <PatientList/>
    <Footer/>
    </>
  )
}
