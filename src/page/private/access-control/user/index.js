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
                link: '/'
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
			<BreadCrumb></BreadCrumb>
		</>
	)
}

export default User