import * as React from "react";
import './App.css';

  type MyProps = { 
    message: string; // using `interface` is also ok
  };
  type MyState = {
    count: number;
  };

  class Netlify extends React.Component<MyProps, MyState> {
    state: MyState = {
      count: 0,
    };

    render() {
        return (
            <div className='App-tsx2 div-class-comp'>
              <div className='div-big'>Class: {this.props.message}</div>
              <div>Class Component: 'Netlify' with full state</div>
              <div>Count: {this.state.count}</div>
              <button onClick={() => this.addN(-1)}>Sub 1</button>&#160;
              <button onClick={() => this.addN(1)}>Add 1</button>&#160;
              <button onClick={() => this.addN(5)}>Add 5</button>&#160;
              <button onClick={() => this.setN(0)}>Reset</button>&#160;
            </div>
        );
    }
  
    addN = (amt: number) => {
      this.setState((state) => ({
        count: state.count + amt,
      }));
    };
  
    setN = (amt: number) => {
      this.setState((state) => ({
        count: amt,
      }));
    };
  
    increment = (amt: number) => {
      // like this
      this.setState((state) => ({
        count: state.count + amt,
      }));
    };
  
  }
  
  export default Netlify;