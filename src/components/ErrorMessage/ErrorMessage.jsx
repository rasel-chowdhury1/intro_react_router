import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorMessage = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Ooops</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>Error statusText: {error.statusText}</p>
            <p>Error status: {error.status}</p>
        </div>
    );
};

export default ErrorMessage;