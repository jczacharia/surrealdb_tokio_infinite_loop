import Surreal from 'surrealdb.js';

async function run() {
  const db = new Surreal();
  await db.connect('http://localhost:8000/rpc');
  await db.signin({ user: 'root', pass: 'root' });
  await db.use('ns', 'db');
}

run();
