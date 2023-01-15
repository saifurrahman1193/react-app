import Cookies from 'js-cookie';
import React, { useEffect } from 'react'


function Home() {
	useEffect(() => {
		let token = Cookies.get("ProjectToken");

		console.log(process.env.REACT_APP_LOGIN_PAGE);

		if (!token) {
			window.location = process.env.REACT_APP_LOGIN_PAGE;
		}
	}, []);

	return (
		<>
			<h1>Welcome</h1>
		</>
	)
}

export default Home