import NotFound from "page/error/not-found";
import { lazy } from "react";

const User = lazy(() => import('page/private/access-control/user'));
const Role = lazy(() => import('page/private/access-control/role'));
const Permission = lazy(() => import('page/private/access-control/permission'));

const AuthRoutes = [
  // Access Control routes
  { path: 'access-control/user', name: 'user', component: User },
  { path: 'access-control/role', name: 'role', component: Role },
  { path: 'access-control/permission', name: 'permission', component: Permission },

  { path: '*', name: '404', component: NotFound },
];

export default AuthRoutes