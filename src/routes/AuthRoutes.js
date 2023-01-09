import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "pages/Auth/Login"


function AuthRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default AuthRoutes