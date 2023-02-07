import React, {useContext} from 'react'
import { Layout } from "antd";
import {getCurrentYear} from 'util/helper'
import { PrivateLayoutContext } from 'context/private-layout-context'

const { Footer } = Layout;


function BottomBar() {
    const { leftSideBarCollapsed } = useContext(PrivateLayoutContext);

    return (
        <Footer>
            <span>Copyright &copy; {getCurrentYear()} | Software Shop Limited | All Rights Reserved.</span>
        </Footer>
    )
}

export default BottomBar