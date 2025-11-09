import React from "react";
import Chat from "../components/Chat";
import Header from "../components/Header";

export default function Karaoke() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg,#1d5b1e,#2f7a2f)",
      color: "white",
    }}>
      <Header />
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>🎤 Soirée Karaoké de Belote & Amis</h1>
        <p>
          Envoyez vos morceaux à{" "}
          <a href="mailto:tonamie@example.com" style={{ color: "#ffd700", fontWeight: "bold" }}>
            tonamie@example.com
          </a>
        </p>

        {/* Lecteur audio intégré (ex: Mixlr, Twitch, etc.) */}
        <iframe
          src="https://mixlr.com/tonamie/embed"
          width="100%"
          height="180"
          frameBorder="0"
          allow="autoplay"
          style={{
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            marginTop: "20px",
          }}
          title="Lecteur Karaoké"
        ></iframe>

        {/* Zone de chat */}
        <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
          <Chat />
        </div>
      </div>
    </div>
  );
}
