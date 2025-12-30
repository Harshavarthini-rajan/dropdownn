import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

export const Header = () => {
  const [activeItem, setActiveItem] = React.useState("Home");

  const handleNavClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <>
    <header className="header">
    <div className="logo">job portal</div>
    <nav className="nav-links">
      <a href="#" className={activeItem === "Home" ? "nav-item nav-active" : "nav-item"} onClick={()=>handleNavClick("Home")}>Home</a>
      <a href="#" className={activeItem === "Jobs" ? "nav-item nav-active" : "nav-item"} onClick={()=>handleNavClick("Jobs")}>Jobs</a>
      <a href="#" className={activeItem === "Companies" ? "nav-item nav-active" : "nav-item"} onClick={()=>handleNavClick("Companies")}>Companies</a>
    </nav>

    <div className="auth-links">
      <Link to="/Job-portal/jobseeker/login" className="login-btn">Login</Link>
      <Link to="/Job-portal/jobseeker/signup" className="signup-btn">Sign up</Link>
      <div className="separator"></div>
      <Link to="/Job-portal/employer/login" className="emp-log-link">For Employers</Link>
    </div>
    </header>
    </>
  )
}
