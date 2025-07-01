# MentoriaBank 🏦

Projeto completo integrando **Spring Boot (Java 17)** no backend e **React** no frontend, inspirado no desafio da Santander Dev Week.

## 🚀 Tecnologias

- Java 17 + Spring Boot 3
- Spring Data JPA + H2
- OpenAPI/Swagger
- React + Hooks
- Fetch API para comunicação com backend
- CORS Configurado
- Layout simplificado com HTML/CSS puro

---

## 📦 Backend (Spring Boot)

### ✅ Funcionalidades
- API REST para dados bancários do usuário
- Endpoints: `/api/user/{id}`
- Documentação Swagger: `/swagger-ui.html`
- Banco de dados H2 em memória

### ▶️ Executar localmente
```bash
cd MentoriaBank/backend
./mvnw spring-boot:run
```

---

## 🌐 Frontend (React)

### ▶️ Executar localmente
```bash
cd MentoriaBank/frontend
npm install
npm start
```

### ✅ Funcionalidades
- Dashboard com:
  - Saldo, conta, cartão
  - Funcionalidades: PIX, Pagar, Transferir...
  - Notícias e atualizações
- Consome API em `/api/user/1`

> O frontend usa proxy para facilitar o acesso ao backend (`http://localhost:8080`).

---

## 📂 Estrutura

```
MentoriaBank/
├── backend/
│   └── src/main/java/... (código Java)
├── frontend/
│   ├── public/mock-user.json (mock inicial)
│   └── src/components/Dashboard.js
```

---

## 🧪 Teste Rápido

1. Inicie o backend
2. Em outro terminal, inicie o frontend
3. Acesse: [http://localhost:3000](http://localhost:3000)

---

## 📜 Licença

Este projeto é licenciado sob a **MIT License** - veja o arquivo `LICENSE` para detalhes.

---

## 💡 Autor

Projeto criado com base na [Santander Dev Week - DIO](https://web.dio.me).
