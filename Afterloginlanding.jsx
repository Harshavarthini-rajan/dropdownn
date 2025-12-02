import React, { useState } from 'react'
import './Afterloginlanding.css'
import { Link } from 'react-router-dom';
import { JHeader } from './JHeader';
import { JMainsection } from './JMainsection';
import { Jobsbycompany } from './Jobsbycompany';
import { Opportunities } from './Opportunities';
import { Footer } from '../Components-LandingPage/Footer';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import bell_dot from '../assets/header_bell_dot.png'
import profile from '../assets/header_profile.png'
import { JNotification } from './JNotification';
import { useNavigate } from "react-router-dom";
import { AvatarMenu } from "./AvatarMenu";

/* Below Code is removed after backend integration*/
const notificationsData = [
    {
        id: 1,
        text: 'Recruiter viewed your profile',
        time: 'Today, 10:45 am',
        isNew: true,
    },
    {
        id: 2,
        text: 'You have an interview invitation from XYZ Pvt Ltd',
        time: 'Yesterday, 4:20 pm',
        isNew: true,
    },
    {
        id: 3,
        text: 'Application submitted successfully for UI/UX Designer',
        time: 'Yesterday, 4:20 pm',
        isNew: false,
    },
    {
        id: 4,
        text: 'Your profile is 90% complete — finish to get more calls',
        time: 'Yesterday, 4:20 pm',
        isNew: false,
    },
    {
        id: 5,
        text: '5 new jobs match your preferences',
        time: '17 Aug 2025, 9:30 am',
        isNew: false,
    },
    {
        id: 6,
        text: '5 new jobs match your preferences',
        time: '17 Aug 2025, 9:30 am',
        isNew: false,
    },
];
export { notificationsData };

export const Afterloginlanding = () => {

    const [showNotification, setShowNotification] = useState(false);
    const newNotificationsCount = notificationsData.filter(n => n.isNew).length;
    const navigate = useNavigate();

    return (
        <>
            <header className="header">
                <div className="logo">job portal</div>
                <nav className="nav-links">
                    <a href="#" className="nav-item nav-active" >Home</a>
                    <Link to="/Job-portal/jobseeker/jobs" className="nav-item" >Jobs</Link>
                    <Link to="/Job-portal/jobseeker/companies" className="nav-item" >Companies</Link>
                </nav>

                <div className="auth-links">
                    <Link to="/Job-portal/jobseeker/myjobs"><img className='header-icons' src={breifcase} alt='My Jobs' /></Link>

                    <div><img className='header-icons' src={chat} alt='Messages' /></div>

                    <div onClick={() => setShowNotification(!showNotification)}><img className='header-icons' src={newNotificationsCount > 0 ? bell_dot : bell} alt='Notifications' /></div>
                    
                    <AvatarMenu />
                </div>
                <JNotification notificationsData={notificationsData} showNotification={showNotification} setShowNotification={setShowNotification} />   
            </header>
            <JMainsection />
            <section className='Opportunities-section'>
                <h2 className='Opportunities-title'>Opportunities Just For You</h2>
                <Opportunities />
                <button onClick={() => navigate('/Job-portal/jobseeker/jobs')} className="Opportunities-view-more-btn">View More</button>
            </section>
            <Jobsbycompany />
            <Footer />
        </>
    )
}