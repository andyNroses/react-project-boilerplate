/* Modules */
import React, { Suspense, lazy } from 'react';
import Loading from '../../components/Loading';
const Todos = lazy(() => import('../../components/Todos'));

/**
 * Home
 */
const Home = () => {
    return(
        <Suspense fallback={<Loading />}>
            <h1> Home</h1>
            <Todos />
        </Suspense>
    );
}

export default Home;