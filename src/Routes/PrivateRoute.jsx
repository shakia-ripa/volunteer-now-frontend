import React, { useContext } from 'react';
import AuthService from '../Utils/auth.utils';
import { Navigate ,useLocation} from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({ children, requiredRole }) => {
    const location = useLocation();
    const {user} = useContext(AuthContext);
    console.log(user);
   
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace  ></Navigate>
    }

    if (user?.role !== requiredRole) {
        return <Navigate to='/unauthorized'></Navigate>
    }
    return children;
};

export default PrivateRoute;