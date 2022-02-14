import { useRef, useState, useEffect } from "react";

const GreetingsFunction = () => {
    const inputRef = useRef();
    const [name, setName] = useState("");

    const inputChangeHandler = (event) => {
        setName(event.target.value);
    }

    useEffect(() => {
        inputRef.current.focus();
    })

    return <div>
        <label htmlFor="UserNameInput">Your Name: </label>
        <input id="UserNameInput" type="text" ref={inputRef} onChange={inputChangeHandler}></input>
        <hr />
        {name ? <h1>Merhaba {name}</h1> : <p>Lütfen isim giriniz</p>}
    </div>;
}

export default GreetingsFunction;