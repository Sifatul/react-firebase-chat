import React from 'react';
import {useState} from 'react';
// import Styles from './InputPopUp.module.css';
import ReactFirebaseChatMain from "../FirebaseLib/index"
const Styles:{
    "inputPopUpWrpper": React.CSSProperties,
    "fWidth": React.CSSProperties,
    "inputPopUpWrpperInputName": React.CSSProperties,
    "inputPopUpWrpperInputMessage": React.CSSProperties,
    "inputPopUpWrppersendMessage": React.CSSProperties,

}= {
    "inputPopUpWrpper": {
        width: "300px",
        height: "auto",
        position: "fixed",
        bottom: "calc(20px + 50px + 20px + 10px)",
        right: "10px",
        display: "flex",
        flexWrap: "wrap",
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)",
        padding: "10px",
        borderRadius: "4px"
    },
    
    fWidth: {
        width: "100%"
    },
    
    inputPopUpWrpperInputName:{
        padding: "10px",
        height: "20px",
        marginBottom: "10px",
        border: "1px solid var(--color-input-border)",
        borderRadius: "4px"
    },
    
    inputPopUpWrpperInputMessage:{
        height: "40px",
        padding: "10px",
        marginBottom: "10px",
        resize: "none",
        border: "1px solid var(--color-input-border)",
        borderRadius: "4px"
    },
    
    inputPopUpWrppersendMessage:{
        backgroundColor: "var(--color-background)",
        border: "none",
        outline: "none",
        color: "var(--color-font)",
        padding: "10px 0",
        cursor: "pointer",
        borderRadius: "4px"
    }

}
 

export default function InputPopUP(props: any) {
    const [name,setName] = useState("Bob Doe");
    const [message,setMessage] = useState("Hello There!")
    const reactFirebaseChat:ReactFirebaseChatMain = new ReactFirebaseChatMain(props.firebaseDatabase)

    function sendMessage(){
        reactFirebaseChat.addClientMessage({
            message: "message",
            name: "name",
            userType: "client",
            readStatus: false,
        },()=>{})
    }

    return (
        <div style={Styles.inputPopUpWrpper}>
            <input 
                style={{...Styles.inputPopUpWrpperInputName, ...Styles.fWidth}}
                placeholder={name}
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <textarea 
                style={{...Styles.inputPopUpWrpperInputMessage, ...Styles.fWidth}}
                placeholder={message}
                value={message}
                onChange={e => setMessage(e.target.value)}
            >
                
            </textarea>
            <button style={{...Styles.inputPopUpWrppersendMessage, ...Styles.fWidth}} onClick={()=>sendMessage()}>Send</button>
        </div>
    )
}
