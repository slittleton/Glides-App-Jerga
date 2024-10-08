import { Component, onMount, ParentComponent } from "solid-js";
import { useAuthState } from "../../context/AuthProvider";
import { useNavigate } from "@solidjs/router";


const MainRouterLayout: ParentComponent<{}> = (props) => {
  const authState = useAuthState();
  const navigate = useNavigate();
  onMount(() => {
    console.log('Main Router Layout Mounted');

    if (!authState.isAuthenticated) {
      navigate('/auth/login', { replace: true });
    } else {

    }
  });
  return <>
    <div>MAIN ROUTER LAYOUT COMPONENT</div>;
    {props.children}
  </>;
};

export default MainRouterLayout;