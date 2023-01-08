import React from 'react'
import { BrowserRouter } from "react-router-dom"
import AuthRoutes from './AuthRoutes'

function Routes() {
  return (
    <BrowserRouter>
        <AuthRoutes />
    </BrowserRouter>
  )
}

export default Routes


// https://github.com/duthanhduoc/React-Folder-Structure/blob/master/src/routes/routes.tsx