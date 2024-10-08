import { IoTrendingUp } from "solid-icons/io";
import {
    Accessor,
    Context,
    createContext,
    createSignal,
    onCleanup,
    onMount,
    ParentComponent,
    Setter,
    Show,
    useContext
} from "solid-js";
import { createStore } from "solid-js/store";
import Loader from "../utils/Loader";



type AuthState = {
    isAuthenticated: boolean;
    loading: boolean;
};

const initialState = () => ({
    isAuthenticated: false,
    loading: true,
});

type AuthStateContextValues = {
    isAuthenticated: boolean,
    loading: boolean,

};
const AuthStateContext: Context<any> = createContext();

const AuthProvider: ParentComponent = (props) => {

    const [store, setStore] = createStore(initialState());
    console.log('Loading in AuthProviderNo', store.loading)

    const updateStore = <K extends keyof AuthState>(propName: K, propValue: AuthState[K]) => {
        setStore(propName, propValue);

    };

    const authenticateUser = async () => {
        

        return new Promise((res, rej) => {
            setTimeout(() => {

                console.log('PROMISE', store.loading)
                setStore("isAuthenticated", false);
                
                
                res(true);
                rej("AUTH ERROR SEE AUTHPROVIDER FILE");
            }, 500);
        });
    };

    onMount(async () => {
        try {
            await authenticateUser();
            console.log("AUTH PROVIDER onMOunt");
        } catch (e) {
            console.log("ERROR WITH AUTH PROVIDER", e);
        }
        finally {
            setStore('loading', false);
        }
    });
    onCleanup(() => {
        console.log("AUTH PROVIDER onCleanup");
    });
    return (
        <AuthStateContext.Provider
            value={store}
        >
            <Show
                when={store.loading === true}
                fallback={props.children}
            >
                <Loader size={100} />

            </Show>


        </AuthStateContext.Provider>);
};
export const useAuthState = () => useContext(AuthStateContext);
export default AuthProvider;














// const AuthStateContext = createContext<AuthStateContextValues>()
// const AuthProvider: ParentComponent = (props) => {
//     const [store, setStore] = createStore(initialState())
//     // console.log('STORE', store.isAuthenticated)
//     const authenticateUser = async () => {
//         return new Promise( (res) => {
//             setTimeout(() => {
//                 setStore("isAuthenticated", true)
//                 res(true)
//             }, 1000)
//         })
//     }
//     onMount(async () => {
//         try {
//             await authenticateUser()
//             console.log("authenticated", store.isAuthenticated)

//         } catch (err) {
//             console.log(err)
//         } finally {
//             setStore('loading', false)
//         }
//     })
//     onCleanup(() => {
//         console.log("AUTH PROVIDER onCleanup")
//     })
//     return (
//         <AuthStateContext.Provider
//             value={store}
//         >
//             {props.children}
//         </AuthStateContext.Provider>)
// }
// export const useAuthState =  () => useContext(AuthStateContext)
// export default AuthProvider






// type AuthStateContextValues = {
//     isAuthenticated: Accessor<boolean>,
//     loading:Accessor<boolean>,
//     setIsAuthenticated:Setter<boolean>,
//     setLoading: Setter<boolean>
// }
// const AuthStateContext = createContext<AuthStateContextValues>()
// const AuthProvider: ParentComponent = (props) => {
//     const [isAuthenticated, setIsAuthenticated] = createSignal(false);
//     const [loading, setLoading] = createSignal(true);
//     const authenticateUser = async () => {
//                 return new Promise( (res) => {
//                     setTimeout(() => {
//                         setIsAuthenticated(true)
//                         res(true)
//                     }, 3000)
//                 })
//             }
//     onMount(async () => {
//         authenticateUser()
//         console.log("AUTH PROVIDER onMOunt")
//     })
//     onCleanup(() => {
//         console.log("AUTH PROVIDER onCleanup")
//     })
//     return (
//         <AuthStateContext.Provider
//             value={{
//                 isAuthenticated,
//                 loading,
//                 setIsAuthenticated,
//                 setLoading
//             }}
//         >
//             {props.children}
//         </AuthStateContext.Provider>)
// }
// export const useAuthState = () => useContext(AuthStateContext)
// export default AuthProvider
