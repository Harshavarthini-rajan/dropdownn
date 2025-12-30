import React from 'react'
import starIcon from '../assets/Star_icon.png'
import time from '../assets/opportunity_time.png'
import experience from '../assets/opportunity_bag.png'
import place from '../assets/opportunity_location.png'
import calender from '../assets/calender_card.png'
import './AppliedJobCard.css'

export const AppliedJobCard = ({ opp }) => {
  return (
    <div className="myjobs-job-card">
      <div className="myjobs-card-header">
        <div>
          <h2 className="myjobs-job-title">{opp.title}</h2>
        </div>
        <span className="menu-dots">⋮</span>
      </div>
      <div className="myjobs-company-sub">
        <p className="myjobs-company-name">{opp.company}<span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> {opp.rating}<span className="Opportunities-divider">|</span><span>{opp.reviews}</span></p>
      </div>

      <div className="Opportunities-job-details">
        <p className='Opportunities-detail-line'><img src={time} className='card-icons' />{opp.type}<span className="Opportunities-divider">|</span>{opp.salary}</p>
        <p className='Opportunities-detail-line'><img src={experience} className='card-icons' />{opp.experience}</p>
        <p className='Opportunities-detail-line'><img src={place} className='card-icons' />{opp.location}</p>
        <p className='Opportunities-detail-line'><img src={calender} className='card-icons' />{opp.posted}<span className="Opportunities-divider">|</span>Openings: {opp.openings}<span className="Opportunities-divider">|</span>Applicants: {opp.applicants}</p>
      </div>

      <div className="Opportunities-job-tags">
        {opp.tags.map((tag, index) => (
          <span key={index} className={`Opportunities-job-tag ${tag.toLowerCase()}`}>
            {tag}
          </span>
        ))}
      </div>

      <hr className="Opportunities-separator" />

      <div className="Opportunities-job-footer">
        <div className='applied-app-status-container'>
          <p className='myjobs-saved-date'>{opp.appliedDate}</p>
          <span className="Opportunities-divider">|</span>
          <span className={`applied-application-status status-${opp.status.type}`}>{opp.status.text}</span>
        </div>

        <div className="Opportunities-job-actions">
          <button className="applied-dis-btn" disabled>Applied</button>
        </div>
      </div>
    </div>
  );
}
