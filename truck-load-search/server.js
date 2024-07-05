const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const loads = [
  { origin: 'New York', destination: 'Los Angeles', weight: 1000 },
  { origin: 'Chicago', destination: 'Houston', weight: 2000 },
  { origin: 'Miami', destination: 'Seattle', weight: 1500 },
  // Add more loads as needed
];

app.get('/api/search', (req, res) => {
  const { origin, destination } = req.query;
  const filteredLoads = loads.filter(load => 
    load.origin.toLowerCase().includes(origin.toLowerCase()) &&
    load.destination.toLowerCase().includes(destination.toLowerCase())
  );
  res.json(filteredLoads);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
