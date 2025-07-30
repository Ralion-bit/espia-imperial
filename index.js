export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ mensaje: '¡Hola desde el Espía Imperial!' });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
