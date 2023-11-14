import { Socket } from 'socket.io';
import { createServer, log } from './functions';
import { onConnection } from './socket';

const { app, express, server, io } = createServer();
app.use(express.json());

const PORT = 4000;
server.listen(PORT, () =>
    log(`SERVER START ON PORT ${PORT} 🚀 USING ENVIRONMENT: ${'NONE'}`),
);


try {
    io.on('connect', onConnection);
} catch (error) {
    log(`ERROR in index.ts: ${error}`, 'red');
}
