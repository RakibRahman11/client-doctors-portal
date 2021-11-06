import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../../../../hooks/useFirebase';
// import useAuth from '../../../../hooks/useAuth';
import initFirebase from '../../../LoginInformation/LoginAccount/Firebase/firebase.init';

initFirebase()

const AdminRoute = ({ children, ...rest }) => {
    const {user, admin} = useFirebase()
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;