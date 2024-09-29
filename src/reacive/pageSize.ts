import { createRoot, createSignal, onCleanup, onMount } from "solid-js"


const getClientSize = () => ({
    height: document.body.clientHeight,
    width: document.body.clientWidth
})

const pageSize = () => {
    const [value, setValue] = createSignal(getClientSize());
   
    onMount(() => {
      
        window.addEventListener("resize", handleResize)
    })
    onCleanup(() => {
        
    })

    const handleResize = () => {
        setValue(getClientSize())

    }
    
    const isXL = () => value().width >1280
    const isLg = () => value().width > 1024


    return {isXL, isLg, value}
}
// createRoot wrap reactive computations in functions and rerun them when their dependencies update. 
// This includes most JSX expressions, which are automatically wrapped in a function by the 
// Solid JSX compiler
export default createRoot(pageSize)

