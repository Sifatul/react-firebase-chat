import React from 'react';
import logo from './logo.svg';
import './App.css';
import {firebaseDatabase} from "./FirebaseSettings"
import ReactFirebaseChatMain from "./component/index"

function App() {
  const callback=()=>{
    alert("success")
  }
 
    
    const reactFirebaseChatMain = new ReactFirebaseChatMain(firebaseDatabase)
    setTimeout(()=>{
      reactFirebaseChatMain.addClientMessage({ message:"hello",
      name:"name",
      userType:"sifatul",
      readStatus:true},callback)
    },500)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
