'use client'
import { SocketContext } from "@/components/Socket/_socket";
import { useContext } from "react";

export const useSocket = () => {
    const socket = useContext(SocketContext);
    if (socket === undefined) {
        throw new Error('useSocket must be used within a SocketProvider');
    }
    return socket;

}