import React, { Component, Fragment, useState } from 'react'
import { Card, PageHeader, Breadcrumb, Button, Typography } from 'antd'

import { Link } from 'react-router-dom'
import {DynamicIcon} from 'util/helper'

function BreadCrumb({ breadcrumb }) {

    return (
        <Breadcrumb>
            {
                breadcrumb?.layers?.map((layer, i) => {
                    return (
                        <Fragment key={'layer-' + i}>
                            {
                                <Breadcrumb.Item>
                                    {
                                        layer?.link ?
                                            <>
                                                <Link to={layer?.link}>
                                                    {layer?.icon ? <DynamicIcon type={layer?.icon} /> : layer?.title}
                                                </Link>
                                            </>
                                            :
                                            layer?.title
                                    }
                                </Breadcrumb.Item>
                            }
                        </Fragment>
                    )
                })
            }
        </Breadcrumb>
    )
}

export default BreadCrumb