import { NewMessageParam } from "./messageInterface"


const addClientMessage = (newData: NewMessageParam) => {
    const { messageBody, FirebaseDatabase, callback, clientUid } = newData
    FirebaseDatabase.ref(`react-Firebase-chat/client/${clientUid}`).push({ ...messageBody, createdAt: new Date() });
    callback()
}

const addAdminMessage = (newData: NewMessageParam) => {
    const { messageBody, FirebaseDatabase, callback, clientUid } = newData
    FirebaseDatabase.ref(`react-Firebase-chat/admin/${clientUid}`).push({ ...messageBody, createdAt: new Date() });
    callback()
}
const clientMessageListenerClientById = (newData: {
    callback: Function,
    FirebaseDatabase: any,
    clientUid: string
}) => {
    const { FirebaseDatabase, callback, clientUid } = newData

    FirebaseDatabase.ref(`react-Firebase-chat/client/${clientUid}`).on('value', (snapshot: any) => {
        console.log(snapshot.val());
        callback(snapshot.val())
    }, (errorObject: any) => {
        console.log('The read failed: ' + errorObject.name);
    });

}
const clientsMessageListener = (newData: {
    callback: Function,
    FirebaseDatabase: any,
}) => {
    const { FirebaseDatabase, callback } = newData

    FirebaseDatabase.ref(`react-Firebase-chat/client`).on('value', (snapshot: any) => {
        console.log(snapshot.val());
        callback(snapshot.val())
    }, (errorObject: any) => {
        console.log('The read failed: ' + errorObject.name);
    });
}
export { addClientMessage, addAdminMessage, clientMessageListenerClientById, clientsMessageListener }