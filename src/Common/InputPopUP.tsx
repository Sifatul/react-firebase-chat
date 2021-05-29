import React,{useState} from 'react';
import Styles from './InputPopUp.module.css';
import {firebaseDatabase} from "../FirebaseSettings"

export default function InputPopUP() {
    const [name,setName] = useState("Bob Doe");
    const [message,setMessage] = useState("Hello There!")

    const reactFirebaseChatMain:any = new ReactFirebaseChatMain(firebaseDatabase)
    reactFirebaseChatMain.addClientMessage({
        message: "message",
        name: "name",
        userType: "client",
        readStatus: "false",
    },()=>{})
        reactFirebaseChatMain.clientsMessageListener((data:[])=>{
        console.log("clients:", data)
    })
    const clientId = '08e47862-7edf-4613-abf0-6a506bfff54f'
        reactFirebaseChatMain.clientMessageListenerClientById(clientId, (data:[])=>{
        console.log("client message :", data)
    })

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
            <button className={[Styles.sendMessage,Styles.fWidth].join(" ")}>Send</button>
        </div>
    )
}
