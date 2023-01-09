import React from 'react'
import GeneralRoutes from './GeneralRoutes'
import ErrorRoutes from './ErrorRoutes'
import AuthRoutes from './AuthRoutes'

function RouteList() {
  return (
    <>
      <GeneralRoutes />
      <ErrorRoutes />
      <AuthRoutes />
    </>
  )
}

export default RouteList