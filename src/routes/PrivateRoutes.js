import NotFound from "pages/Error/NotFound";
import { lazy } from "react";

const User = lazy(() => import('pages/Private/AccessControl/User'));
const Role = lazy(() => import('pages/Private/AccessControl/Role'));
const Permission = lazy(() => import('pages/Private/AccessControl/Permission'));

const AuthRoutes = [
  // Access Control routes
  { path: 'access-control/user', name: 'user', component: User },
  { path: 'access-control/role', name: 'role', component: Role },
  { path: 'access-control/permission', name: 'permission', component: Permission },

  { path: '*', name: '404', component: NotFound },
];

export default AuthRoutes