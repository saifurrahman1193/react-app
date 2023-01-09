import React from 'react'
import { Link } from 'react-router-dom'
import {RouteLinks} from "constants/RouteLinks"

function Home() {
  return (
    <>
        <h1>Home Page</h1>
        <Link to={RouteLinks?.login}>Login</Link>
        <br /><Link to='/sadadasdasd'>Error page</Link>
    </>
  )
}

export default Home