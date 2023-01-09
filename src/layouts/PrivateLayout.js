import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from 'routes/PrivateRoutes'

function PrivateLayout() {
  return (
    <Routes>
        {
            PrivateRoutes?.map((route, index) => 
                <Route path={route?.path} element={<route.component />} key={'route-'+route?.name} />
            )
        }
        <Route />
    </Routes>
  )
}

export default PrivateLayout