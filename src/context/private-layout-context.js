import React, { createContext, useState } from 'react'

export const PrivateLayoutContext = createContext();

const PrivateLayoutContextProvider = (props) => {
    const [leftSideBarCollapsed, setLeftSideBarCollapsed] = useState(false);

    return (
        <PrivateLayoutContext.Provider
            value={{
                leftSideBarCollapsed,
                setLeftSideBarCollapsed,
            }}
        >
            {props.children}
        </PrivateLayoutContext.Provider>
    )
}

export default PrivateLayoutContextProvider