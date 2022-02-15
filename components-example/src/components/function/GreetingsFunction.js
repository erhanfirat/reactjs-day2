import { useRef, useEffect, useState } from "react";

const greetingsStyle = {
    backgroundColor: "#3691de",
    color: "#ffffff",
    padding: "15px"
};


const GreetingsFunction = (props) => {
    const inputRef = useRef();
    const [name, setName] = useState("Anonim");

    useEffect(() => {
        inputRef.current.focus();
    });

    const inputChangeHandler = (e) => {
        console.log("Input change event > ", e);
        //setName(inputRef.current.value);
        setName(e.target.value);
    }

    return <div style={greetingsStyle}>
        <label htmlFor='userNameInput'>Your name: </label>
        <input id="userNameInput" type="text" ref={inputRef}
            onChange={inputChangeHandler} />
        <h1>Merhaba {name}</h1>
    </div>
}

export default GreetingsFunction;