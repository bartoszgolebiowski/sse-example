const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

function eventsHandler(req, res, next) {
  const headers = {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  };
  res.writeHead(200, headers);
  const data = `data: ${JSON.stringify(nests)}\n\n;`;
  res.write(data);
  const clientId = Date.now();
  const newClient = {
    id: clientId,
    res,
  };
  clients.push(newClient);
  req.on("close", () => {
    console.log(`${clientId} Connection closed`);
    clients = clients.filter((c) => c.id !== clientId);
  });
}
function sendEventsToAll(newNest) {
  clients.forEach((c) => c.res.write(`data: ${JSON.stringify(newNest)}\n\n`));
}
async function addNest(req, res, next) {
  const newNest = req.body;
  nests.push(newNest);
  res.json(newNest);
  return sendEventsToAll(newNest);
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/nest", addNest);
app.get("/events", eventsHandler);
app.get("/status", (req, res) => res.json({ clients: clients.length }));

const PORT = 3000;
let clients = [];
let nests = [];

app.listen(PORT, () => {
  console.log("Application listen on part " + PORT);
});
