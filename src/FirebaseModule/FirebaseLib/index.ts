import { NewMessageParam } from "./messageInterface"

const addMessage = (newData: NewMessageParam) => {
    const { messageBody, firebaseDatabase, callback = () => { }, uid, errorCallback = () => { } } = newData
    try {
        const newMsg = { ...messageBody, createdAt: new Date() }
        firebaseDatabase.ref(`react-Firebase-chat/${uid}`).push(newMsg);
        callback(newMsg)
    } catch (e) {
        errorCallback(e)
    }

}

const messageListenerById = (newData: { callback: Function, firebaseDatabase: any, uid: string, errorCallback?: Function }) => {
    const { firebaseDatabase , callback = () => { }, uid, errorCallback = () => { } } = newData

    firebaseDatabase.ref(`react-Firebase-chat/${uid}`).on('value', (snapshot: any) => {
        console.log(snapshot.val());
        callback(snapshot.val())
    }, (errorObject: any) => {
        errorCallback(errorObject)
    });

}

export { messageListenerById, addMessage }