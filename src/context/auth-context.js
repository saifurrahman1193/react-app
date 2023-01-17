import React, { createContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import { ME } from 'util/api'
import { postData } from 'util/api-service'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [user, setUser] = useState({});
    const [roles, setRoles] = useState([]);
    const [permissions, setPermissions] = useState([]);

    let token = Cookies.get("ProjectToken") || '';

    useEffect(() => {
        setUserInfo();
    }, []);

    const setUserInfo = async () => {
        if (token) {
            let res = await postData(ME);

            if (res) {
                let masterData = res?.data;

                setUser({ ...masterData?.user });
                setRoles({ ...masterData?.roles });
                setPermissions({ ...masterData?.permissions });
            }
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                roles,
                permissions
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider