const getStatus = (req, res) => {
  res.json({
    status: 'success',
    message: 'NSS Smart Community Platform API is running',
  });
};

module.exports = { getStatus };
