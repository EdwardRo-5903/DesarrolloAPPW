module.exports = function (req, res, next) {
  const apiKey = req.headers['authorization'];
  const validApiKey = 'mi-api-key'; // Cambia esto por tu propia API key

  if (apiKey === validApiKey) {
    next(); // Continúa si la API key es válida
  } else {
    res.status(401).json({ error: 'Unauthorized: Invalid API key' });
  }
};