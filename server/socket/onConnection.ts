import type { Socket } from 'socket.io';

import { createServer, log } from '../functions';
import { sendMessage } from './sendMessage';
const { io } = createServer();
export const onConnection = (socket: Socket) => {
    log(`CONNECTED: ${socket.id}`, 'green');
    try {
        sendMessage(io, socket);
    } catch (error) {
        log(`ERROR in onConnection: ${error}`, 'red');
    }
};