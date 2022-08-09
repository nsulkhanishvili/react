import Button from "./Button";

export default function TodoItem({completed, id, text, onChangePassed}) {
    return(
        <li  >
            <input 
                type="checkbox" 
                cheaked={completed} 
                onChange={() => onChangePassed(id)} 
         />
            <span className={completed ? "done" : ''} >{text}</span>
            <Button text="Delete"/>
     </li>
    )
}