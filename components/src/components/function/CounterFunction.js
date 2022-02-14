import { useState, useEffect } from "react";

const CounterFunction = ({ time }) => {

    const [student, setStudent] = useState({
        name: "default student",
        classroom: "1A",
        grade: 100,
        birthDate: "01/01/2021"
    });

    const [counter, setCounter] = useState(0);
    const resetCounter = () => {
        setCounter(0);
    }

    const timer = () => {
        setCounter(counter + 1);
    };

    useEffect(() => {
        const counterInterval = setInterval(timer, time);

        return () => {
            clearInterval(counterInterval);
        }
    });

    useEffect(() => {
        if (counter == 0) {
            console.log("Counter is set to 0");
        }

        return () => {
            if (counter == 0) {
                console.log("Counter is changing from 0");
            }
        }
    }, [counter])

    return <div>
        <p>
            Counter: {counter}
        </p>
        <button onClick={() => { setCounter(0) }}>Reset 1</button>
        <button onClick={() => resetCounter()}>Reset 2</button>
    </div>;
}

export default CounterFunction;
