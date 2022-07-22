import React from 'react'
import { useState } from 'react';
import { LoginComponent } from './LoginComponent';

export const SecureComponent = ({ securedComponent }) => {
    let jwt = localStorage.getItem("jwt");
    let [isLoading, setIsLoading] = useState(true);
    let [validToken, setValidToken] = useState(null);

    fetch("http://localhost:8080/api/auth/token/validate?jwt=" + jwt)
        .then((result) => result.json())
        .then(
            (result) => {
                setIsLoading(false);
                setValidToken(result);
                console.log("TOKEN VALID: " + JSON.stringify(result));
            },
            (error) => {
                setIsLoading(false);
                setValidToken(false);
            }
        )

    return (
        isLoading ? <div>Loading...</div> : validToken ? <div>{securedComponent}</div> : <LoginComponent />
    )
}
