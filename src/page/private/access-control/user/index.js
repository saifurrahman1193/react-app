import React, {useContext, useEffect} from 'react'
import { Layout } from 'antd'
import { PrivateLayoutContext } from 'context/private-layout-context'
const { Header } = Layout;

function User() {
    
    const { setBreadcrumb } = useContext(PrivateLayoutContext);

    const breadcrumb = {
        pageTitle: 'Users',
        currentPath: '/users',
        layers: [
            {
                title: 'Home',
                link: '/',
                icon: 'HomeOutlined'
            },
            {
                title: 'Access Control',

            },
            {
                title: 'Manage Users',
            }
        ]
    }

    useEffect(() => {
        setBreadcrumb(breadcrumb);
    }, []);


    return (
        <>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>

        </>
    )
}

export default User