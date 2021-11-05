import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../../../hooks/useFirebase';
import initFirebase from '../LoginAccount/Firebase/firebase.init';

initFirebase()

const PrivateRoute = ({ children, ...rest }) => {
    const {user} = useFirebase()
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;