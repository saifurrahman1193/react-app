import React, { useContext } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import { Layout } from "antd";
import { PrivateLayoutContext } from 'context/private-layout-context'
import { Avatar } from 'antd';
import { Col, Row, Space } from 'antd';
import { AuthContext } from 'context/auth-context'

const { Header } = Layout;

function TopBar() {
    const { leftSideBarCollapsed, setLeftSideBarCollapsed } = useContext(PrivateLayoutContext);
    const { user } = useContext(AuthContext);


    return (
        <Header>
            <Row>
                <Col span={12}>
                    {React.createElement(leftSideBarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger m-0 p-0',
                        onClick: () => setLeftSideBarCollapsed(!leftSideBarCollapsed),
                    })}
                </Col>
                <Col span={12}>
                    <Row justify="end">
                        <Space>
                            <span>{user?.name}</span>
                            <Avatar
                                style={{
                                    backgroundColor: '#87d068',
                                }}
                                icon={<UserOutlined />}
                            />
                        </Space>
                    </Row>
                </Col>
            </Row>
        </Header>
    )
}

export default TopBar