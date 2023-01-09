import React from 'react'
import { Link } from 'react-router-dom'
import {RouteLinks} from "constants/RouteLinks"

function Login() {
  return (
    <>
        <h1>Login Page</h1>
        <Link to={RouteLinks?.home}>Home</Link>

    </>
  )
}

export default Login