import React,{useState} from 'react';
import Styles from './InputPopUp.module.css';

export default function InputPopUP() {
    const [name,setName] = useState("Bob Doe");
    const [message,setMessage] = useState("Hello There!")
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
