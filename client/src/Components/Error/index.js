// this component is for handling errors.
// though unused.
export default function ErrorModel({errors}){
    return(errors?<div className="erros-div">
        {errors.map(e=><p>{e}</p>)}
    </div>:<></>)
}