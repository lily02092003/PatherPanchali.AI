// components/Chatbot.jsx
import React, { useState } from "react";

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "You are a travel assistant. Only answer travel-related questions.",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const geminiFormatted = newMessages
      .filter((msg) => msg.role !== "system") // Gemini doesn't need 'system' role
      .map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.content }],
      }));

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta1/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_GOOGLE_APIKEY
        }`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: geminiFormatted }),
        }
      );

      const data = await res.json();
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't process that.";

      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Gemini error:", err);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Error reaching Gemini API." },
      ]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg w-96 z-50">
      <div className="bg-amber-300 px-4 py-2 rounded-t-lg flex justify-between items-center">
        <span className="font-bold text-black">Travel Chatbot</span>
        <button onClick={onClose} className="text-black font-bold">
          ✖
        </button>
      </div>
      <div className="p-4 max-h-60 overflow-y-auto text-black">
        {messages.slice(1).map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${
              msg.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <div className="inline-block px-3 py-2 rounded bg-gray-100">
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className="flex p-2 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about travel..."
          style={{
            color: "black", // text color
            backgroundColor: "#fff", // input background
            border: "1px solid #ccc",
            padding: "8px",
            borderRadius: "5px",
            width: "100%",
          }}
        />

        <button
          onClick={sendMessage}
          className="bg-amber-400 px-3 py-1 rounded font-bold text-black"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
