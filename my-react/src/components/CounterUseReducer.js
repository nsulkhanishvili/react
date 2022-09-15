import { useReducer } from "react";

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + action.value};
      case 'decrement':
        return {count: state.count - action.value};
      default:
        throw new Error();
    }
  }

export default function CounterUseReducer() {
    // const [state, setState] = useState();
    const [state, dispatch] = useReducer(reducer, initialState);
    


    return (
        <section>
            <h3>Counter with UseReducer</h3>
            <p>{state.count}</p>
            <button onClick={() => dispatch({type: 'decrement', value: 10})}>-</button>
            <button onClick={() => dispatch({type: 'increment', value: 20})}>+</button>
        </section>
    )
}