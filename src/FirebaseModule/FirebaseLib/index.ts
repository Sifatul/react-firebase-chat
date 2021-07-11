import { NewMessageParam } from "./messageInterface"

const addMessage = (newData: NewMessageParam) => {
    const { messageBody, firebaseDatabase, callback = () => { }, uid, errorCallback = () => { } } = newData
    const newMsg = { ...messageBody, createdAt: new Date() }
    firebaseDatabase.ref(`react-Firebase-chat/${uid}`).push(newMsg).catch((error: any) => {
        errorCallback(error)
    });
    callback(newMsg)

}

const messageListenerById = (newData: { callback: Function, firebaseDatabase: any, uid: string, errorCallback?: Function }) => {
    const { firebaseDatabase, callback = () => { }, uid, errorCallback = () => { } } = newData

    firebaseDatabase.ref(`react-Firebase-chat/${uid}`).on('value', (snapshot: any) => {
        console.log(snapshot.val());
        callback(snapshot.val())
    }).catch((error: any) => {
        errorCallback(error)
    });

}

export { messageListenerById, addMessage }