import React, { lazy, useEffect, useContext } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import PrivateRoutes from 'route/private-routes'
import Cookies from 'js-cookie';
import AuthContextProvider from 'context/auth-context';
import {  Layout, FloatButton, Affix } from "antd";
import PrivateLayoutContextProvider from 'context/private-layout-context';
import BreadCrumb from 'component/common/BreadCrumb';


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
                    <TopBar />
                    <Layout>
                        <LeftSideBar />  {/* <Sider> -> <Menu> */}
                        <Layout>
                            <Content style={{ marginLeft: 200}}>
                                <BreadCrumb />

                                {/* <Outlet /> */}
                                <Routes>
                                    {
                                        PrivateRoutes?.map((route, index) =>
                                            <Route
                                                path={route?.path}
                                                element={<route.component />}
                                                key={'route-' + route?.name}
                                            />
                                        )
                                    }
                                </Routes>
                            </Content>
                            <BottomBar />
                        </Layout>
                    </Layout>
                </Layout>
                <FloatButton.BackTop visibilityHeight={0} />
            </PrivateLayoutContextProvider>
        </AuthContextProvider>
    )
}

export default PrivateLayout