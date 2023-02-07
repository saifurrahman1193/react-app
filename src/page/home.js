import Cookies from 'js-cookie';
import React, { useEffect, useContext } from 'react'
import { AuthContext } from 'context/auth-context'
import { PrivateLayoutContext } from 'context/private-layout-context'


function Home() {
    const { user, roles, permissions } = useContext(AuthContext);
    const { setBreadcrumb } = useContext(PrivateLayoutContext);

    useEffect(() => {
        let token = Cookies.get("ProjectToken");

        if (!token) {
            window.location = process.env.REACT_APP_LOGIN_PAGE;
        }
        setBreadcrumb(breadcrumb);
    }, []);

    const breadcrumb = {
        pageTitle: 'Home',
        currentPath: '/',
        layers: []
    }

    return (
        <>
            <h1>Welcome {user?.name}</h1>
            <h1>Roles: {roles?.length}</h1>
            <h1>Permissions: {permissions?.length}</h1>
        </>
    )
}

export default Home