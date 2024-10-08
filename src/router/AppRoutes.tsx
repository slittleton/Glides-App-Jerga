import { Route, Router } from "@solidjs/router";
import HomeScreen from "../screens/Home";
import App from "../App";

import { lazy } from "solid-js";
import AuthProvider from "../context/AuthProvider";
import MainRouterLayout from "./layouts/MainRouterLayout";
import AuthRouterLayout from "./layouts/AuthRouterLayout";


const LoginScreen = lazy(() => import("../screens/Login"));
const RegisterScreen = lazy(() => import("../screens/Register"));

// const authSate =  useAuthState()


const AppRoutes = () => {
    return (
        <>

            <AuthProvider>

                <Router root={App}>

                    <Route path="/" component={MainRouterLayout}>
                        <Route path="" component={HomeScreen}></Route>
                    </Route>


                    <Route path="/auth" component={AuthRouterLayout}>
                        <Route path="/login" component={LoginScreen}></Route>
                        <Route path="/register" component={RegisterScreen}></Route>
                    </Route>


                </Router>
            </AuthProvider>
        </>);
};


export default AppRoutes;