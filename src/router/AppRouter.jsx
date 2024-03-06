import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import HomePage from '../page/home/HomePage';
import RoutesEnum from './AppRoutes';
import ErrorPage from '../page/Error/ErrorPage'

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [{
            element: <ErrorPage name={'Not implemented!'} message={'This page is not ready for now!'} />,
            index: true
        },
        {
            path: '/:tabName',
            element: <HomePage />
        }
        ],
    }
]);

export default AppRouter;