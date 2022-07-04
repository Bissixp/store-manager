const errorMiddleware = ({ message }, _req, res, _next) => {
  // console.log(message.includes('required'));
  if (message.includes('required')) {
    return res.status(400).json({ message });
  }
  if (message.includes('length')) {
    return res.status(422).json({ message });
  }
};

module.exports = errorMiddleware;