import React, { useContext } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, LogoutOutlined, ToolOutlined } from '@ant-design/icons';
import { Layout } from "antd";
import { PrivateLayoutContext } from 'context/private-layout-context'
import { Avatar } from 'antd';
import { Col, Row, Space } from 'antd';
import { AuthContext } from 'context/auth-context'
import { Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const { Header } = Layout;

function TopBar() {
    const { leftSideBarCollapsed, setLeftSideBarCollapsed } = useContext(PrivateLayoutContext);
    const { user } = useContext(AuthContext);

    const logout = () => {
        Cookies.remove('ProjectToken')
        window.location = process.env.REACT_APP_LOGIN_PAGE;
    }

    const items = [
        {
            label: <Link to="/profile">Profile</Link>,
            key: 'profile',
            icon: <UserOutlined />,
        },
        {
            label: <Link to="/change-password">Change Password</Link>,
            key: 'change-password',
            icon: <ToolOutlined />,
        },
        {
            type: 'divider',
        },
        {
            label: <Link onClick={logout}>Logout</Link>,
            key: 'logout',
            icon: <LogoutOutlined />,
        },
    ];




    return (
        <>
                <Header>
                    <Row>
                        <Col span={1}>
                            {React.createElement(leftSideBarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger m-0 p-0',
                                onClick: () => setLeftSideBarCollapsed(!leftSideBarCollapsed),
                            })}
                        </Col>
                        <Col span={23}>
                            <Row justify="end">
                                <Dropdown menu={{ items }}>
                                    <a onClick={(e) => e.preventDefault()} href='!#'>
                                        <Space>

                                            <span>{user?.name}</span>
                                            <Avatar
                                                style={{
                                                    backgroundColor: '#87d068',
                                                }}
                                                icon={<UserOutlined />}
                                            />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </Row>
                        </Col>
                    </Row>


                </Header>
        </>
    )
}

export default TopBar