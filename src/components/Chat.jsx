import React, { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, user: "Marie", text: "Bonsoir à tous 😊" },
    { id: 2, user: "Jean", text: "Salut Marie ! Prête à jouer ?" },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), user: "Moi", text: input }]);
    setInput('');
  };

  return (
    <aside className="lobby-chat">
      <div className="chat-header">💬 Chat</div>
      <div className="chat-body">
        {messages.map(m => (
          <div className="msg" key={m.id}>
            <strong>{m.user}: </strong>{m.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Écrire un message..."
        />
        <button>Envoyer</button>
      </form>
    </aside>
  );
}
