import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from 'route/private-routes'
import Cookies from 'js-cookie';
import AuthContextProvider from 'context/auth-context';

function PrivateLayout() {

    useEffect(() => {
        let token = Cookies.get("ProjectToken");

        if (!token) {
            window.location = process.env.REACT_APP_LOGIN_PAGE;
        }
    }, []);

    return (
        <AuthContextProvider>
            <Routes>
                {
                    PrivateRoutes?.map((route, index) =>
                        <Route path={route?.path} element={<route.component />} key={'route-' + route?.name} />
                    )
                }
            </Routes>
        </AuthContextProvider>
    )
}

export default PrivateLayout