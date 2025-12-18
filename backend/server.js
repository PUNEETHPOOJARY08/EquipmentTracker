const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, 'data', 'equipment.json');

app.use(cors());
app.use(express.json());

// Create data folder if it doesn't exist
if (!fs.existsSync(path.dirname(DATA_FILE))) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
}

// Create empty json file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, '[]');
}

// Read equipment from file
function readEquipment() {
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(data);
}

// Write equipment to file
function writeEquipment(equipment) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(equipment, null, 2));
}

// Get all equipment
app.get('/api/equipment', (req, res) => {
  const equipment = readEquipment();
  res.json(equipment);
});

// Add new equipment
app.post('/api/equipment', (req, res) => {
  const { name, type, status, lastCleanedDate } = req.body;

  if (!name || !type || !status || !lastCleanedDate) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const equipment = readEquipment();
  const newItem = {
    id: Date.now().toString(),
    name,
    type,
    status,
    lastCleanedDate
  };

  equipment.push(newItem);
  writeEquipment(equipment);
  res.json(newItem);
});

// Update equipment
app.put('/api/equipment/:id', (req, res) => {
  const { id } = req.params;
  const { name, type, status, lastCleanedDate } = req.body;

  if (!name || !type || !status || !lastCleanedDate) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const equipment = readEquipment();
  const index = equipment.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Equipment not found' });
  }

  equipment[index] = { id, name, type, status, lastCleanedDate };
  writeEquipment(equipment);
  res.json(equipment[index]);
});

// Delete equipment
app.delete('/api/equipment/:id', (req, res) => {
  const { id } = req.params;
  const equipment = readEquipment();
  const filtered = equipment.filter(item => item.id !== id);

  if (filtered.length === equipment.length) {
    return res.status(404).json({ error: 'Equipment not found' });
  }

  writeEquipment(filtered);
  res.json({ message: 'Deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

