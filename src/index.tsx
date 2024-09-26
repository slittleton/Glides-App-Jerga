import { render } from 'solid-js/web'
import App from './App'
import { Route, Router } from '@solidjs/router'
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import MainLayout from './components/layouts/MainLayout'
import AuthLayout from './components/layouts/AuthLayout'
import AppRoutes from './router/AppRoutes'



render(
    () => {
        return (
            <>
                <div id="popups"></div>
                <AppRoutes />
            </>

        )
    }

    ,
    document.getElementById("root")!
)


// <Router root={App}>
// <Route>
//     <Route path="/" component={HomeScreen}></Route>
//     <Route path="" component={HomeScreen}></Route>
// </Route>
// <Route path="/auth" component={AuthLayout}>
//     <Route path="/login" component={LoginScreen}></Route>
//     <Route path="/register" component={RegisterScreen}></Route>
// </Route>
// </Router>)