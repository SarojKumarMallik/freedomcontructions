import React from 'react'
import AboutBreadcrumb from '../../Components/Aboutbreadcrum/Aboutbreadcrum'
import Aboutcontent from '../../Components/Aboutcontent/Aboutcontent'
import Brands from '../../Components/Brands/Brands'
import Ourteam from '../../Components/Ourteam/Ourteam'
import Whybspproject from '../../Components/Whybspproject/Whybspproject'
import Additionalsupport from '../../Components/Additionalsupport/Additionalsupport'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Aboutceo from '../../Components/Aboutceo/Aboutceo'

const About = () => {
  return (
    <>
    <AboutBreadcrumb/>
    <Aboutceo/>
    <Aboutcontent/>
    <Brands/>
    <Additionalsupport/>
    <Ourteam/>
    
    <Whybspproject/>
    <Testimonial/>
    
    </>
  )
}

export default About