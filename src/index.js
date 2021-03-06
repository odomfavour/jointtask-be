import http from 'http';
import socket from 'socket.io';
import app from './app';
import sockets from './sockets';

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default server;
