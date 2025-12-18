import React, { useState, useEffect } from 'react';
import './App.css';
import EquipmentTable from './components/EquipmentTable';
import EquipmentForm from './components/EquipmentForm';

function App() {
  const [equipment, setEquipment] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchEquipment();
  }, []);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const fetchEquipment = async () => {
    const response = await fetch(`${API_URL}/api/equipment`);
    const data = await response.json();
    setEquipment(data);
  };

  const handleAdd = async (formData) => {
    await fetch(`${API_URL}/api/equipment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    fetchEquipment();
  };

  const handleUpdate = async (id, formData) => {
    await fetch(`${API_URL}/api/equipment/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    fetchEquipment();
    setEditingItem(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this equipment?')) {
      await fetch(`${API_URL}/api/equipment/${id}`, {
        method: 'DELETE'
      });
      fetchEquipment();
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  return (
    <div className="App">
      <h1>Equipment Tracker</h1>
      
      <EquipmentForm
        onSubmit={editingItem ? 
          (data) => handleUpdate(editingItem.id, data) : 
          handleAdd
        }
        editingItem={editingItem}
        onCancel={() => setEditingItem(null)}
      />

      <EquipmentTable
        equipment={equipment}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

