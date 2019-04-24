/* Modules */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/**
 * Maps routes
 * @param {object} route 
 */
const mapRoute = (route) => {
    if (route.path == '/') {
        return <Route key={route.path} exact path='/' component={route.component} />
    } else {
        return <Route key={route.path} path={route.path} component={route.component} />
    }
};

/**
 * Root
 */
const Root = ({ routes }) => {
    return (
        <Router>
            { routes.map(route => mapRoute(route)) }
        </Router>
    );
};

export default Root;