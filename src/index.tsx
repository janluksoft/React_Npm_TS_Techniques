//Ten soft definiuje elementy React {App, MyButton} z argumentem
//i można go wyświetlać w html jak poniżej. Tam jest [Function Component]  
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, MyButton} from './App';
import AppCount from './App_count';
import Netlify from './App_netlify';


type xArg = { xinfo: string };


class Main extends React.Component<any, any> {
  constructor(props: any){
      super(props);
  }

  public render() {
      return (
          <div>
            <HelloWorld defaultName='World' />
          </div>
      );
  }
}


class HelloWorld extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { name: this.props.defaultName };
        this.state = { count: 0 };
    }

    addFive() {
      //this.state.count = this.state.count + 5 };
    }
  
    reset() {
      //this.setState({ count: 0 });
    }

    public render() {
        return (
          <div className='App-tsx2'>
            <div className='div-big'>Class: Hello {this.props.defaultName}</div>
            <div>Function Component: AppCount with hooks</div>
            <div>Count: {this.state.count}</div>
            <button onClick={this.addFive}>Add 5</button>
            <button onClick={this.reset}>Reset</button>
            <div>Hello { this.state.name }!</div>
          </div>
        );
    }
}

//========================================================
function DApp() {
  return (
    <div>
      <table>
        <tr>
          <td><App xinfo="Ambrozja1 TypeScript"/></td>
          <td><App xinfo="Ambrozja2 TypeScript"/></td>
        </tr>
        <tr>
          <td>
            <AppCount />
          </td>
          <td><Netlify message='Netstart'/></td>
        </tr>
      </table>
      
    </div>
    );
}
//  <HelloWorld defaultName='Ludzie3' />

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
    //<App xinfo = {"Start React element" as string}/>
    //<AppR xinfo = "Start React element" />
    <DApp />
  //</React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
