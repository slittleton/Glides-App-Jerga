import { createRoot, createSignal, onCleanup, onMount } from "solid-js"


const getClientSize = () => ({
    height: document.body.clientHeight,
    width: document.body.clientWidth
})

const pageSize = () => {
    const [value, setValue] = createSignal(getClientSize());
   
    onMount(() => {
        console.log("onMount Called in pageSize")
        window.addEventListener("resize", handleResize)
    })
    onCleanup(() => {
        console.log("onCleanup Called in pageSize")
    })

    const handleResize = () => {
        setValue(getClientSize())
        console.log(value())
    }
 

    return 100
}
// createRoot wrap reactive computations in functions and rerun them when their dependencies update. 
// This includes most JSX expressions, which are automatically wrapped in a function by the 
// Solid JSX compiler
export default createRoot(pageSize)

