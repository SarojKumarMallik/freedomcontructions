import React from 'react'
import Solaramcbreadcrum from '../../Components/Solaramcbreadcrum/Solaramcbreadcrum'
import Solaramchero from '../../Components/Solaramchero/Solaramchero'
import Solaramcservice from '../../Components/Solaramcservice/Solaramcservice'
import Solaramcsolarpanels from '../../Components/Solaramcsolarpanels/Solaramcsolarpanels'
import Solaramcsolarpoweroffers from '../../Components/Solaramcsolarpoweroffers/Solaramcsolarpoweroffers'
import Solaramcservices from '../../Components/Solaramcservices/Solaramcservices'
import Solaramcannualmaintenancecost from '../../Components/Solaramcannualmaintenancecost/Solaramcannualmaintenancecost'
import Solaramcfaq from '../../Components/Solaramcfaq/Solaramcfaq'

const Solaramc = () => {
  return (
    <>
    <Solaramcbreadcrum/>
    <Solaramchero/>
    <Solaramcservice/>
    <Solaramcsolarpoweroffers/>
    <Solaramcsolarpanels/>
    <Solaramcservices/>
    <Solaramcannualmaintenancecost/>
    <Solaramcfaq/>
    </>
  )
}

export default Solaramc