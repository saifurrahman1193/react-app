import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from 'routes/PrivateRoutes'
import Cookies from 'js-cookie';

function PrivateLayout() {
    
  useEffect(() => {
    let token = Cookies.get("ProjectToken");

    if (!token) {
      window.location = "/auth/login";
    }
  }, []);

  return (
    <Routes>
      {
        PrivateRoutes?.map((route, index) =>
          <Route path={route?.path} element={<route.component />} key={'route-' + route?.name} />
        )
      }
      <Route />
    </Routes>
  )
}

export default PrivateLayout