import { Route, Router } from "@solidjs/router";
import HomeScreen from "../screens/Home";
import App from "../App";
import AuthLayout from "../components/layouts/AuthLayout";
import { lazy } from "solid-js";


const LoginScreen = lazy(()=>import("../screens/Login"))
const RegisterScreen = lazy(()=>import("../screens/Register"))


const AppRoutes = () => {
    return (
        <Router root={App}>

            <Route>
                <Route path="/" component={HomeScreen}></Route>
                <Route path="" component={HomeScreen}></Route>
            </Route>


            <Route path="/auth" component={AuthLayout}>
                <Route path="/login" component={LoginScreen}></Route>
                <Route path="/register" component={RegisterScreen}></Route>
            </Route>


        </Router>)
};


export default AppRoutes