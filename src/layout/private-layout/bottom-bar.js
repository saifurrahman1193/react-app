import React from 'react'
import { Layout } from "antd";
import {getCurrentYear} from 'util/helper'
const { Footer } = Layout;


function BottomBar() {
    return (
        <Footer style={{ marginLeft: 200}}>
            <span>Copyright &copy; {getCurrentYear()} | Software Shop Limited | All Rights Reserved.</span>
        </Footer>
    )
}

export default BottomBar