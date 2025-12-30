import React, { useState } from 'react'
import './CompaniesTab.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Footer } from '../Components-LandingPage/Footer';
import search from '../assets/icon_search.png'
import location from '../assets/icon_location.png'
import tick from '../assets/icon_tick.png'
import starIcon from '../assets/Star_icon.png'
import { CompaniesList } from '../CompaniesList';
import { JHeader } from './JHeader';

/* Below Code is removed after backend integration*/
const companiesList = CompaniesList.slice(0,8)

export const CompaniesTab = () => {
  const navigate = useNavigate();

  return (
    <>
      <JHeader />
      <div className='jobs-tab-search-bar'>
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

      <div className="companies-tab-container">
        <h2 className="carousel-title">Companies for you</h2>
        <div className="companies-tab-grid">
          {companiesList.map((company) => (
            <div key={company.companyId} className="companies-tab-card">
              <div className="companies-tab-logo-container">
                <img src={company.logo} alt={`${company.companyName} logo`} className="companies-tab-logo" />
              </div>
              <h3 className="companies-tab-name">{company.companyName}</h3>
              <div className="companies-tab-rating-reviews">
                <span className="star companies-tab-rating-star"><img src={starIcon} /></span>
                <span className="companies-tab-rating">{company.ratings}</span>
                <span className="companies-tab-separator">|</span>
                <span className="companies-tab-reviews">{company.reviewNo} reviews</span>
              </div>
              <p className="companies-tab-desc">{company.slogan}</p>
              <button className="companies-tab-view-jobs-btn" onClick={()=>navigate(`/Job-portal/jobseeker/companies/${company.companyId}`)}>View Jobs</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}