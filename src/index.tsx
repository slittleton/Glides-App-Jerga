import { render } from 'solid-js/web'
import App from './App'
import { Route, Router } from '@solidjs/router'
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import MainLayout from './components/layouts/MainLayout'
import AuthLayout from './components/layouts/AuthLayout'



render(
    () => {
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
    }

    ,
    document.getElementById("root")!
)