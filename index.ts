import http from 'http';
import app from './app';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || "3001";
const server = http.createServer(app);

async function start() {
  try {
    server.listen(port);
    console.log(`http://localhost:${port}`);
  } catch(error: unknown) {
    console.error(error);
  }
}

start();