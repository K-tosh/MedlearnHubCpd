import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('/api/courses')
            .then(response => setCourses(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Courses</h1>
            <Button variant="contained" component={Link} to="/add-course">Add New Course</Button>
            <ul>
                {courses.map(course => (
                    <li key={course._id}>
                        {course.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;
