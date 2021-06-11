import {useEffect} from 'react'; 
import ReactFirebaseChatMain from "../FirebaseLib/index"
import {messageBody} from "../FirebaseLib/messageInterface"

export default function Index(props:any) {
    useEffect(()=>{
        const reactFirebaseChat:any = new ReactFirebaseChatMain(props.firebaseDatabase)
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
