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
        if(this.FirebaseDatabase) return
        this.FirebaseDatabase = firebaseDatabase
        this.clientUid = uuidv4()
    }
    setUserUid(userUId:string){
        this.clientUid = userUId
    }
    

    addClientMessage(newMsg: messageBody, callback: Function) {
        this.FirebaseDatabase.ref(`react-Firebase-chat/client/${this.clientUid}`).push({ ...newMsg, createdAt: new Date() });
        callback()
    }
    
    addAdminMessage(newMsg: messageBody, callback: Function) {
        this.FirebaseDatabase.ref(`react-Firebase-chat/admin/${this.clientUid}`).push({ ...newMsg, createdAt: new Date() });
    }
    clientMessageListenerClientById(clientId: string, callback: Function) {
        this.FirebaseDatabase.ref(`react-Firebase-chat/client/${this.clientUid}`).on('value', (snapshot:any) => {
            console.log(snapshot.val());
            callback(snapshot.val())
          }, (errorObject:any) => {
            console.log('The read failed: ' + errorObject.name);
          });
        
    }
    clientsMessageListener(callback:Function) {
        this.FirebaseDatabase.ref(`react-Firebase-chat/client`).on('value', (snapshot:any) => {
            console.log(snapshot.val());
            callback(snapshot.val())
          }, (errorObject:any) => {
            console.log('The read failed: ' + errorObject.name);
          });
    }


}
export default ReactFirebaseChatMain