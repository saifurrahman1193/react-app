import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import NotFound from "pages/Error/NotFound"
import {RouteLinks} from "constants/RouteLinks"


function ErrorRoutes() {
  const checkIfValidLinkExist = () => {
    let linkFound = 0;
    for (const key in RouteLinks) 
    {
        if (window.location.pathname==RouteLinks[key]) 
        {
          linkFound = 1;
        }
    }

    return linkFound;
  }

  return (
    <Routes>
      <Route path="*" element={ checkIfValidLinkExist() ? null : <Navigate to="/404" replace={true} /> } />
      <Route path="/404" element={ <NotFound />} />
    </Routes>
  )
}

export default ErrorRoutes