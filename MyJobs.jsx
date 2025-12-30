import React, { useState } from 'react'
import './MyJobs.css'
import { Footer } from '../Components-LandingPage/Footer';
import { Link } from 'react-router-dom';
import { SavedJobsCard } from './SavedJobsCard';
import { AppliedJobCard } from './AppliedJobCard';
import { JHeader } from './JHeader';

/* Below Code is removed after backend integration*/
const savedJobsList = [
    {
        id: 1,
        title: 'UX/UI Designer',
        company: 'Creative Minds Studio',
        rating: '3.4',
        reviews: '522 Reviews',
        type: '3 months duration',
        salary: '₹ 20,000 - 25,000/month',
        experience: '0 to 1 year of experience',
        location: 'Chennai',
        posted: 'Posted: 3 days ago',
        openings: 2,
        applicants: 100,
        tags: ['Internship'],
        savedDate: 'Saved on 1 Aug',
    },
    {
        id: 2,
        title: 'UX/UI Designer',
        company: 'Global Brands Co.',
        rating: '3.2',
        reviews: '412 Reviews',
        type: '3 months duration',
        salary: '₹ 15,000 - 20,000/month',
        experience: '0 to 1 year of experience',
        location: 'Chennai',
        posted: 'Posted: 3 days ago',
        openings: 2,
        applicants: 100,
        tags: ['Full-Time'],
        savedDate: 'Saved on 31 July',
    },
    {
        id: 3,
        title: 'UX Designer',
        company: 'Tech Solutions Inc.',
        rating: '3.4',
        reviews: '522 Reviews',
        type: '3 months duration',
        salary: '₹ 20,000 - 25,000/month',
        experience: '0 to 1 year of experience',
        location: 'Chennai',
        posted: 'Posted: 1 week ago',
        openings: 1,
        applicants: 120,
        tags: ['Full-Time'],
        savedDate: 'Saved on 22 July',
    },
    {
        id: 4,
        title: 'UX/UI Designer',
        company: 'Global Brands Co.',
        rating: '3.2',
        reviews: '412 Reviews',
        type: '3 months duration',
        salary: '₹ 15,000 - 20,000/month',
        experience: '0 to 1 year of experience',
        location: 'Chennai',
        posted: 'Posted: 3 days ago',
        openings: 3,
        applicants: 80,
        tags: ['Internship'],
        savedDate: 'Saved on 18 July',
    },
];

/* Below Code is removed after backend integration*/
const appliedJobsList = [
    {
        id: 1,
        title: 'UX/UI Designer',
        company: 'Creative Minds Studio',
        rating: '3.4',
        reviews: '522 Reviews',
        type: '3 months duration',
        salary: '₹ 20,000 - 25,000/month',
        experience: '0 to 1 year of experience',
        location: 'Chennai',
        posted: 'Posted: 3 days ago',
        openings: 2,
        applicants: 100,
        tags: ['Full-Time'],
        appliedDate: 'Applied on 1 Aug',
        status: { text: 'Hiring in Progress', type: 'progress' },
    },
    {
        id: 2,
        title: 'UX/UI Designer',
        company: 'Global Brands Co.',
        rating: '3.2',
        reviews: '412 Reviews',
        type: '3 months duration',
        salary: '₹ 12,000 - 15,000/month',
        experience: '0 to 1 year of experience',
        location: 'Chennai',
        posted: 'Posted: 3 days ago',
        openings: 2,
        applicants: 100,
        tags: ['Internship'],
        appliedDate: 'Applied on 31 July',
        status: { text: 'Reviewing Applications', type: 'reviewing' },
    },
    {
        id: 3,
        title: 'UX Designer',
        company: 'Tech Solutions Inc.',
        rating: '3.4',
        reviews: '522 Reviews',
        type: '3 months duration',
        salary: '₹ 20,000 - 25,000/month',
        experience: '0 to 1 year of experience',
        location: 'Chennai',
        posted: 'Posted: 1 week ago',
        openings: 1,
        applicants: 100,
        tags: ['Full-Time'],
        appliedDate: 'Applied on 22 July',
        status: { text: 'Hiring Done', type: 'done' },
    },
    {
        id: 4,
        title: 'UX/UI Designer',
        company: 'Global Brands Co.',
        rating: '3.2',
        reviews: '412 Reviews',
        type: '3 months duration',
        salary: '₹ 15,000 - 20,000/month',
        experience: '0 to 1 year of experience',
        location: 'Chennai',
        posted: 'Posted: 3 days ago',
        openings: 3,
        applicants: 85,
        tags: ['Full-Time'],
        appliedDate: 'Applied on 18 July',
        status: { text: 'Hiring Done', type: 'done' },
    },
];

export const MyJobs = () => {
    const [activeTab, setActiveTab] = useState("saved");

    return (
        <>
            <JHeader />
            <main>
                <div className='myjobs-main-info'>
                    <h1>"My Jobs"</h1>
                    <p>View and manage the jobs you've saved, applied for, or shortlisted—all in one place.</p>
                </div>

                <div>
                    <div className="toggle-myjobs-main">
                        <button
                            className={`myjobs-select ${activeTab === "saved" ? "active" : ""}`}
                            onClick={() => setActiveTab("saved")}
                        >
                            Saved
                        </button>
                        <button
                            className={`myjobs-select ${activeTab === "applied" ? "active" : ""}`}
                            onClick={() => setActiveTab("applied")}
                        >
                            Applied
                        </button>
                    </div>

                    {activeTab === "saved" ?
                        <div className="my-jobs-common-container">
                            {savedJobsList.map((job) => (
                                <SavedJobsCard key={job.id} job={job} />
                            ))}
                        </div>
                        :
                        <div className="my-jobs-common-container">
                            {appliedJobsList.map((opp) => (
                                <AppliedJobCard key={opp.id} opp={opp} />
                            ))}
                        </div>}

                    {(activeTab === "saved" && savedJobsList.length === 0) ?
                        <div className='toggle-no-my-jobs'>
                            <h2>No jobs saved yet</h2>
                            <p>Jobs you save appear here</p>
                        </div> : ""}
                    {(activeTab === "applied" && appliedJobsList.length === 0) ?
                        <div className='toggle-no-my-jobs'>
                            <h2>No jobs applied yet</h2>
                            <p>Jobs you apply appear here</p>
                        </div> : ""}
                </div>
            </main>

            <Footer />
        </>
    )
}