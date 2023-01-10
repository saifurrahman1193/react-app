import Cookies from 'js-cookie';
import React, {useEffect} from 'react'


function Home() {
  useEffect(() => {
    let token = Cookies.get("ProjectToken");

    if (!token) {
      window.location = "/auth/login";
    }
  }, []);
 
  return (
    <>
        <h1>Welcome</h1>
    </>
  )
}

export default Home