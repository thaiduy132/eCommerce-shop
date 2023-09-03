const app = require("./src/app");

const PORT = 3055 // CHANGE TO WHATEVER YOU WANT

// Start NodeJs project network
const server = app.listen(PORT, () => {
    console.log("Start Node server start with port " + PORT);
})

// Notification when the server shuts down
// process.on("SIGINT", () => {
//     server.close(() => console.log("Server closed"))
// })