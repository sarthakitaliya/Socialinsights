import React, { useEffect, useRef, useState } from "react";
import "./Chatbot.css";
import { Link2, Link2Icon, LoaderCircle, Send } from "lucide-react";
import axios from "axios";
import FormatMessage from "./FormatMessage";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);
    const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  useEffect(() => {
    setMessages([
        { message: "Hi! How can I help you with your social media performance analysis ?", sender: "bot" },
      ]);
  }, []);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    } 
}
  const sendMessage = async () => {
    setError("");
    if (input.trim() === "") return;
    const newInput = input.trim();

    setMessages((prevMessages) => [
      ...prevMessages,
      { message: newInput, sender: "user" },
    ]);
    setInput("");
    setLoading(true);
    
    try {
      const response = await axios.post(`${url}/chat`, {
        input: newInput,
      });

      if (!response.data.status) {
        setLoading(false);
        setError(response.data.message);
        return;
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { message: response.data.message, sender: "bot" },
      ]);
    } catch (error) {
      setError("Something went wrong");
    }finally{
      setLoading(false);
    }
  };
  return (
    <div className="chatbot-container">
      <nav>
        <h1>Socialinsights</h1>
        <div className="links">
        <a href="https://www.linkedin.com/in/sarthak-italiya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><Link2Icon /></a>
        <a href="https://www.linkedin.com/in/priyanshu-indra-8b9402291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><Link2Icon /></a>
        </div>
      </nav>
      <div className="chat-container">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <FormatMessage message={msg.message} />
            </div>
          ))}
          <div ref={messagesEndRef} />
          {
            loading && <div className="message bot loading"><LoaderCircle className="loader-circle" />Loading...</div>
          }
        </div>
            {
                error && <div className="error">{error}</div>
            }
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your analytics.."
            disabled={loading}
            onKeyDown={handleKeyPress}
          />
          <button className="send" onClick={sendMessage} disabled={loading}>
            <Send color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
