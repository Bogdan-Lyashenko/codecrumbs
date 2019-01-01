const isLocalHost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
__webpack_public_path__ = isLocalHost
  ? '/bundle/'
  : '/codecrumbs/src/public/dist/standalone/bundle/';
