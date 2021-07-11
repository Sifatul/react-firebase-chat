export interface messageBody {
    message: string,
    name: string,
    readStatus: boolean,
    senderUid:string
}

export interface NewMessageParam {
    messageBody: messageBody, 
    callback?: Function,
    errorCallback?: Function,
    firebaseDatabase:any,
    uid:string
}