export interface messageBody {
    message: string,
    name: string,
    userType: string,
    readStatus: boolean,
}

export interface NewMessageParam {
    messageBody: messageBody, 
    callback?: Function,
    errorCallback?: Function,
    FirebaseDatabase:any,
    Uid:string
}