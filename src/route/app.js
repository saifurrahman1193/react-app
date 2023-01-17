import React, {lazy, Suspense} from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from "page/error/not-found";
import Loading from 'component/loading/loading';
import Home from 'page/home';
const AuthLayout = lazy(()=>import('layout/auth-layout'))
const PrivateLayout = lazy(()=>import('layout/private-layout'))

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