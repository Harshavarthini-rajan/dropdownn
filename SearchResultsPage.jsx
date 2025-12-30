import React, { useState, useMemo } from 'react'
import { JHeader } from './JHeader'
import search from '../assets/icon_search.png'
import location from '../assets/icon_location.png'
import tick from '../assets/icon_tick.png'
import './SearchResultsPage.css'
import { Joblist } from '../JobList'
import SearchResultsCard from './SearchResultsCard'
import { Footer } from '../Components-LandingPage/Footer'
import formatPostedDate from './OpportunitiesCard'
 
 
 
const SearchResultsPage = () => {
 
const countPropertyOccurrences = (data, property) => {
  return data.reduce((acc, item) => {
    const value = item[property];
    // Create a safe key: lowercase the value or use a fallback
    const key = value ? value.toLowerCase() : `Unknown ${property}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
};
 
const educationCounts = Joblist.reduce((acc, item) => {
  item.EducationRequired.forEach((edu )=> {
    // Normalize to lowercase to avoid "MBA" vs "mba" issues
    const degree = edu.toLowerCase();
    acc[degree] = (acc[degree] || 0) + 1;
  });
  return acc;
}, {});
 
 
// Usage:
  const locationCounts = countPropertyOccurrences(Joblist, 'location');
  const workTypeCounts = countPropertyOccurrences(Joblist, 'WorkType');
  const PostedbyCounts = countPropertyOccurrences(Joblist,'PostedBy')
  const CompanyCounts = countPropertyOccurrences(Joblist,'company');
 
 
 
// Convert to arrays if needed for charts or UI components
  const locationArray = Object.entries(locationCounts);
  const WorkTypeArray = Object.entries(workTypeCounts);
  const PostedbyArray = Object.entries(PostedbyCounts);
  const TopcompanyArray = Object.entries(CompanyCounts);
  const checkboxList = Object.entries(educationCounts);
 
 
 
 
 
  const [locationFilters, setLocationFilters] = useState(locationArray.slice(0,5));
  const [workTypeFilters, setWorkTypeFilters] = useState(WorkTypeArray);
  const [PostedbyFilter, setPostedbyFilter] = useState(PostedbyArray);
  const [CompanyFilter, setCompanyFilter] = useState(TopcompanyArray.slice(0,5));
  const [EducationFilter, setEducationFilter] = useState(checkboxList.slice(0,5));
 
 
 
  const [TopCompanyExpanded, setTopCompanyExpanded] = useState(false);
  const [LocationExpanded, setLocationExpanded] = useState(false);
 
 
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedWorkType, setselectedWorkType] = useState([]);
  const [SelectedPostedby, setSelectedPostedby] = useState([]);
  const [SelectedCompany, setSelectedCompany] = useState([]);
  const [SelectedEducation, setSelectedEducation] = useState([]);  
 
  const HandleClear=()=>{
    setSelectedLocations([]);
    setselectedWorkType([]);
    setSelectedPostedby([]);
    setSelectedCompany([]);
    setSelectedEducation([]);
  }
 
  const handleLocationViewMore = () => {
    if (LocationExpanded) {setLocationFilters(locationArray.slice(0, 5));}
    else {setLocationFilters(locationArray)} setLocationExpanded(!LocationExpanded);
  }
  const handleCompanyViewMore = () => {
    if (TopCompanyExpanded) {setCompanyFilter(TopcompanyArray.slice(0, 5));}
    else {setCompanyFilter(TopcompanyArray)} setTopCompanyExpanded(!TopCompanyExpanded);
  }
 
 
 
  const handleLocationChange = (event) => {
    const location = event.target.value;
    const isChecked = event.target.checked;
 
    setSelectedLocations(prevLocations => {
      if (isChecked) {
        return [...prevLocations, location];
      } else {
       
        return prevLocations.filter(loc => loc !== location);
      }
    });
  };
  const HandleWorkType = (event) => {
    const WorkType = event.target.value;
    const isChecked = event.target.checked;
 
    setselectedWorkType(prevWorkType => {
      if (isChecked) {
       
        return [...prevWorkType, WorkType];
      } else {
       
        return prevWorkType.filter(work => work !== WorkType);
      }
    });
  };
  const HandlePostedby = (event) => {
    const postedby = event.target.value;
    const isChecked = event.target.checked;
 
    setSelectedPostedby(prevpostedby => {
      if (isChecked) {
       
        return [...prevpostedby, postedby];
      } else {
       
        return prevpostedby.filter(post => post !== postedby);
      }
    });
  };
  const HandleCompany = (event) => {
    const Company = event.target.value;
    const isChecked = event.target.checked;
 
    setSelectedCompany(prevCompany => {
      if (isChecked) {
       
        return [...prevCompany, Company];
      } else {
       
        return prevCompany.filter(com => com !== Company);
      }
    });
  };
  const HandleEducation = (event) => {
    const Education = event.target.value;
    const isChecked = event.target.checked;
 
    setSelectedEducation(prevEducation => {
      if (isChecked) {
       
        return [...prevEducation, Education];
      } else {
       
        return prevEducation.filter(edu => edu !== Education);
      }
    });
  };
 
 
 
  const filteredJobs = useMemo(() => {
 
  return Joblist.filter((job) => {
    // Location Filter
    const jobLocation = job.location ? job.location.toLowerCase() : 'unknown location';
    const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(jobLocation);
 
    // Work Type Filter
    const jobWorkType = job.WorkType ? job.WorkType.toLowerCase() : 'unknown worktype';
    const matchesWorkType = selectedWorkType.length === 0 || selectedWorkType.includes(jobWorkType);
 
   // Postedby Filter
    const JobPostedby = job.PostedBy ? job.PostedBy.toLowerCase() : 'unknown Postedby';
    const matchesPostedby = SelectedPostedby.length === 0 || SelectedPostedby.includes(JobPostedby);
 
    // // TopCompany Filter
    const JobCompany = job.company ? job.company.toLowerCase() : 'unknown company';
    const matchesCompany = SelectedCompany.length === 0 || SelectedCompany.includes(JobCompany);
 
    // const JobEducation = job.EducationRequired.forEach(edu=>edu ? edu.toLowerCase() : "UnKnown Edu");
    // const matchesEducation = SelectedEducation.length === 0 || SelectedEducation.includes(JobEducation);
 
    const matchesEducation = SelectedEducation.length === 0 || job.EducationRequired.some(edu => SelectedEducation.includes(edu.toLowerCase()))
 
   
    return matchesLocation && matchesWorkType && matchesPostedby && matchesCompany && matchesEducation ;
  });
}, [Joblist, selectedLocations, selectedWorkType,SelectedPostedby,SelectedCompany,SelectedEducation]);
 
 
 
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
 
          <button onClick={() => navigate('/Job-portal/jobseeker/myprofile/SearchResults')} className="search-button">Search</button>
        </div>
      </div>
      <div className='search-result-title'>
        <h1 > Jobs Based On Your Search</h1>
      </div>
 
 
 
      <div className='Mainsec-Search-Res'>
        <div className='Aside'>
          <div className='aside-header'>
            <p className='filter-heading'>Apply Filters</p>
            <p onClick={HandleClear} className='filter-applied'>Clear Filters</p>
          </div>
          <div className='Search-Worktype-Container'>
           
            <h4>Work Type</h4>
            {workTypeFilters.map(([work, workc]) => {
              const WorkType = work.charAt(0).toUpperCase() + work.slice(1);
              return (
                <div key={work}>
                  <label htmlFor={`WorkType-${work}`} className="location-checkbox-label">
                    <input
                      type="checkbox"
                      id={`WorkType-${work}`}
                      name="WorkType"
                      value={work}
                      onChange={HandleWorkType}
                      checked={selectedWorkType.includes(work)}
                    />
                    <span className="location-text">
                      {WorkType}
                      {workc > 1 && ` (${workc})`}
                    </span>
                  </label>
                </div>
              );
            })}
          </div>
 
          <div className='Search-Worktype-Container'>
            <h4>Location</h4>
            {locationFilters.map(([locationKey, count]) => {
              const displayLocation = locationKey.charAt(0).toUpperCase() + locationKey.slice(1);
              return (
                <div key={locationKey}>
                  <label htmlFor={`location-${locationKey}`} className="location-checkbox-label">
                    <input
                      type="checkbox"
                      id={`location-${locationKey}`}
                      name="location"
                      value={locationKey}
                      onChange={handleLocationChange}
                      checked={selectedLocations.includes(locationKey)}
                    />
                    <span className="location-text">
                      {displayLocation}
                      {count > 1 && ` (${count})`}
                    </span>
                  </label>
                </div>
              );
            })}
 
 
 
            <div className='viewmore-cont'>
              <button onClick={handleLocationViewMore} className='viewmore-btn'>{LocationExpanded ? 'View Less' : 'View More'}</button>
            </div>
 
 
          </div>
 
          <div className='Search-Worktype-Container'>
            <h4>Posted by</h4>
            {PostedbyFilter.map(([post, count]) => {  
              const Postedby = post.charAt(0).toUpperCase() + post.slice(1);
              return (
                <div key={post}>
                  <label htmlFor={`postedby-${post}`} className="location-checkbox-label">
                    <input
                      type="checkbox"
                      id={`postedby-${post}`}
                      name="postedby"
                      value={post}
                      onChange={HandlePostedby}
                      checked={SelectedPostedby.includes(post)}
                    />
                    <span className="location-text">
                      {Postedby}
                      {count > 1 && ` (${count})`}
                    </span>
                  </label>
                </div>
              );
            })}
          </div>
 
          <div className='Search-Worktype-Container'>
            <h4>Top Companies</h4>
            {CompanyFilter.map(([com, count]) => {
              const Company = com.charAt(0).toUpperCase() + com.slice(1);
              return (
                <div key={com}>
                  <label htmlFor={`Company-${com}`} className="location-checkbox-label">  
                    <input
                      type="checkbox"
                      id={`Company-${com}`}
                      name="Company"
                      value={com}
                      onChange={HandleCompany}
                      checked={SelectedCompany.includes(com)}
                    />
                    <span className="location-text">
                      {Company}
                      {count > 1 && ` (${count})`}
                    </span>
                  </label>
                </div>
              );
            })}
            <div className='viewmore-cont'>
              <button onClick={handleCompanyViewMore} className='viewmore-btn'>{ TopCompanyExpanded ? 'View Less' : 'View More'}</button>
            </div>
 
          </div>
 
          <div className='Search-Worktype-Container'>
            <h4>Education</h4>
            {EducationFilter.map(([edu,count]) => {
              const Education = edu.charAt(0).toUpperCase() + edu.slice(1);
              return (
                <div key={edu}>
                  <label htmlFor={`Education-${edu}`} className="location-checkbox-label">  
                    <input
                      type="checkbox"
                      id={`Education-${edu}`}
                      name="Education"
                      value={edu}
                      onChange={HandleEducation}
                      checked={SelectedEducation.includes(edu)}
                    />
                    <span className="location-text">
                      {Education}
                      {count > 1 && `(${count})`}
                    </span>
                  </label>
                </div>
              );
            })}
            <div className='viewmore-cont'>
              <button onClick={handleCompanyViewMore} className='viewmore-btn'>{ TopCompanyExpanded ? 'View Less' : 'View More'}</button>
            </div>
 
          </div>
        </div>
 
        <div className='maincontent'>
          <div className='SortbySearch'>
            <p className='Sortbutton'>Sortby</p>
 
          </div>
          <h2>Showing {filteredJobs.length} Jobs</h2>
          {/* <h4>Search Results:</h4> */}
          {filteredJobs.map((jb, index) =>
            <div key={index} className='jobs-card'>
              <SearchResultsCard job={jb} />
            </div>
          )}
 
        </div>
      </div>
 
      <Footer />
    </>
  )
}
 
export default SearchResultsPage
 