import React,{useState, useEffect} from 'react';
import Styles from './InputPopUp.module.css';
import {firebaseDatabase} from "../FirebaseSettings"
import ReactFirebaseChatMain from "../Component/index"

export default function InputPopUP() {
    const [name,setName] = useState("Bob Doe");
    const [message,setMessage] = useState("Hello There!")


 

    function sendMessage(){
        const reactFirebaseChat:any = new ReactFirebaseChatMain(firebaseDatabase)
        reactFirebaseChat.addClientMessage({
            message: "message",
            name: "name",
            userType: "client",
            readStatus: "false",
        },()=>{})
    }

    return (
        <div className={Styles.inputPopUpWrpper}>
            <input 
                className={[Styles.inputName,Styles.fWidth].join(" ")}
                placeholder={name}
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <textarea 
                className={[Styles.inputMessage,Styles.fWidth].join(" ")}
                placeholder={message}
                value={message}
                onChange={e => setMessage(e.target.value)}
            >
                
            </textarea>
            <button className={[Styles.sendMessage,Styles.fWidth].join(" ")} onClick={e=>sendMessage()}>Send</button>
        </div>
    )
}