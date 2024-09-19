import { Component, onMount, ParentProps } from "solid-js";

import { useNavigate } from "@solidjs/router";
import useAuthState from "../../context/useAuthState";



const AuthLayout: Component<ParentProps> = (props) => {
  const authState = useAuthState()!
  const navigate = useNavigate()

  onMount(()=>{
    if (authState.isAuthenticated){
        navigate("/", {replace:true})
    }
  })
  
  return props.children
};

export default AuthLayout