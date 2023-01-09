import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "pages/Home"
import {RouteLinks} from "constants/RouteLinks"


function GeneralRoutes() {
  return (
    <Routes>
      <Route path={RouteLinks?.home} element={<Home />} />
    </Routes>
  )
}

export default GeneralRoutes