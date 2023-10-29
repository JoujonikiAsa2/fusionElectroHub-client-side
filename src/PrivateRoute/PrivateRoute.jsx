import PropTypes from 'prop-types'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    
    // Set location where to redirect
    const location = useLocation()

    if(loading){
        return <span className='loading loading-spinner loading-lg'></span>
    }

    if(user){
        return children
    }
    return (
        <Navigate state={location.pathname} to='/signIn'></Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;