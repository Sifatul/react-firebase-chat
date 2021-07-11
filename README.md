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

- firebaseDatabase: reference to the firebase realtime database 
- uid: Unique identifier of the user
- callback : callback function to receive data afer the api is excuted
- errorCallback : callback function to receive data afer the api request fails

## 1. Send Message API
***
 ```js
import {addMessage} from "react-firebase-chat"
```

Pass the required params: 
- ``messageBody`` (required)
- ``firebaseDatabase`` (required)
- ``uid`` (required)
- ``callback`` (optional)
- ``errorCallback`` (optional)
```js
const _messageBody = {
      message: "MESSAGE_TEXT",
      name: "SENDER_NAME",
      readStatus: false,
      senderUid: "SENDER_UNIQUE_ID"
}
addMessage({
    messageBody: _messageBody,
    firebaseDatabase: "YOUR_FIREBASE_REALTIME_DATABASE_REFERENCE",
    uid: "SENDER_UNIQUE_ID",
    errorCallback: (e) => {
      console.error("Error occurred. ", e)
    },
    callback: (e) => {
      console.log("message added successfully. ", e)
    }
})
```

## 2. Messages listener by user id
***
 ```js
import {messageListenerById} from "react-firebase-chat"

```

Pass the required params: 
- ``firebaseDatabase`` (required)
- ``uid`` (required)
- ``callback`` (optional)
- ``errorCallback`` (optional)
```js
 
messageListenerById({
    firebaseDatabase: "YOUR_FIREBASE_REALTIME_DATABASE_REFERENCE",
    uid: "UNIQUE_ID_OF_THE_SENDER",
    callback: (data) => {
        console.log("all messages of the user: ", data)
    },
    errorCallback: (e) => {
        console.log("message added successfully. ", e)
    }
})
```

## License

MIT

