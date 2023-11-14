import type { Request, Response } from 'express';

import { T_ClientToServerEvents, T_ServerToClientEvents } from '../../../types';

import { log } from 'console';
import express from 'express';
import http, { IncomingMessage, ServerResponse, Server as _Server } from 'http';
import https from 'https';
import { Server } from 'socket.io';

const app = express();
let server: _Server<typeof IncomingMessage, typeof ServerResponse>;
if (process.env.SERVER_ENVIRONMENT !== 'production') {
    log('Engaging HTTP');
    server = http.createServer(app);
} else {
    log('Engaging HTTPS');
    server = https.createServer(app);
}

//Socket IO related
const io = new Server<T_ClientToServerEvents, T_ServerToClientEvents>(server, {
    cors: {
        origin: 'localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true,
    },
});
export type IO = typeof io;
export interface T_Req<T> extends Request<T> {
    body: T;
    user: T;
}
export type T_Res<T> = Response<{
    data?: T;
    message: string;
    errorCode?: string;
}>;
export const createServer = () => {
    return { app, io, express, server };
};
