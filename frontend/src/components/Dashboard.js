import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/mock-user.json')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  if (!user) return <div>Carregando...</div>;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Bem-vindo, {user.name}</h1>

      <section>
        <h2>Conta</h2>
        <p><strong>Número:</strong> {user.account.number}</p>
        <p><strong>Agência:</strong> {user.account.agency}</p>
        <p><strong>Saldo:</strong> R$ {user.account.balance.toFixed(2)}</p>
        <p><strong>Limite:</strong> R$ {user.account.limit.toFixed(2)}</p>
      </section>

      <section>
        <h2>Cartão</h2>
        <p><strong>Número:</strong> {user.card.number}</p>
        <p><strong>Limite:</strong> R$ {user.card.limit.toFixed(2)}</p>
      </section>

      <section>
        <h2>Funcionalidades</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {user.features.map(f => (
            <div key={f.id} style={{ textAlign: 'center' }}>
              <img src={f.icon} alt={f.description} style={{ width: '50px' }} />
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Notícias</h2>
        <ul>
          {user.news.map(n => (
            <li key={n.id}>
              <img src={n.icon} alt={n.description} style={{ width: '20px', verticalAlign: 'middle', marginRight: '8px' }} />
              {n.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Dashboard;
