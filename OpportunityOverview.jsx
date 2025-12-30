import React from 'react'
import { JHeader } from './JHeader';
import { Footer } from '../Components-LandingPage/Footer';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './OpportunityOverview.css'
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import profile from '../assets/header_profile.png'
import search from '../assets/icon_search.png'
import location from '../assets/icon_location.png'
import tick from '../assets/icon_tick.png'
import starIcon from '../assets/Star_icon.png'
import time from '../assets/opportunity_time.png'
import experience from '../assets/opportunity_bag.png'
import place from '../assets/opportunity_location.png'
import twitter from '../assets/socials-x.png'
import linkedin from '../assets/socials-linkedin.png'
import facebook from '../assets/socials-facebook.png'
import formatPostedDate from './OpportunitiesCard';
import { Joblist } from '../JobList';

export const OpportunityOverview = () => {
  const navigate = useNavigate();

  const { id } = useParams()
  const job = Joblist.find(singleJob => singleJob.id === id);

  const similarJobs = Joblist.filter((similarJob) => {
    return similarJob.id !== job.id && similarJob.Department === job.Department;
  });

  const limitedSimilarJob = similarJobs.slice(0, 9);

  return (
    <>
      <header className="header">
        <div className="logo">job portal</div>
        <nav className="nav-links">
          <Link to="/Job-portal/jobseeker/" className="nav-item" >Home</Link>
          <Link to="/Job-portal/jobseeker/jobs" className="nav-item" >Jobs</Link>
          <Link to="/Job-portal/jobseeker/companies" className="nav-item" >Companies</Link>
        </nav>

        <div className="auth-links">
          <Link to="/Job-portal/jobseeker/myjobs"><img className='header-icons' src={breifcase} alt='My Jobs' /></Link>
          <div><img className='header-icons' src={chat} alt='Messages' /></div>
          <div><img className='header-icons' src={bell} alt='Notifications' /></div>
          <div><img className='header-icons' src={profile} alt='My Profile' /></div>
        </div>
      </header>

      <div className='opp-overview-content'>
        <div className='search-backbtn-container'>
          <button className="back-btn" onClick={() => navigate(-1)}>Back</button>

          <div className="search-bar">
            <div className="search-field">
              <span><img src={search} className="icon-size" alt="search_icon" /></span>
              <input type="text" placeholder="Search by Skills, company or job title" />
            </div>
            <div className="separator"></div>

            <div className="search-field">
              <span><img src={location} className="icon-size" alt="location_icon" /></span>
              <input type="text" placeholder="Enter Location" />
            </div>
            <div className="separator"></div>

            <div className="search-field">
              <span><img src={tick} className="icon-size" alt="search_tick" /></span>
              <select defaultValue="" required>
                <option value="" disabled hidden>Enter Experience</option>
                <option value="fresher">Fresher</option>
                <option value="1-3">1-3 Years</option>
                <option value="3-5">3-5 Years</option>
                <option value="5+">5+ Years</option>
              </select>
            </div>

            <button className="search-button">Search</button>
          </div>
        </div>

        <div className='opp-overview-main'>
          <div className="opp-job-main">
            {/* Job Header  */}
            <div className="opp-overview-job-card">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="opp-topcard-job-title">{job.title}</h2>
                  <h5 className="Opportunities-job-company">{job.company} <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> {job.ratings} <span className="Opportunities-divider">|</span><span className="opp-reviews"> {job.reviewNo} Reviews</span></h5>
                </div>
                {job.logo ? (<img src={job.logo} alt={job.company} className="Opportunities-job-logo" />) : (<div className="Opportunities-job-logo-placeholder">{job.company.charAt(0).toUpperCase()}</div>)}
              </div>

              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'><img src={time} className='card-icons' />{job.duration}<span className="Opportunities-divider">|</span>₹ {job.salary} Lpa</p>
                <p className='Opportunities-detail-line'><img src={experience} className='card-icons' />{job.experience} years of experience</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />{job.location}</p>
              </div>

              <div className='Opportunities-details-bottom'>
                <div className="Opportunities-job-tags">
                  {job.tags.map((tag, index) => (
                    <span key={index} className={`Opportunities-job-tag ${tag.toLowerCase()}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="Opportunities-job-type">
                  {job.WorkType}
                </div>
              </div>

              <hr className="Opportunities-separator" />

              <div className="Opportunities-job-footer">
                <div className="Opportunities-job-meta">
                  <p>{formatPostedDate(job.posted)} <span className="Opportunities-divider">|</span> Openings: {job.openings} <span className="Opportunities-divider">|</span> Applicants: {job.applicants}</p>
                </div>

                <div className="Opportunities-job-actions">
                  <button className="Opportunities-save-btn">Save</button>
                  <button className="Opportunities-apply-btn">Apply</button>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="opp-job-details-card">
              {/* Job Highlights */}
              <div className="opp-job-highlights">
                <h3>Job Highlights</h3>
                <ul>
                  {job.JobHighlights.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              <h3>Company Overview</h3>
              <p>
                {job.companyOverview}
              </p>

              <h3>Job Description</h3>
              <p>
                {job.jobDescription}
              </p>

              <h3>Responsibilities</h3>
              <ul>
                {job.Responsibilities.map((item, i) => <li key={i}>{item}</li>)}
              </ul>

              <h3>Key Details:</h3>
              <p><strong>Role:</strong> {job.title}</p>
              <p><strong>Industry Type:</strong> {job.IndustryType}</p>
              <p><strong>Department:</strong> {job.Department}</p>
              <p><strong>Job Type:</strong> {job.WorkType}</p>
              <p><strong>Location:</strong> {job.location}</p>

              <h3>Key Skills</h3>
              <div className="opp-key-skills-container">
                {job.KeySkills.map((item, i) => <span key={i}>{item}</span>)}
              </div>

              <hr className="Opportunities-separator" />

              <div className="opp-share-job">
                <div>
                  <p>Share This job</p>
                  <div className='opp-socials'>
                    <div><img src={linkedin} className='opp-socials-icon' alt="linkedin" /></div>
                    <div><img src={facebook} className='opp-socials-icon' alt="facebook" /></div>
                    <div><img src={twitter} className='opp-socials-icon' alt="twitter" /></div>
                  </div>
                </div>
                <button className="opp-report-btn">Report this job</button>
              </div>
            </div>
          </div>
          {/* Similar Jobs */}
          <div className="opp-job-sidebar">
            <h3>Similar Jobs</h3>
            {limitedSimilarJob.length > 0 ? limitedSimilarJob.map((sim) => (
              <div key={sim.id} className="opp-similar-job">
                <div className="Opportunities-job-header">
                  <div>
                    <h2 className="similar-job-title">{sim.title}</h2>
                    <p className="similar-job-company">{sim.company} <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> {sim.ratings} <span className="Opportunities-divider">|</span><span> {sim.reviewNo} reviews</span></p>
                  </div>
                  {sim.logo ? (<img src={sim.logo} alt={sim.company} className="Opportunities-job-logo" />) : (<div className="Opportunities-job-logo-placeholder">{sim.company.charAt(0).toUpperCase()}</div>)}
                </div>
                <div className="Opportunities-job-details">
                  <p className='Opportunities-detail-line'>{sim.tags} - {sim.experience} years of experience</p>
                  <p className='Opportunities-detail-line'><img src={place} className='card-icons' />{sim.location}</p>
                </div>
                <div className="similar-job-footer">
                  <div className="Opportunities-job-type">
                    {sim.WorkType}
                  </div>
                  <p className='similar-job-footer-posted'>
                    {formatPostedDate(sim.posted)}
                  </p>
                </div>
              </div>
            )) : (
              <div>
                <p>Currently no similiar jobs available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}
