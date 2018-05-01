import { createConnection } from './connection';

createConnection(data => {
    console.log(data);
});

console.log(new Date(), 'UI started.');
