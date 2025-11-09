import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">🃏 Belote & Amis</div>
        <nav>
          <a className="navlink" href="/">Accueil</a>
          <a className="navlink" href="/lobby">Lobby</a>
        </nav>
      </div>
    </header>
  );
}
