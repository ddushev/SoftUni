import { useState } from "react";

export default function Prop({start, init}) {
    const css = {
        1: {background: "red"},
        2: {background: "green"},
        3: {background: "yellow"},
        4: {background: "orange"},
        5: {background: "blue"},
        6: {background: "purple"},
    }
    const [timer, setTime] = useState(start);
    const [counter, setCount] = useState(init)
    const [decreaser, setDecrease] = useState(6);
    setTimeout(() => {
        setTime(timer => timer + 1);
        setDecrease(decreaser => decreaser - 1)
    }, 1000);
    if (timer > 6) {
        setTime(0);
    }

    if (decreaser < 1) {
        setDecrease(6);
    }



    function increaseHandler() {
        setCount((counter) => counter + init);
    }
    function decreaseHanlder () {
        setCount(counter => counter - init);
    }


    return (
        <div>
            Timer: {timer} 
            <br />
            Click counter: {counter}
            <button style={css[timer]} onClick={() => increaseHandler()}>+</button>
            <button style={css[decreaser]} onClick={() => decreaseHanlder()}>-</button>
        </div>
    )
}