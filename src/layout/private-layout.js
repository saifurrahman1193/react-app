import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from 'route/private-routes'
import Cookies from 'js-cookie';

function PrivateLayout() {
    
  useEffect(() => {
    let token = Cookies.get("ProjectToken");

    if (!token) {
      window.location = process.env.REACT_APP_LOGIN_PAGE;
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