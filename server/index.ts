import { Socket } from 'socket.io';
import { createServer, log } from './functions';

const { app, express, server, io } = createServer();
app.use(express.json());

const PORT = 4000;
server.listen(PORT, () =>
    log(`SERVER START ON PORT ${PORT} 🚀 USING ENVIRONMENT: ${'NONE'}`),
);
const onConnection = (socket: Socket) => {
    try {
        log('CONNECTED');
    } catch (error) {
        log('CONNECTED');
    }
};

try {
    io.on('connect', onConnection);
} catch (error) {
    log('CONNECTED');
}
