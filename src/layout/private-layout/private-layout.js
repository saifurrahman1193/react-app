import React, { lazy, useEffect } from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import PrivateRoutes from 'route/private-routes'
import Cookies from 'js-cookie';
import AuthContextProvider from 'context/auth-context';
import { Layout, Menu } from "antd";
const LeftSidebar = lazy(()=>import('./left-sidebar'))

const { Header, Footer, Sider, Content } = Layout;

function PrivateLayout() {

    useEffect(() => {
        let token = Cookies.get("ProjectToken");

        if (!token) {
            window.location = process.env.REACT_APP_LOGIN_PAGE;
        }
    }, []);

    return (
        <AuthContextProvider>
            <Layout className='private-layout'>
                <Header>header</Header>
                <Layout>
                    <Sider>
                        <LeftSidebar/>
                    </Sider>
                    <Content>
                        <Outlet/>
                        <Routes>
                            {
                                PrivateRoutes?.map((route, index) =>
                                    <Route path={route?.path} element={<route.component />} key={'route-' + route?.name} />
                                )
                            }
                        </Routes>
                    </Content>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
        </AuthContextProvider>
    )
}

export default PrivateLayout