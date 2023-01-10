import NotFound from "pages/error/not-found";
import { lazy } from "react";

const Login = lazy(() => import('pages/auth/login'));
const ForgotPassword = lazy(() => import('pages/auth/forgot-password'));
const ForgotPasswordCodeVerify = lazy(() => import('pages/auth/forgot-password-code-verify'));
const PasswordReset = lazy(() => import('pages/auth/password-reset'));

const AuthRoutes = [
  { path: 'login', name: 'login', component: Login },
  { path: 'forgot-password', name: 'forgot-password', component: ForgotPassword },
  { path: 'forgot-password-code-verify', name: 'forgot-password-code-verify', component: ForgotPasswordCodeVerify },
  { path: 'password-reset', name: 'password-reset', component: PasswordReset },
  { path: '*', name: '404', component: NotFound },
];

export default AuthRoutes