const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());  // Permite receber JSON
app.use(cors());          // Permite conexões do front-end

const dizimos = [];  // Lista para armazenar os doadores

// Rota para receber os dízimos
app.post("/dizimo", (req, res) => {
    const { nome } = req.body;
    
    if (!nome) {
        return res.status(400).json({ error: "Nome é obrigatório!" });
    }

    dizimos.push(nome);
    console.log(`📩 Novo dízimo depositado por: ${nome}`);

    res.json({ message: "Dízimo recebido com sucesso!" });
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log("🚀 Servidor rodando em http://localhost:3000");
});
