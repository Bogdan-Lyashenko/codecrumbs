const { SERVER_PORT, SOCKET_MESSAGE_TYPE } = require('../../../../shared/constants');

let sendMessage = () => {
  console.warn('Connection to server was not established');
};

export const createConnection = (onMessage, route = `ws://127.0.0.1:${SERVER_PORT}/`) => {
  const ws = new WebSocket(route);

  ws.onopen = () => console.log(`Client connected to ${route}`);
  ws.onerror = error => console.log(`Connection error: ${error}`);

  ws.onmessage = event => {
    onMessage(JSON.parse(event.data));
  };

  sendMessage = msg => ws.send(msg);
};

export const requestFetchFile = (data, namespace) => {
  sendMessage(
    JSON.stringify({
      type: SOCKET_MESSAGE_TYPE.CLIENT_REQUEST_FETCH_FILE,
      namespace,
      data
    })
  );
};
