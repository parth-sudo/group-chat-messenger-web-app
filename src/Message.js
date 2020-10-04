import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './Message.css';

function Message({message, username}) {
    const isUser = username === message.username;
  return (
     <div className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser ? "message__usercard" : "message__guestcard"}> {/* only the person who is logged in is going to get this class*/}
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username || 'Unknown user'}:`} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
