import Input from "./Input";

import Button from "../Buttons/Button";

// reusing the button & input components

import "./styling/forms/forms.css"

export default function Signup({onSubmit, onChangeFunction}){
    return(
        <form className="main-forms" onSubmit={onSubmit}>
            <Input name="name" placeholder="John Doe" type="text" onChangeFunction={onChangeFunction}/>
            <Input name="email" placeholder="johnDoe@gmail.com" type="email" onChangeFunction={onChangeFunction}/>
            <Input name="age" placeholder="18" type="number" onChangeFunction={onChangeFunction}/>
            <Input name="password" placeholder="password!" type="password" onChangeFunction={onChangeFunction}/>
            <Button color={"blue"} text="Sign Up"/>
        </form>
    )
}