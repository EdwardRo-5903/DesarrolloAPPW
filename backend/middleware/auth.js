module.exports = function (req, res, next) {
  const apiKey = req.headers['x-api-key'];
  const validApiKey = 'mi-api-key'; 

  if (apiKey === validApiKey) {
    next();
  } else {
    res.status(401).json({ error: 'API key inválida' });
  }
};