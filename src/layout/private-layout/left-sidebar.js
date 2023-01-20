import { HomeOutlined, SafetyOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { AuthContext } from 'context/auth-context'
import React, { useContext } from 'react'


const LeftSidebar = () => {
    const { permissions } = useContext(AuthContext);

    const items = [
        {
            label: 'Home',
            path: '/',
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: 'Access Control',
            key: 'access-control',
            icon: <SafetyOutlined />,
            permission: null,
            children: [
                {
                    label: 'User',
                    path: '/access-control/user',
                    key: 'user',
                    permission: 'user list',
                },
                {
                    label: 'Role',
                    path: '/access-control/role',
                    key: 'role',
                    permission: 'role list',
                }
            ]
        },
    ]

    const onClick = (e) => {
        console.log('click', e);
    };

    return (
        <Menu
            onClick={(e) => onClick(e)}
            style={{
                width: 256,
                height: '100vh',
            }}
            mode="vertical"
            items={
                items.map((item, index) => {
                    console.log(item?.permission, permissions, permissions?.includes(item?.permission));
                    return {
                        ...item,
                        label: <Link to={item?.path}>{item?.label}</Link>,
                        children: item?.children?.map((child_item, child_index) => {
                            // if (child_item) has permission then check permission exist in permissions array, otherwise return
                            let return_status = 0;
                            if (child_item?.permission) {
                                if (permissions?.includes(child_item?.permission)) {
                                    return_status = 1;
                                }
                            }
                            else{
                                return_status = 1;
                            }
                            return return_status && {
                                ...child_item,
                                label: <Link to={child_item?.path}>{child_item?.label}</Link>
                            }
                        })
                    }
                })
            }
        >


        </Menu>
    )
};
export default LeftSidebar;