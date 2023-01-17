import NotFound from "page/error/not-found";
import { lazy } from "react";

const Home = lazy(() => import('page/home'));

const User = lazy(() => import('page/private/access-control/user'));
const Role = lazy(() => import('page/private/access-control/role'));
const Permission = lazy(() => import('page/private/access-control/permission'));

const AuthRoutes = [

	{ path: '/', name: 'Home', component: Home, permission: null },

	// Access Control routes
	{ path: 'access-control/user', name: 'User', component: User, permission: 'user list' },
	{ path: 'access-control/role', name: 'Role', component: Role, permission: 'role list' },
	{ path: 'access-control/permission', name: 'Permission', component: Permission, permission: 'permission list' },
	{ path: 'access-control/permission-module', name: 'Permission Module', component: Permission, permission: 'permission list' },

	{ path: '*', name: '404', component: NotFound },
];

export default AuthRoutes