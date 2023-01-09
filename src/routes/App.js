import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthLayout from 'layouts/AuthLayout'

function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthLayout />} />
    </Routes>
  )
}

export default App