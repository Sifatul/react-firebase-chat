import * as React from "react"; 
// import Styles from './InputPopUp.module.css';
import { addMessage, messageListenerById } from "../FirebaseLib/index"
import { messageBody } from "../FirebaseLib/messageInterface"

const Styles: {
    "inputPopUpWrpper": React.CSSProperties,
    "fWidth": React.CSSProperties,
    "inputPopUpWrpperInputName": React.CSSProperties,
    "inputPopUpWrpperInputMessage": React.CSSProperties,
    "inputPopUpWrppersendMessage": React.CSSProperties,
    "myMessage": React.CSSProperties,
    "messageItem": React.CSSProperties,
    "messageContainer": React.CSSProperties,

} = {
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

    inputPopUpWrpperInputName: {
        padding: "10px",
        height: "20px",
        marginBottom: "10px",
        border: "1px solid var(--color-input-border)",
        borderRadius: "4px"
    },

    inputPopUpWrpperInputMessage: {
        height: "40px",
        padding: "10px",
        marginBottom: "10px",
        resize: "none",
        border: "1px solid var(--color-input-border)",
        borderRadius: "4px"
    },

    inputPopUpWrppersendMessage: {
        backgroundColor: "var(--color-background)",
        border: "none",
        outline: "none",
        color: "var(--color-font)",
        padding: "10px 0",
        cursor: "pointer",
        borderRadius: "4px"
    },
    myMessage:{
        textAlign:'right'
    },
    messageItem:{
        display:'block',
        padding:'3px 5px'
    },
    messageContainer:{
        padding:'5px 0px',
        maxHeight:'200px',
        overflow:'auto',
        width:'100%'
    }

}

 

export default function InputPopUP(props: any) {
    // const [name, setName] = React.useState("Bob Doe");
    const [message, setMessage] = React.useState("")
    const [messages, setMessages ] = React.useState<messageBody[]>([])
    const {Uid, firebaseDatabase} = props

    const messageListenCallbackFunc= (data :any)=>{
        console.log("data received: ",data)
        const output = []
        for(const i in data){
            output.push(data[i])
        }
        setMessages(output)
      }
      const errorFunction= (error :any)=>{
        console.log("error occured: ",error)
      }
      React.useEffect(()=>{
        messageListenerById({firebaseDatabase: props.firebaseDatabase , callback: messageListenCallbackFunc, uid: props.uid, errorCallback : errorFunction })
      },[])


    function sendMessage() {
        addMessage({
            messageBody:
            {
                message: message,
                name: "name",
                userType: "client",
                readStatus: false,
                senderUid: Uid
            },
            firebaseDatabase: firebaseDatabase,
            callback: () => { },
            uid: Uid
        })
        setMessage('')
    }

    return (
        <div style={Styles.inputPopUpWrpper}>
            {/* <input
                style={{ ...Styles.inputPopUpWrpperInputName, ...Styles.fWidth }}
                placeholder={name}
                value={name}
                onChange={e => setName(e.target.value)}
            /> */}
            <div style={Styles.messageContainer}>
            {messages.map(item=>{
                if(item.senderUid === Uid){
                    return <p style={{...Styles.myMessage, ...Styles.messageItem}}>{item.message}</p>
                }
                return <p style={Styles.messageItem}>{item.message}</p>
            })}
            </div>
            
            
            <textarea
                style={{ ...Styles.inputPopUpWrpperInputMessage, ...Styles.fWidth }}
                placeholder={message}
                value={message}
                onChange={e => setMessage(e.target.value)}
            >

            </textarea>
            <button style={{ ...Styles.inputPopUpWrppersendMessage, ...Styles.fWidth }} onClick={() => sendMessage()}>Send</button>
        </div>
    )
}
