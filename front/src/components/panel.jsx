import React, { useContext } from 'react'
import UserContext from '../context/UserContext';
import DashboardAdmin from './dashboardAdmin';
import Dashboard from './dashboard';

const Panel = () => {

    const { user } = useContext(UserContext);
    console.log(user.role)
    return (
        <>
            {
                //usuario común
                user.role === '2' ? (
                    <Dashboard />
                //administrador
                ):(
                    <DashboardAdmin />
                )
            }
        </>
    )
}

export default Panel;