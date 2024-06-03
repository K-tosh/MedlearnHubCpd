import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';

function App() {
    return (
        <Router>
            <Navbar />
            <Container>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/courses" component={Courses} />
                    <Route path="/add-course" component={AddCourse} />
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
