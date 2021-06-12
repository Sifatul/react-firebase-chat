import { NewMessageParam } from "./messageInterface"

const addMessage = (newData: NewMessageParam) => {
    const { messageBody, FirebaseDatabase, callback = () => { }, Uid, errorCallback = () => { } } = newData
    try {
        const newMsg = { ...messageBody, createdAt: new Date() }
        FirebaseDatabase.ref(`react-Firebase-chat/${Uid}`).push(newMsg);
        callback(newMsg)
    } catch (e) {
        errorCallback(e)
    }

}

const messageListenerById = (newData: { callback: Function, FirebaseDatabase: any, Uid: string, errorCallback?: Function }) => {
    const { FirebaseDatabase, callback = () => { }, Uid, errorCallback = () => { } } = newData

    FirebaseDatabase.ref(`react-Firebase-chat/${Uid}`).on('value', (snapshot: any) => {
        console.log(snapshot.val());
        callback(snapshot.val())
    }, (errorObject: any) => {
        errorCallback(errorObject)
    });

}

export { messageListenerById, addMessage }