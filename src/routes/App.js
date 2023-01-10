import React, {lazy, Suspense} from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from "pages/error/not-found";
import Loading from 'components/loading/loading';
const AuthLayout = lazy(()=>import('layouts/auth-layout'))
const PrivateLayout = lazy(()=>import('layouts/private-layout'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="/*" element={<PrivateLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App