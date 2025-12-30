import React, { useState } from 'react'
import './Opportunities.css'
import { OpportunitiesCard } from "./OpportunitiesCard";
import Apple from '../assets/Apple-Logo.png'
import Wipro from '../assets/WIT.png'
import CTS from '../assets/CTSH_BIG.png'
import Amazon from '../assets/AMZN_BIG.png'
import Google from '../assets/GOOG.png'
import Infy from '../assets/INFY_BIG.png'
import Tcs from '../assets/TCS.png'
import META from '../assets/META_BIG.png'
import { useNavigate } from "react-router-dom";
import { Joblist } from '../JobList';


export const Opportunities = () => {
  const navigate = useNavigate();
  const [displayCount, setDisplayCount] = useState(8);
  const itemsToDisplay = Joblist.slice(0, displayCount);
  return (
      <div className="Opportunities-job-list">
        {itemsToDisplay.map((job, index) => (
          <OpportunitiesCard key={index} job={job} />
        ))}
      </div>
  )
}
