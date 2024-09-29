import { Component, onMount, ParentProps } from "solid-js";

import { useNavigate } from "@solidjs/router";





const AuthLayout: Component<ParentProps> = (props) => {

  const navigate = useNavigate()

  onMount(()=>{
    // if (authState.isAuthenticated){
    //     navigate("/", {replace:true})
    // }
  })
  
  return props.children
};

export default AuthLayout