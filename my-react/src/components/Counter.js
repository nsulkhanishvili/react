import Button from './Button';
import {useEffect, useState} from "react";


export default function Counter({startValue, increase}) {
    const [number, setNumber] = useState(startValue || 15);

    useEffect(() => {
        if  (startValue) {
        setNumber(startValue);
        }else{
            setNumber(7);
        }
     
    },[startValue])

    useEffect(() => {
        var interval = setInterval (() => {
            setNumber((a) => a +1);
        },1000);
        return()  => {
                clearInterval(interval);
            };
    }, []);

    return(
        <div className="Counter">
            <h3>Counter</h3>
            <p>{number}</p>
            <Button text='ღილაკი' onClick={() => setNumber(number + (increase || 3))}/>
        </div>
    )
}