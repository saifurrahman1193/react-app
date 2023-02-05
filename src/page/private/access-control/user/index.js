import React from 'react'
import { Link } from 'react-router-dom'
import { Card, PageHeader, Breadcrumb, Button, Typography } from 'antd'
import { ArrowLeftOutlined, HomeOutlined } from "@ant-design/icons";
import BreadCrumb from 'component/common/BreadCrumb';
const { Title } = Typography;

function User() {
	const breadcrumb = {
        pageTitle: 'Users',
        currentPath: '/roles',
        layers: [
            {
                title: 'Home',
                link: '/',
                icon: 'HomeOutlined'
            },
            {
                title: 'Access Control'
            },
            {
                title: 'Manage Roles',
                default: 1
            }
        ]
    }

	return (
		<>
			<BreadCrumb breadcrumb={breadcrumb}></BreadCrumb>
		</>
	)
}

export default User