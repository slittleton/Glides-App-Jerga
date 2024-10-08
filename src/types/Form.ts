

export type GliderInputEvent = InputEvent & {
    currentTarget: HTMLInputElement;
    target: HTMLInputElement;
};


export type Form = { [key: string]: string; };

export type LoginForm = {
    email: string,
    password: string;
} & Form

export type RegisterForm = {
    fullName: string,
    nickName: string,
    avatar: string,
    passwordConfirmation: string;
} & LoginForm
// NOTE: RegisterForm extends LoginForm which then extends Form
// this means RegisterForm inherits the types in Login Form (email and password)

export type SubmitCallback<T extends Form> = (f: T) => void;