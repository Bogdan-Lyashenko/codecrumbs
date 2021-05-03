import { SERVER_PORT, SOCKET_MESSAGE_TYPE } from '../../shared-constants';

let sendMessage = () => {
  console.warn('Connection to server was not established');
};

export const createConnection = (onMessage, route = `ws://localhost:${SERVER_PORT}/`) => {
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

export const openFileInEditor = (data, namespace) => {
  sendMessage(
    JSON.stringify({
      type: SOCKET_MESSAGE_TYPE.CLIENT_OPEN_FILE_IN_EDITOR,
      namespace,
      data
    })
  );
};
