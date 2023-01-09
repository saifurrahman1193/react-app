import React from "react"
import { Routes, Route } from "react-router-dom"
import NotFound from "pages/Error/NotFound"


function ErrorRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default ErrorRoutes