import { useEffect, useRef, useState } from "react"
import Button from "./Button"
import TodoItem from "./TodoItem";

const _todoItems =[
    {
        id: 1, text:'ტესტ 1', completed: false
    },
    {
        id: 2, text:'ტესტ 2', completed: false
    },
    {
        id: 3, text:'ტესტ 3', completed: false
    }
]

export default function TodoApp() {
    const [inputValue, setInputValue] = useState("");
    const [todoItems, setTodoItems] = useState(_todoItems);
    const input = useRef();

    useEffect(() => {
        input.current.focus();
    }, [todoItems])

    function inputSubmit(e) {
            e.preventDefault();
            let newItem ={
                id:Date.now(), text: inputValue, completed: false
            };
            setInputValue('');
            setTodoItems([newItem, ...todoItems]);
    }
    function chacking(id) {
        const changItems = todoItems.map(item => {
            if(item.id === id ){
                item.completed = !item.completed
            }
            return item
        });
        setTodoItems(changItems)   
    }


    return(
        <div>
            <h3>Todo App</h3>
            <form onSubmit={inputSubmit}>
                <input
                    ref={input} 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                />
                <Button text="დამატება" type="submit" />
            </form>

            <ul>
                {todoItems.map((item, index) => {
                    return(
                        <TodoItem key={index} 
                            onChangePassed={chacking}
                            id={item.id}
                            completed={item.completed}
                            text={item.text}
                        />

                    );
                })}
            </ul>
        </div>
    )
}