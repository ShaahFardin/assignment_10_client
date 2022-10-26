import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div style={{marginTop:"200px"}}><h1>Loading..</h1></div>
    }
    if(!user ){
        return <Navigate to="/login" replace state={{ from: location }} ></Navigate>;
    }
      return children;
}
export default PrivateRoute;