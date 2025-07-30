import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/mensaje', (req, res) => {
  const mensaje = req.body.texto;
  console.log("🔐 Mensaje recibido desde GPT:", mensaje);
  res.status(200).send('✅ Mensaje recibido con éxito.');
});

app.get('/', (req, res) => {
  res.send('👁️ Espía Imperial activo.');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor desplegado en el puerto ${PORT}`);
});
