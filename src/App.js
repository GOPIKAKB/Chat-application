import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import ChatComponent from './Components/ChatComponent/ChatComponent';
import LoginComponent from './Components/LoginComponent/LoginComponent';

export const newContext = createContext()
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newMessageListener = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    window.addEventListener('message', newMessageListener);

    return () => {
      window.removeEventListener('message', newMessageListener);
    };
  }, []);

  return (
    <div className="App">
      {console.log(messages)}
      <newContext.Provider value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }}>
        {isLoggedIn ? (
          <ChatComponent
            messages={messages}
            onSendMessage={setMessages}
            currentUser={currentUser}
          />
        ) : (
          <LoginComponent />
        )}
      </newContext.Provider>
    </div>
  );
}

export default App;
