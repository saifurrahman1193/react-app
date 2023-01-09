import { lazy } from "react";

const Login = lazy(() => import('pages/Auth/Login'));
const ForgotPassword = lazy(() => import('pages/Auth/ForgotPassword'));
const ForgotPasswordCodeVerify = lazy(() => import('pages/Auth/ForgotPasswordCodeVerify'));
const PasswordReset = lazy(() => import('pages/Auth/PasswordReset'));

const AuthRoutes = [
  {
    path: 'login',
    name: 'login',
    component: Login,
  },
  {
    path: 'forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: 'forgot-password-code-verify',
    name: 'forgot-password-code-verify',
    component: ForgotPasswordCodeVerify,
  },
  {
    path: 'password-reset',
    name: 'password-reset',
    component: PasswordReset,
  }


];

export default AuthRoutes