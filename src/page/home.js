import Cookies from 'js-cookie';
import React, { useEffect, useContext } from 'react'
import {AuthContext} from 'context/auth-context'


function Home() {
	const { user, roles, permissions } = useContext(AuthContext);

	useEffect(() => {
		let token = Cookies.get("ProjectToken");

		if (!token) {
			window.location = process.env.REACT_APP_LOGIN_PAGE;
		}
	}, []);

	return (
		<>
			<h1>Welcome {user?.name}</h1>
			<h1>Roles: {roles?.length}</h1>
			<h1>Permissions: {permissions?.length}</h1>
		</>
	)
}

export default Home