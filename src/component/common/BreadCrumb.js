import React from 'react'
import { Card, PageHeader, Breadcrumb, Button, Typography } from 'antd'
import { Link } from 'react-router-dom'

function BreadCrumb() {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">
                <Link to='/'>Home</Link>
            </Breadcrumb.Item>

            <Breadcrumb.Item>Access Control</Breadcrumb.Item>
            <Breadcrumb.Item>User</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadCrumb