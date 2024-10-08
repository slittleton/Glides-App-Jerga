import { Component, createSignal, createUniqueId, For, ParentProps } from "solid-js";
import { AiOutlineMessage } from "solid-icons/ai";
import { FiTrash } from "solid-icons/fi";
import { FaRegularImage, FaRegularHeart } from "solid-icons/fa";

import GlidePost from "./components/glides/GlidePost";
import { Glide } from "./types/Glide";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import { Router, Route } from "@solidjs/router";
import "./index.css"
import { useAuthState } from "./context/AuthProvider";




const App: Component<ParentProps> = (props) => {

    return (
        <>
        {/* <div class="text-white">AUTHENTICATED: {JSON.stringify(authState.isAuthenticated)}</div>
        <div class="text-white">LOADING: {JSON.stringify(authState.loading)}</div> */}
        {props.children}
        </>
        
    );
};

export default App;