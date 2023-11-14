import type { Socket } from 'socket.io';

import {
    IO, log,
} from '../functions';

export const sendMessage = (io: IO, socket: Socket) => {
    const sendMessage = (message: string): void => {
        try {
            console.log({message, socketId: socket.id});
        } catch (error) {
            log(`ERROR in sendMessage: ${error}`, 'red');
        }
    };
    socket.on('sendMessage', sendMessage);
};