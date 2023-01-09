import React from 'react'
import GeneralRoutes from './GeneralRoutes'
import AuthRoutes from './AuthRoutes'

function RouteList() {
  return (
    <>
      <GeneralRoutes />
      <AuthRoutes />
    </>
  )
}

export default RouteList