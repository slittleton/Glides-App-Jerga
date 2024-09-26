import { AiOutlineHome } from "solid-icons/ai";
import { CgMore, CgProfile } from "solid-icons/cg";
import { IoNotifications } from "solid-icons/io";

const SIZE = 24
export const links = [
    {
        name: "Home",
        href: "/",
        icon: () => (<AiOutlineHome size={SIZE} />)
    },
    {
        name: "Profile",
        href: "/profile",
        icon: () => (<CgProfile size={SIZE} />)
    },
    {
        name: "More",
        href: "/more",
        icon: () => (<CgMore size={SIZE} />)
    },
    {
        name: "Login", // Notification
        href: "/auth/login", // /notification
        icon: () => (<IoNotifications size={SIZE} />)
    },
    {
        name: "Register", // Discover
        href: "/auth/register", // /discover
        icon: () => (<AiOutlineHome size={SIZE} />)
    },
]