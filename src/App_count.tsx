import * as React from 'react';

import {useReducer} from 'react';

interface State {
   count: number 
};

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

export default function AppCount() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div className='App-tsx2'>
      <div className='div-big'>Simple counter</div>
      <div>Function Component: AppCount with hooks</div>
      <div>Count: {state.count}</div>
      <button onClick={addFive}>Add 5</button>&#160;
      <button onClick={reset}>Reset</button>
    </div>
  );
}
