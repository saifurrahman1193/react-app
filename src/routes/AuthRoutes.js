import React, { lazy, Suspense } from "react"
import { Route } from "react-router-dom"
import Loading from "components/Loading/Loading"
const Login = lazy(() => import("pages/Auth/Login"))

function AuthRoutes() {
  return (
      <Route path='/login' component={() => ( <Suspense fallback={<Loading />}> <Login /></Suspense> )}/>
  )
}

export default AuthRoutes