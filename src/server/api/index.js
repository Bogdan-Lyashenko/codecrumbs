const requestHandler = (request, response) => {
  const url = request.url.substr(1);

  response.writeHead(200, {
    'Content-Type': 'application/json'
  });

  response.write(JSON.stringify({bob: 123}));
  return response.end();
};

module.exports = {
  requestHandler
};
