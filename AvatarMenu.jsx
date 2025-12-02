import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import avatarIcon from "../assets/header_profile.png";
import "./AvatarMenu.css";
import settingsIcon from "../assets/icon_settings.png";

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
          <Link to="/profile" className="menu-item">
            <span>👤</span> Profile
          </Link>

          <Link to="/reviews" className="menu-item">
            <span>⭐</span> My reviews
          </Link>

          <Link to="/settings" className="menu-item">
            <span>⚙️</span> Settings
          </Link>

          <Link to="/help" className="menu-item">
            <span>❓</span> Help Centre
          </Link>

          <div className="menu-divider"></div>

          <button className="menu-item logout-btn">Logout</button>
        </div>
      )}
    </div>
  );
};
