import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthRoutes from 'routes/AuthRoutes'

function AuthLayout() {
  return (
    <Routes>
        {
            AuthRoutes?.map((route, index) => 
                <Route path={route?.path} element={<route.component />} key={'route-'+route?.name} />
            )
        }
        <Route />
    </Routes>
  )
}

export default AuthLayout