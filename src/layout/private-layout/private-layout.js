import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import PrivateRoutes from 'route/private-routes'
import Cookies from 'js-cookie';
import AuthContextProvider from 'context/auth-context';
import { Layout, Menu } from "antd";

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

            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>


            <Routes>
                {
                    PrivateRoutes?.map((route, index) =>
                        <Route path={route?.path} element={<route.component />} key={'route-' + route?.name} />
                    )
                }
            </Routes>
        </AuthContextProvider>
    )
}

export default PrivateLayout

