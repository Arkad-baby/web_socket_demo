const WebSocket = require("ws");

// Initialize a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("A new CLient is connected.");

  ws.send("Welcome to the WebSocket server!");

  // Listen for messages from the client
  ws.on("message", (data) => {
    const message = data.toString();
    console.log("Received message:", message);
    // // Echo the message back to the client
    // ws.send(`Server received your message: ${message}`);

    // wss.clients is a Set containing all currently connected clients
    wss.clients.forEach((client) => {
      console.log("Broadcasting message to all clients.", wss.clients.size);
      // Only send if the client connection is actually open
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });

  });


ws.on("error", (error) => {
  console.error("WebSocket server error:", error);
});

ws.on("close", () => {
  console.log("Client disconnected.");
});
});
console.log("WebSocket server is running on ws://localhost:8080");
