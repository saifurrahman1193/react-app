import React, {lazy} from 'react'
import { Routes, Route } from 'react-router-dom'
const AuthLayout = lazy(()=>import('layouts/AuthLayout'))

function App() {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
    </Routes>
  )
}

export default App