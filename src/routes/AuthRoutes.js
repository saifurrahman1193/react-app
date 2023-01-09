import {lazy} from "react";

const Login = lazy(()=> import('pages/Auth/Login'));

const AuthRoutes = [
  {
    path: '/',
    component: Login,
  }
];

export default AuthRoutes