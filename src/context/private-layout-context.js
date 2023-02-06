import React, { createContext, useState } from 'react'

export const PrivateLayoutContext = createContext();

const PrivateLayoutContextProvider = (props) => {
    const [leftSideBarCollapsed, setLeftSideBarCollapsed] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState({});

    return (
        <PrivateLayoutContext.Provider
            value={{
                leftSideBarCollapsed,
                setLeftSideBarCollapsed,
                breadcrumb,
                setBreadcrumb
            }}
        >
            {props.children}
        </PrivateLayoutContext.Provider>
    )
}

export default PrivateLayoutContextProvider