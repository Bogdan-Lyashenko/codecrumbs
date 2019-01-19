const { SERVER_PORT } = require('../../../../shared/constants');

export const createConnection = (onMessage, route = `ws://127.0.0.1:${SERVER_PORT}/`) => {
  const ws = new WebSocket(route);

  ws.onopen = () => {
    // connection is opened and ready to use
  };

  ws.onerror = error => {
    // an error occurred when sending/receiving data
  };

  ws.onmessage = event => {
    onMessage(JSON.parse(event.data));
  };

  return msg => {
    try {
      ws.send(msg);
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchFile = (path, config = {}) =>
  fetch(`http://127.0.0.1:${SERVER_PORT}/api?file=${path}&config=${JSON.stringify(config)}`).then(
    res => res.json()
  );
