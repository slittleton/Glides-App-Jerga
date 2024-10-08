import { Component, Context, createEffect, createSignal, createUniqueId, For, onCleanup, onMount, Show, useContext } from "solid-js";
import GlidePost from "../components/glides/GlidePost";

import { FaRegularImage } from "solid-icons/fa";
import { Glide } from "../types/Glide";
import MainLayout from "../components/layouts/MainLayout";
import pageSize from "../reacive/pageSize";
import { useAuthState } from "../context/AuthProvider";



// const HelloWorld: Component<{}> = (props) => {
//   onMount(()=> console.log('onMount triggered on Helloworld'))
//   onCleanup(()=> console.log('onCleanup Triggered on Helloworld'))
//   return <div>gasfsadfasf</div>;
// };

type AuthStateContextValues = {
    isAuthenticated: boolean,
    loading:boolean
}

const HomeScreen: Component<{}> = (props) => {
    const [content, setContent] = createSignal('');
    const [glides, setGlides] = createSignal<Glide[]>([]);
    const [displayContent, setDisplayContent] = createSignal(false)


   

    // createEffect(()=>{
    //     console.log("Create Effect runs when state changes IF you run a state function inside createEffect")
    //     console.log(glides().length)
    // })

    const authState = useAuthState()



    const createGlide = () => {

        // authState!.setStore('isAuthenticated', !authState.isAuthenticated)
        // setStore('isAuthenticated', !store.isAuthenticated)

        const glide: Glide = {
            id: createUniqueId(),
            content: content(),
            user: {
                nickName: "Filip99",
                avatar: "https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
            },
            likesCount: 0,
            subglidesCount: 0,
            date: new Date()
        }
        setGlides([...glides(), glide])
        // console.log(JSON.stringify(glides()))
        setContent('')
    }


    onMount(()=>{

    })
    onCleanup(()=>{

    })

    return (
        <MainLayout>


            {/* HOME PAGE START */}
            <div class="flex-it py-1 px-4 flex-row">
            <div class="text-white">AUTHENTICATED: {JSON.stringify(authState.isAuthenticated)}</div>
                <div class="flex-it mr-4">
                    <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
                        <img
                            class="rounded-full"
                            src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
                        ></img>
                    </div>
                </div>
                {/* MESSENGER START */}
                <div class="flex-it flex-grow">
                    <div class="flex-it">
                        <textarea
                            onInput={(event) => {
                                setContent(event.currentTarget.value)
                            }}
                            name="content"
                            rows="1"
                            id="glide"
                            class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
                            placeholder={"What's new?"}
                            value={content()}
                        />

                    </div>
                    <div class="flex-it mb-1 flex-row xs:justify-between items-center">
                        <div class="flex-it mt-3 mr-3 cursor-pointer text-white hover:text-blue-400 transition">
                            <div class="upload-btn-wrapper">
                                <FaRegularImage class="cursor-pointer" size={18} />
                                <input type="file" name="myfile" />
                            </div>
                        </div>
                        <div class="flex-it w-32 mt-3 cursor-pointer">
                            <button
                                onClick={createGlide}
                                type="button"
                                class="
                            disabled:cursor-not-allowed disabled:bg-gray-400
                            bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
                            >
                                <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
                                    <span>Glide It</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                {/* MESSENGER END */}

            </div>
            <div class="h-px bg-gray-700 my-1" />
            {/* GLIDE POST START */}
            <For each={glides()}>
                {(glide) => (<GlidePost glide={glide} />)}
            </For>
            {/* <button onClick={()=>{ setDisplayContent(!displayContent())}}>Toggle Content</button>
            <Show when={displayContent()}>
                <HelloWorld/>
            </Show> */}
            {/* GLIDE POST END */}
            {/* HOME PAGE END */}
        </MainLayout>
    );
};

export default HomeScreen