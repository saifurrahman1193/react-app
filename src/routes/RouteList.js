import React from 'react'
import ErrorRoutes from './ErrorRoutes'
import GeneralRoutes from './GeneralRoutes'
import AuthRoutes from './AuthRoutes'

function RouteList() {
  return (
    <>
      <ErrorRoutes />
      <GeneralRoutes />
      <AuthRoutes />
    </>
  )
}

export default RouteList