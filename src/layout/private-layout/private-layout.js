import React, { lazy, useEffect } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import PrivateRoutes from 'route/private-routes'
import Cookies from 'js-cookie';
import AuthContextProvider from 'context/auth-context';
import { Layout } from "antd";
import PrivateLayoutContextProvider from 'context/private-layout-context';
const TopBar = lazy(() => import('./top-bar'))
const LeftSideBar = lazy(() => import('./left-side-bar'))
const BottomBar = lazy(() => import('./bottom-bar'))

const { Content } = Layout;

function PrivateLayout() {

    useEffect(() => {
        let token = Cookies.get("ProjectToken");

        if (!token) {
            window.location = process.env.REACT_APP_LOGIN_PAGE;
        }
    }, []);

    return (
        <AuthContextProvider>
            <PrivateLayoutContextProvider>
                <Layout className='private-layout'>
                    <Layout>
                        <LeftSideBar />  {/* <Sider> -> <Menu> */}
                        <Layout>
                            <TopBar />
                            <Content className='mx-2'>
                                {/* <Outlet /> */}
                                <Routes>Content
                                    {
                                        PrivateRoutes?.map((route, index) =>
                                            <Route path={route?.path} element={<route.component />} key={'route-' + route?.name} />
                                        )
                                    }
                                </Routes>
                            </Content>
                            <BottomBar />
                        </Layout>
                    </Layout>
                </Layout>
            </PrivateLayoutContextProvider>
        </AuthContextProvider>
    )
}

export default PrivateLayout