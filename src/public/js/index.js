import { createConnection } from './connection';
import devProcessTesting from './dev-test';

const mountNode = document.getElementById('mount-node');

createConnection(data => {
    console.log(JSON.parse(data).data);
    mountNode.innerHTML = data;
});

console.log(new Date(), 'UI started.');
devProcessTesting();//TODO: remove