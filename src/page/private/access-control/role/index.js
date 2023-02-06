import React, {useContext, useEffect} from 'react'
import { PrivateLayoutContext } from 'context/private-layout-context'

function Role() {
  const { setBreadcrumb } = useContext(PrivateLayoutContext);

    const breadcrumb = {
        pageTitle: 'roles',
        currentPath: '/roles',
        layers: [
            {
                title: 'Home',
                link: '/',
                icon: 'HomeOutlined'
            },
            {
                title: 'Access Control',

            },
            {
                title: 'Manage Roles',
            }
        ]
    }

    useEffect(() => {
        setBreadcrumb(breadcrumb);
    }, []);

  return (
    <>
    </>
  )
}

export default Role