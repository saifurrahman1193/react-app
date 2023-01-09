import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "pages/Auth/Login"
import {RouteLinks} from "constants/RouteLinks"


function AuthRoutes() {
  return (
    <Routes>
      <Route path={RouteLinks?.login} element={<Login />} />
    </Routes>
  )
}

export default AuthRoutes