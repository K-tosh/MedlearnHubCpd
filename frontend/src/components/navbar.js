import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Admin Dashboard
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Dashboard
                </Button>
                <Button color="inherit" component={Link} to="/courses">
                    Courses
                </Button>
                <Button color="inherit" component={Link} to="/add-course">
                    Add Course
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
