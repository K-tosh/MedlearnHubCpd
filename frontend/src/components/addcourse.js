import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

const AddCourse = () => {
    const [course, setCourse] = useState({
        title: '',
        description: '',
        category: '',
        content: '',
        status: '',
    });

    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/courses', course)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>Add New Course</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    name="title"
                    value={course.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    name="description"
                    value={course.description}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Category"
                    name="category"
                    value={course.category}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Content"
                    name="content"
                    value={course.content}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Status"
                    name="status"
                    value={course.status}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit">
                    Add Course
                </Button>
            </form>
        </div>
    );
};

export default AddCourse;
