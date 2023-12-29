import React, { useContext, useState } from 'react';
import { newContext } from '../../App';
import EmojiPicker from 'emoji-picker-react';
import './ChatComponent.css'

function ChatComponent({ messages, onSendMessage }) {
  const { currentUser } = useContext(newContext);
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const messageData = { currentUser, message: newMessage };
      onSendMessage([...messages, messageData]);
      setNewMessage('');

      // Simulate sending the message to a server (for testing without a backend)
      // window.postMessage(messageData, '*');
    }
  };


  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            className={`chat-message ${message?.currentUser === currentUser ? 'sent-message' : 'received-message'}`}
            key={index}
          >
            <h5><b>{message?.currentUser}</b></h5>
            <p>{message?.message}</p>
          </div>
        ))}
      </div>
      <div className="chat-input" style={{ position: 'relative' }}>
      <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Enter your message..."
        />
        {showEmojiPicker && <div style={{ position: 'absolute', bottom: '100px' , }}>
          <EmojiPicker onEmojiClick={(emoji) => setNewMessage((prevMessage) => prevMessage + emoji.emoji)} />
        </div>}
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatComponent;
