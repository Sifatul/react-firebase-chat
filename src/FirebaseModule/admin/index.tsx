import * as React from "react";
import {messageListenerById} from "../FirebaseLib/index"
import {messageBody} from "../FirebaseLib/messageInterface"

export default function Index(props:any) {
    React.useEffect(()=>{
       
        messageListenerById( {
            firebaseDatabase: props.firebaseDatabase,
            callback:(clientMsgs:messageBody)=>{
                console.log(clientMsgs)
            },
            Uid: props.Uid
        })            
        
    },[])
    
    return (
        <div>
            Admin
        </div>
    )
}
