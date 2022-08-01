import { useState } from "react";
import Counter from "./Counter";

export default function CounterParent() {
    const [inputValue, setInputValue] = useState(35);
    const [start, setStart ] = useState();

    return(
        <div className="Counterparent">
            <p>{inputValue}</p>
            <input 
                type="number"
                placeholder="ჩაწერეთ რიცხვი"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => setStart(parseInt(inputValue))}>start value</button>
            <Counter startValue={start} increase={30} />
            <Counter startValue={500} />
            <Counter />
            <Counter />
            <Counter />
        </div>
    )
    
}