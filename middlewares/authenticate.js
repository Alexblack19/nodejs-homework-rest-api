const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  console.log(authorization);
  const [bearer, token] = authorization.split(" ");
  console.log(bearer);
  console.log(token);
};

module.exports = authenticate;
