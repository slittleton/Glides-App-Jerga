import { A } from "@solidjs/router";
import { Accessor, Component, createSignal } from "solid-js";
import useForm from "../hooks/useForm";
import { RegisterForm } from "../types/Form";


declare module "solid-js" {
    namespace JSX {
        interface Directives {
            validate: number;
        }
    }
}



const RegisterScreen: Component = () => {
    const { handleInput, submitForm, validate, form } = useForm<RegisterForm>({
        fullName: '',
        nickName: '',
        email: '',
        avatar: '',
        password: '',
        passwordConfirmation: ''
    });

    const onFormSubmit = (form: RegisterForm) => {
        // note: this function carries the scope of its parent useForm which contains a store with the form values
        // you can see below on the submit form button that this function is passed to useForm and then executed in that context
        console.log('Submiting registration form', form);

    };


    return (
        <div class="flex-it justify-center items-center h-full">

            <div class="text-white text-4xl font-bold">Glider - Create Account</div>
            <div class="mt-10 flex-it h-100 xs:w-100 w-full bg-white p-10 rounded-2xl">
                <div class="flex-it">
                    <form class="flex-it">
                        <div class="flex-it overflow-hidden sm:rounded-md">
                            <div class="flex-it">
                                <div class="flex-it">
                                    <div class="flex-it py-2">
                                        <label class="block text-sm font-medium text-gray-700">
                                            Full Name
                                        </label>
                                        <input
                                            use:validate={100}
                                            onInput={e => handleInput(e)}
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        <div class="flex-it grow text-xs bg-red-400 text-white p-3 pl-3 mt-1 rounded-md">
                                            Error Error Beep Beep!
                                        </div>
                                    </div>

                                    <div class="flex-it py-2">
                                        <label class="block text-sm font-medium text-gray-700">
                                            Nick Name
                                        </label>
                                        <input
                                            onInput={e => handleInput(e)}
                                            type="text"
                                            name="nickName"
                                            id="nickName"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div class="flex-it py-2">
                                        <label class="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            onInput={e => handleInput(e)}
                                            type="text"
                                            name="email"
                                            id="email"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div class="flex-it py-2">
                                        <label class="block text-sm font-medium text-gray-700">
                                            Avatar
                                        </label>
                                        <input
                                            onInput={e => handleInput(e)}
                                            type="text"
                                            name="avatar"
                                            id="avatar"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div class="flex-it py-2">
                                        <label class="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <input
                                            onInput={e => handleInput(e)}
                                            type="password"
                                            name="password"
                                            id="password"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div class="flex-it py-2">
                                        <label class="block text-sm font-medium text-gray-700">
                                            Password Confirmation
                                        </label>
                                        <input
                                            onInput={e => handleInput(e)}
                                            type="password"
                                            name="passwordConfirmation"
                                            id="passwordConfirmation"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="text-sm text-gray-600 pb-4">
                                Already Registered?{" "}
                                <A class="hover:underline" href="/auth/login">
                                    Go to Login
                                </A>
                            </div>
                            <div class="flex-it py-2">
                                <button
                                    onClick={submitForm(onFormSubmit)}
                                    type="button"
                                    class="
                  bg-blue-400 hover:bg-blue-500 focus:ring-0
                  disabled:cursor-not-allowed disabled:bg-gray-400
                  inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2"
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterScreen;