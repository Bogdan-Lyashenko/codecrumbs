export const createConnection = (onMessage, route = 'ws://127.0.0.1:2018/') => {
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
