import {useState} from 'react';

export default function Form() {
    const [inputValue, setInputValue] = useState('მნიშვნელობა');
    const [title, setTiTle] = useState();
    const [num1, setNum1] = useState ();
    const [num2, setNum2] = useState ();

    function submit(e) {
        e.preventDefault();
        alert('ფრომა დასაბმითდა');
    }
    function btnChange(e) {
        setTiTle(inputValue);
        
    }
    return(
        <form className="form" action="/FormSubmited" onSubmit={submit} >
            <h2>სათაური: {title}</h2>
            <p>{inputValue}</p>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button type="button" onClick={btnChange}>submit</button>
            <div className='calculator'>
                <p>მიმატება: {num1 + num2}</p>
                <p>გამრავლება: {num1 * num2}</p>
                <p>გაყოფა: {num1 / num2}</p>
                <p>ხარისხი: {num1 ** num2}</p>
                <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
                <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
            </div>
        </form>
    )
}