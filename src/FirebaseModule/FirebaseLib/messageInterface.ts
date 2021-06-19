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
    firebaseDatabase:any,
    Uid:string
}