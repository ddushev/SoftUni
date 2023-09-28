import { useState } from "react";

export default function Prop({start, init}) {
    const [timer, setTime] = useState(start);
    const [counter, setCount] = useState(init)
    setTimeout(() => {
        setTime(timer => timer + 1);
    }, 1000);

    function onClick() {
        setCount((counter) => counter + 5)
    }

    return (
        <div>
            Timer: {timer} 
            <br />
            Click counter: {counter}
            <button onClick={onClick}>+</button>
        </div>
    )
}