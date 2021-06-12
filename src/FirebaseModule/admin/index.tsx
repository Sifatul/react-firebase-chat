import * as React from "react";
import {clientsMessageListener} from "../FirebaseLib/index"
import {messageBody} from "../FirebaseLib/messageInterface"

export default function Index(props:any) {
    React.useEffect(()=>{
       
        clientsMessageListener( {
            FirebaseDatabase: props.firebaseDatabase,
            callback:(clientMsgs:messageBody)=>{
                console.log(clientMsgs)
            }
        })            
        
    },[])
    
    return (
        <div>
            Admin
        </div>
    )
}
