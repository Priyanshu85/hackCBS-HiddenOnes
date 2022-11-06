import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {TestimonialsData} from "../../../Data/Testimonials/TestimonialsData"

//Styles
import './Testimonials.css'

//MUI
import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";



// import required modules
import {Pagination, Navigation, Autoplay} from "swiper";
const Testimonials = () => {
  return (
      <div className=''>
      <p className='text-2xl font-bold text-center'>Testimonials</p>
      <Swiper slidesPerView={1}
        spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={
                    {clickable: true}
                    
                }
                autoplay={
                    {
                        delay: 2500,
                        disableOnInteraction: false
                    }
                }
                // navigation={true}
                modules={
                    [Pagination, Navigation, Autoplay]
                }
                className="">

                {
                TestimonialsData.map((review, index) => (
                    <SwiperSlide key={index} className="mt-5 flex justify-center">
                        <div key={index}
                            className="ReviewBox">
                            <img src={
                                    review.image
                                }
                                alt="review"
                                className=""/>
                                <div className="ReviewDown">
                                  <p className="ReviewName">{review.personName}</p>
                                  <Rating name="read-only" value={review.stars} readOnly />
                                </div>
                            <p className="ReviewText">
                                {
                                review.text
                            }</p>
                            <p className="ReviewTextDown">
                                Consulted by Dr. Ram Tripathi</p>
                        </div>
                    </SwiperSlide>
                ))
            } </Swiper>
    </div>
  )
}

export default Testimonials