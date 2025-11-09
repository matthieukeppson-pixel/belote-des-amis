import React, { useState } from 'react';
import Chat from '../components/Chat';
import Header from '../components/Header';

const sampleTables = [
  { id: 1, name: 'Table 1', players: 3, status: 'En attente' },
  { id: 2, name: 'Table 2', players: 4, status: 'En cours' },
  { id: 3, name: 'Table 3', players: 2, status: 'En attente' },
  { id: 4, name: 'Table 4', players: 1, status: 'En attente' },
];

export default function Lobby() {
  const [tables] = useState(sampleTables);

  const join = (id) => {
    alert('Fonctionnalité multijoueur à venir. Vous rejoindrez la table ' + id);
  };

  return (
    <div style={{minHeight:'100vh', background:'linear-gradient(180deg,#1d5b1e,#2f7a2f)', color:'#fff'}}>
      <Header />
      <div className="lobby">
        <main className="lobby-main">
          <h2>Salons</h2>
          <div className="subtitle">Choisissez une table pour rejoindre vos amis.</div>
          <div className="tables">
            {tables.map(t => (
              <div className="table-card" key={t.id}>
                <div className="table-info">
                  <strong>{t.name}</strong>
                  <div>{t.players} / 4 joueurs</div>
                  <div className="status">{t.status}</div>
                </div>
                <div className="table-actions">
                  <button onClick={() => join(t.id)} disabled={t.players>=4}>Rejoindre</button>
                </div>
              </div>
            ))}
          </div>
        </main>
        <Chat />
      </div>
    </div>
  );
}
