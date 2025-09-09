import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/users')
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
        <p><strong>Saldo:</strong> R$ {user.account.balance}</p>
        <p><strong>Limite:</strong> R$ {user.account.limit}</p>
      </section>

      <section>
        <h2>Cartão</h2>
        <p><strong>Número:</strong> {user.card.number}</p>
        <p><strong>Limite:</strong> R$ {user.card.limit}</p>
      </section>
    </div>
  );
}

export default Dashboard;
