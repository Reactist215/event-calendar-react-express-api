const express = require('express');
const app = express();

const PORT = getPort(process.env.PORT);

function getPort(port) {
  if (!port) return 3000;
  let p = parseInt(port);
  if (Number.isNaN(p)) throw new Error(`Invalid port ${port}`);
  return p;
}

app.get('/schedules', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(require('./data/events.json'));
});

// Catch not found routes
app.use((req, res) => res.status(404).send({ msg: `Path ${req.path} not found` }));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
