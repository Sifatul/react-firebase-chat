import { NewMessageParam } from "./messageInterface"

const addMessage = (newData: NewMessageParam) => {
    const { messageBody, firebaseDatabase, callback = () => { }, Uid, errorCallback = () => { } } = newData
    try {
        const newMsg = { ...messageBody, createdAt: new Date() }
        firebaseDatabase.ref(`react-Firebase-chat/${Uid}`).push(newMsg);
        callback(newMsg)
    } catch (e) {
        errorCallback(e)
    }

}

const messageListenerById = (newData: { callback: Function, firebaseDatabase: any, Uid: string, errorCallback?: Function }) => {
    const { firebaseDatabase , callback = () => { }, Uid, errorCallback = () => { } } = newData

    firebaseDatabase.ref(`react-Firebase-chat/${Uid}`).on('value', (snapshot: any) => {
        console.log(snapshot.val());
        callback(snapshot.val())
    }, (errorObject: any) => {
        errorCallback(errorObject)
    });

}

export { messageListenerById, addMessage }