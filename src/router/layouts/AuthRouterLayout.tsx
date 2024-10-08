import { useNavigate } from "@solidjs/router";
import { Component, onMount, ParentComponent } from "solid-js";

import { useAuthState } from "../../context/AuthProvider";

const AuthRouterLayout: ParentComponent = (props) => {
  const navigate = useNavigate();

  const authState = useAuthState();

  onMount(() => {
    console.log('Auth Router Layout Mounted');
    console.log('AUTHENTICATED', authState);


    if (authState.isAuthenticated) {
      navigate('/', { replace: true });
    } else {

    }
    if (!authState.isAuthenticated) { return null; }


  });
  return <>
    <div>AUTH LAYOUT COMPONENT</div>
    {props.children}
  </>;
};

export default AuthRouterLayout;