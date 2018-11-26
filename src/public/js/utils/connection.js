const { SERVER_PORT } = require('../../../shared/constants');

export const createConnection = (onMessage, route = `ws://127.0.0.1:${SERVER_PORT}/`) => {
  const ws = new WebSocket(route);
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

export const fetchFile = path =>
  fetch(`http://127.0.0.1:${SERVER_PORT}/api?file=${path}`).then(res => res.json());
