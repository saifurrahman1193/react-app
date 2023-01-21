import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import AuthRoutes from 'route/auth-routes'

function AuthLayout() {
    return (
        <Routes>
            {
                AuthRoutes?.map((route, index) =>
                    <Route path={route?.path} element={<route.component />} key={'route-' + route?.name} />
                )
            }
            {/* <Outlet /> */}
        </Routes>
    )
}

export default AuthLayout