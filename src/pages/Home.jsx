import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Header />
      <div className="home-center" style={{textAlign:'center', marginTop: '16px'}}>
        <div className="logo">🃏 <span className="brand-text">Belote & Amis</span></div>
        <p style={{opacity:.9}}>Retrouve la convivialité du Belote Club, dans une ambiance simple et chaleureuse.</p>
        <div className="cards" style={{display:'flex', gap:'8px', justifyContent:'center', margin:'16px 0'}}>
          <div className="card c1">♥</div>
          <div className="card c2">♠</div>
          <div className="card c3">♦</div>
        </div>
        <button className="enter-btn" onClick={() => navigate('/lobby')}>Entrer dans le salon</button>
      </div>
    </div>
  );
}
