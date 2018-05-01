import { createConnection } from './connection';

const mountNode = document.getElementById('mount-node');

createConnection(data => {
    console.log(JSON.parse(data).data);
    mountNode.innerHTML = data;
});

console.log(new Date(), 'UI started.');
