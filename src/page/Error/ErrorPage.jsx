import React from 'react';
import { useRouteError } from 'react-router-dom';
import './ErrorPage.scss';
import Header from '../../component/Header/Header';

const ErrorPage = ({ name, message }) => {
    const error = useRouteError()

    return (
        <>
            {error ? <Header /> : null}
            <div className='error'>
                {error ? (
                    <>
                        <h1>{error.status}</h1>
                        <h2>{error.statusText}</h2>
                        <p>{error.message}</p>
                    </>
                ) : (
                    <>
                        <h1>{name}</h1>
                        <p>{message}</p>
                    </>
                )}
            </div>

        </>
    );
};

export default ErrorPage;
