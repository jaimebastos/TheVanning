import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, condition, ...rest }) => {
    console.log(rest)
    return (
        <Route {...rest} render={
            props => {
                if (condition) {
                    return <Component {...rest} {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: '/auth/login'
                        }
                    } />
                }
            }
        } />
    )
}

export default ProtectedRoute;