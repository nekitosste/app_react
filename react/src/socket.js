import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

httpServer.listen(3001, () => {
    console.log("listening on *:3001");
});
