import { createConnection } from './connection';
import devProcessTesting from './dev-test';

const mountNode = document.getElementById('mount-node');

createConnection(data => {
    console.log(JSON.parse(data).data);
    //mountNode.innerHTML = data; //TODO: ui data entry
    devProcessTesting(JSON.parse(data).data.body);//TODO: remove
});

console.log(new Date(), 'UI started.');
