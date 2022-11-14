import React from 'react';
import logo from './logo.svg';
import './App.css';


interface stProps {
  /** The text to display inside the button */
  xsTitle: string;
  /** Whether the button can be interacted with */
  xbDisabled: boolean;
}
type typearg2 = { xinfo: string };

function MyButton2({ xsTitle, xbDisabled}: stProps) {
  return (
    <button>{xsTitle}</button>
  );
}

function MyButton({ xinfo }: typearg2) {
  return (
    <button>{xinfo}</button>
  );
}

function App({ xinfo }: typearg2) {
  return (
    <div className='App-tsx' >
      <div>{xinfo}</div>
      <div className='div-big'>Element App with TypeScript</div>
      <div >Function Component: App</div>
      <MyButton xinfo="I'm a button" /> &#160;
      <MyButton2 xsTitle="button2" xbDisabled = {true} />
    </div>
  );
}

export type {typearg2};
export {App, MyButton};
