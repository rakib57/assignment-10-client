import React, { useEffect, useState } from 'react';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import NavigationBar from '../NavigationBar/NavigationBar';

const Activities = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/sector')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="row">
                {
                    activities.map(activity => <ActivityDetails activity={activity}></ActivityDetails>)
                }
            </div>
        </div>
    );
};

export default Activities;