import React, { Fragment, useContext } from 'react'
import { Breadcrumb } from 'antd'
import { PrivateLayoutContext } from 'context/private-layout-context'

import { Link } from 'react-router-dom'
import { DynamicIcon } from 'util/helper'

function BreadCrumb() {
    const { breadcrumb } = useContext(PrivateLayoutContext);

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