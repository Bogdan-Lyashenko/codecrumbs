const subscribe = require('./source-change-watcher').subscribeOnChange;

const requestHandler = request => {
    console.log(new Date() + `Socket Connection from ${request.origin}.`);

    const connection = request.accept(null, request.origin);
    subscribe((body) =>
        connection.sendUTF(
            JSON.stringify({
                type: 'sync',
                data: [{ name: 'Program', body }]
            })
        )
    );
};

module.exports = {
    requestHandler
};
