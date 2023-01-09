import {lazy} from "react";

const Login = lazy(()=> import('pages/Auth/Login'));

const AuthRoutes = [
  {
    path: 'login',
    name: 'login',
    component: Login,
  }
];

export default AuthRoutes