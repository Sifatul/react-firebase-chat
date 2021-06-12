# react-firebase-chat

React API to store and fetch data in firebase realtime database



## Features
***

- Data store API
- Data fetch API
- UI to send message 
   

  
## Install
***
```js
npm install react-firebase-chat --save
``` 
#### Pre-requisite

- [Setup firebase realtime database](https://firebase.google.com/docs/database/web/start) for the application


## Usage
***
## Props

- FirebaseDatabase: reference to the firebase realtime database 
- Uid: Unique identifier of the user
- callback : callback function to receive data afer the api is excuted
- errorCallback : callback function to receive data afer the api request fails


## 1. Send Message UI component


### Snippets

 ```js
import {ClientView} from "react-firebase-chat"

import {firebaseDatabase} from "FIREBASE_SETUP" // your setup
 

export default function MessageSendUi() { 
    return <ClientView 
        firebaseDatabase = {firebaseDatabase}
        Uid ="UNIQUE_UID"
        />
}
```
## 2. Send Message API
***
import ```addMessage``` method
 ```js
import {addMessage} from "react-firebase-chat"
```

Pass the required params: 
- ``messageBody`` (required)
- ``FirebaseDatabase`` (required)
- ``Uid`` (required)
- ``callback`` (optional)
- ``errorCallback`` (optional)
```js
const messageBody = {
    message: "DESIRED_MESSAGE"
}
addMessage({
    messageBody: messageBody,
    FirebaseDatabase: FirebaseDatabase,
    callback: "CALLBACK_FUNCTION",
    Uid: "UNIQUE_SENDER_ID"
})
```

## License

MIT

