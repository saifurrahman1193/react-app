import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            
            <div className="jumbotron vertical-center"> 
                <div className="container">
                    <div className="d-flex">
                        <div className="mx-auto align-middle">
                            <h1>404 - Page Not Found!</h1>
                            <Link to="/">
                                <button type="button" className="bg-theme text-white btn d-flex mx-auto mt-4">
                                    <i className="feather icon-home h3 mt-1 mr-3"></i>
                                    <span className="h3">Go Home</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NotFound
