// Harshavarthini

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import avatarIcon from "../assets/header_profile.png";
import profileIcon from "../assets/icon_profile.png";
import reviewIcon from "../assets/icon_reviews.png";
import settingsIcon from "../assets/icon_settings.png";
import helpIcon from "../assets/icon_help.png";
import "./AvatarMenu.css";

export const AvatarMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="avatar-container" ref={menuRef}>

      <img
        src={avatarIcon}
        alt="avatar"
        className="avatar-icon"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="avatar-menu">
          <Link to="/Job-portal/jobseeker/myprofile" className="menu-item">
            <img src={profileIcon} className="menu-icon" alt="profile" />
            Profile
          </Link>

          <Link to="/Job-portal/jobseeker/reviews" className="menu-item">
            <img src={reviewIcon} className="menu-icon" alt="reviews" />
            My reviews
          </Link>

          <Link to="/Job-portal/jobseeker/settings" className="menu-item">
            <img src={settingsIcon} className="menu-icon" alt="settings" />
            Settings
          </Link>

          <Link to="/Job-portal/jobseeker/help" className="menu-item">
            <img src={helpIcon} className="menu-icon" alt="help" />
            Help Centre
          </Link>

          <div className="menu-divider"></div>

          <button className="menu-item logout-btn">Logout</button>
        </div>
      )}
    </div>
  );
};
