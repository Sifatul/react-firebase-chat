import { v4 as uuidv4 } from 'uuid';

interface messageBody {
    message: string,
    name: string,
    userType: string,
    readStatus: boolean,
}

export class ReactFirebaseChatMain {
    private readonly FirebaseDatabase 
    private clientUid
    constructor(firebaseDatabase: any) {
        this.FirebaseDatabase = firebaseDatabase
        this.clientUid = uuidv4()
    }
    setUserUid(userUId:string){
        this.clientUid = userUId
    }
    

    addClientMessage(newMsg: messageBody, callback: Function) {
        // reactMessageRef.push(newMsg)
        // const FirebaseDatabase = this.Firebase.database()
        // const FirebaseAuth = this.Firebase.auth()
        // const FirebaseUid = FirebaseAuth.currentUser.uid
        const FirebaseUid = Math.random()
        this.FirebaseDatabase.ref(`react-Firebase-chat/client/${this.clientUid}`).push({ ...newMsg, createdAt: new Date(), FirebaseUid });
        callback()
    }
    
    addAdminMessage(newMsg: messageBody, callback: Function) {
         
    }
    clientMessageListener(FirebaseClientId: string) {

    }

}
export default ReactFirebaseChatMain