import React from 'react'
import ReactFirebaseChatMain from "../component/index"
import {firebaseDatabase} from "../FirebaseSettings"

export default function index() {
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
        <div>
            Client
        </div>
    )
}
