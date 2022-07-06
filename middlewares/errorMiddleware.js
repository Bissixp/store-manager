const errorMiddleware = ({ message }, _req, res, _next) => {
  if (message.includes('required')) return res.status(400).json({ message });
  if (message.includes('length')) return res.status(422).json({ message });
  if (message.includes('greater')) return res.status(422).json({ message });
  if (message.includes('found')) return res.status(404).json({ message });
};

module.exports = errorMiddleware;