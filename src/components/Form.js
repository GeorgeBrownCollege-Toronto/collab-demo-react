import React, {useState} from "react";

function Form(props) {
    const [name,setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if(!name.trim()){
            return;
        }
        props.addTask(name);
        setName("");
    }

    function handleOnChange(e) {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} >
            <h2>
                <label htmlFor="new-todo-input" >
                    What needs to be done?
                </label>
            </h2>
            <input
             id="new-todo-input"
             value={name}
             type="text"
             autoComplete="off"
             onChange={handleOnChange} 
             />
             <button type="submit" >
                 Add
             </button>
        </form>
    )
}

export default Form;