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
    ws.send(`Server received your message: ${message}`); 
    // Echo the message back to the client 
  });

  ws.on("error", (error) => {
    console.error("WebSocket server error:", error);
  });

  ws.on("close", () => {
    console.log("Client disconnected.");
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
