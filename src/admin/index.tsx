import React,{useState, useEffect} from 'react';
import {firebaseDatabase} from "../FirebaseSettings"
import ReactFirebaseChatMain from "../Component/index"
import {messageBody} from "../Interfaces/message.enum"

export default function Index() {
    useEffect(()=>{
        const reactFirebaseChat:any = new ReactFirebaseChatMain(firebaseDatabase)
        reactFirebaseChat.clientsMessageListener((clientMsgs:messageBody)=>{
            console.log(clientMsgs)
        })
        
    },[])
    return (
        <div>
            Admin
        </div>
    )
}
