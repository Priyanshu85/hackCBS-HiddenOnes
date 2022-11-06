import React from 'react'
import { TestimonialsData } from '../../Data/Testimonials/TestimonialsData'
import Cards from '../Cards/Cards'
const DoctorsProfile = () => {
  return (
    <div>
      {
        TestimonialsData.map((item, index) => {
          return (
            <Cards props= {item}/>
          )
        })
      }
    </div>
  )
}

export default DoctorsProfile