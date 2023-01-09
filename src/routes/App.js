import React, {lazy} from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from "pages/Error/NotFound";
const AuthLayout = lazy(()=>import('layouts/AuthLayout'))
const PrivateLayout = lazy(()=>import('layouts/PrivateLayout'))

function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/*" element={<PrivateLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App