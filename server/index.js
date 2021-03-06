const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const random = () => Math.floor(Math.random() * (100 - 0 + 1)) + 0;
const randomN = (n) =>
  Array.from({ length: n }, (_, i) => 1).map((i) => random());

function eventsHandler(req, res, next) {
  const headers = {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  };
  res.writeHead(200, headers);

  setInterval(() => {
    const data = `data: ${JSON.stringify({
      type: "HEARTBEAT",
    })}\n\n`;
    res.write(data);
  }, 1000);

  setInterval(() => {
    const data = `data: ${JSON.stringify({
      type: "CHART1",
      value: randomN(2),
    })}\n\n`;
    res.write(data);
  }, 1000);

  setInterval(() => {
    const data = `data: ${JSON.stringify({
      type: "CHART2",
      value: randomN(2),
    })}\n\n`;
    res.write(data);
  }, 1000);

  setInterval(() => {
    const data = `data: ${JSON.stringify({
      type: "CHART3",
      value: randomN(2),
    })}\n\n`;
    res.write(data);
  }, 1000);

  setInterval(() => {
    const data = `data: ${JSON.stringify({
      type: "CHART4",
      value: randomN(2),
    })}\n\n`;
    res.write(data);
  }, 1000);

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

const PORT = 4000;
let clients = [];
let nests = [];

app.listen(PORT, () => {
  console.log("Application listen on part " + PORT);
});
