import React, {useState, useEffect} from 'react';
import './App.css';
import {FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message.js'
import db from "./firebase";
import firebase from "firebase";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState(''); 
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  console.log(input);
  console.log(messages);

  useEffect(() => {
    // run once when app loads.
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    });
   }, []) // condition

  useEffect(() => {
   // run code on a condition.
   setUsername(prompt('Please Enter your name.'));
  }, []) // condition

  const sendMessage = (event) => {
   // all the logic to send a message.
   event.preventDefault(); // prevents refreshing.

   db.collection('messages').add({
     message: input,
     username : username,
     timestamp : firebase.firestore.FieldValue.serverTimestamp(),
   })
   setMessages([...messages, {username: username, message: input}]); // keep the current messages, and append the object.
   setInput(''); // by defaul, no text in input field.

  }
  return (
    <div className="App">
      <h1 className="app__header"> A FB Messenger like group chat app. </h1>
      <img className="app__logo" src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-facebook-messenger-1.png"
       alt = "fb messenger logo."/>
      
      <h2> Developed by: Parth Sawant </h2>
      <h4>Github :<i> www.github.com/parth-sudo </i> </h4> 
      <h3> Welcome {username} </h3>
     
      <form className="app__form">
        <FormControl className="app__formControl" > {/* for sending message. */}
        <Input className="app__input" placeholder="Enter a message..." value = {input} onChange={event => setInput(event.target.value) } /> 
        <IconButton className="app__iconButton" disabled = {!input} variant="contained" color="primary" type="submit" onClick={sendMessage}> 
        <SendIcon/>
        </IconButton>
      </FormControl>
      </form>
    
      {/* messages themselves */}
      {
       messages.map(message => (
        <Message username = {username} message = {message}/>
       ))

      }
     
    </div>
  );
}

export default App;
