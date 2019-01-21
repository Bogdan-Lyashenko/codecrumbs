const isLocalHost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

// for testing purposes
__webpack_public_path__ = isLocalHost ? '/bundle/' : '/bundle/';
