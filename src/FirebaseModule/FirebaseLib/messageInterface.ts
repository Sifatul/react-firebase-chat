export interface messageBody {
    message: string,
    name: string,
    userType: string,
    readStatus: boolean,
}

export interface NewMessageParam {
    messageBody: messageBody, 
    callback: Function,
    FirebaseDatabase:any,
    clientUid:string
}