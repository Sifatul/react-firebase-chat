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

Pass the required params: 
- ``messageBody`` (required) 
  - ``message`` (required) 
  - ``name`` (required) 
  - ``readStatus`` (required) 
  - ``senderUid`` (required) 
- ``firebaseDatabase`` (required)
- ``uid`` (required)
- ``callback`` (optional)
- ``errorCallback`` (optional)

```js
import { useCallback, useState } from 'react';
import { addMessage } from "react-firebase-chat-api";
import { firebaseDatabase } from "./FirebaseSettings"; // your firebase config
function App() {
  const [message, setMessage] = useState('')
  const userId = "USER_UNIQUE_ID"
  const _messageBody = {
    message: message,
    name: "SENDER_NAME",
    readStatus: false,
    senderUid: userId
  }
  const sendMessage = useCallback(() => {
    setMessage('')
    return addMessage({
      messageBody: _messageBody,
      firebaseDatabase,
      uid: userId,
      errorCallback: (e) => {
        console.error(e)
      },
      callback: (e) => {
        console.log("message added successfully. ", e)
      }
    })
  }, [firebaseDatabase, message])


  return (
    <div className="App">
      <header className="App-header">
        <input onChange={e => setMessage(e.target.value)} value={message}></input>
        <button onClick={e => sendMessage()}> sendMessage </button>
      </header>
    </div>
  );
}

export default App;

```

## 2. Messages listener by user id
Pass the required params: 
- ``firebaseDatabase`` (required)
- ``uid`` (required)
- ``callback`` (required)
- ``errorCallback`` (optional)
```js
import { useEffect, useState } from 'react';
import { messageListenerById } from "react-firebase-chat-api";
import { firebaseDatabase } from "./FirebaseSettings"; // your firebase config
function App() {

  const [userMessages, setUserMessage] = useState([])
  const userId = "USER_UNIQUE_ID"

  useEffect(() => {
    if (!firebaseDatabase) return
    messageListenerById({
      firebaseDatabase,
      uid: userId,
      callback: (data) => {
        console.log("all messages of the user: ", data)
        const newData = []
        for (var key in data) {
          newData.push(data[key])
        }
        setUserMessage(newData)
      },
      errorCallback: (e) => {
        console.log("message added successfully. ", e)
      }
    })
  }, [firebaseDatabase])


  return (
    <div className="App">
      <header className="App-header">
        {userMessages.map(item => <>
            <p>message : {item.message}</p>
            <p>createdAt: {item.createdAt}</p>
            <br/>
          </>
        )}

      </header>
    </div>
  );
}

export default App;

```

## License

MIT

