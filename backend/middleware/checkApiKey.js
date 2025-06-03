function checkApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  const validApiKey = 'mi-api-key'; 

  if (apiKey !== validApiKey) {
    return res.status(401).json({ error: 'API key inválida' });
  }
  next();
}

module.exports = checkApiKey;