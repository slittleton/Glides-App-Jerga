import { Accessor, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { Form, GliderInputEvent, LoginForm, RegisterForm, SubmitCallback } from "../types/Form";


const useForm = <T extends Form>(initialForm: T) => {
  const [form, setForm] = createStore<T>(initialForm);
  const [errors, setErrors] = createStore<Form>();

  const handleInput = (e: GliderInputEvent) => {
    const { name, value } = e.currentTarget;
    setForm(name as any, value as any);
    // setForm(name as keyof RegisterForm, value);
    // console.log(form())
  };

  // submitForm is a function that returns a function
  const submitForm = (submitCallback: SubmitCallback<T>) => () => {
    submitCallback(form);
  };


  const validate = (ref: HTMLInputElement, accessor: Accessor<number>) => {
    const value = accessor().valueOf();

    ref.onblur = checkValidity(ref);


    // ref.oninput = () => {
    //   console.log('input')
    // };
  };
  const maxLengthValidator = (element: HTMLInputElement, maxLength = 7) => {
    if (element.value.length === 0 || element.value.length < maxLength) { return ""; }
    

    console.log(`${element.name} should be less than ${maxLength} characters`)

    return `${element.name} should be less than ${maxLength} characters`;

  };
  const checkValidity = (element: HTMLInputElement) => () => {
    const message = "ERROR INVALID";
    const isValid = maxLengthValidator(element);

    if (!isValid) {
      setErrors(element.name, message);
    } else {
      setErrors(element.name, "");

      
    }
   

  };

  return {
    handleInput,
    submitForm,
    validate,
    form
  };
};

export default useForm;