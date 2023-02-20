import Button from "../Buttons/Button";
import Input from "./Input";

import "./styling/forms/forms.css"

export default function Login({onSubmit, onChangeFunction}){
    function docLogin(e){
        e.preventDefault();
        onSubmit("dentist");
    }

    function clientLogin(e){
        e.preventDefault();
        onSubmit("patient");
    }
    return(
        <form className="main-forms">
            <Input name="email" placeholder="johnDoe@gmail.com" type="email" onChangeFunction={onChangeFunction}/>
            <Input name="password" placeholder="password!" type="password" onChangeFunction={onChangeFunction}/>
            <Button color={"blue"} text="I am a Client" onClickEvent={clientLogin} />
            <Button color={"white"} text="I am a Dentist" onClickEvent={docLogin} />
        </form>
    )
}