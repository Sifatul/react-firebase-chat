import React from 'react';
import './App.css'; 
import {firebaseDatabase} from "./FirebaseSettings"
import {ClientView, AdminView} from "./FirebaseModule/index"

function App() {
  return (
    <>
      <ClientView firebaseDatabase={firebaseDatabase}/>
      <AdminView firebaseDatabase={firebaseDatabase}/>
    </>
  );
}

export default App;
