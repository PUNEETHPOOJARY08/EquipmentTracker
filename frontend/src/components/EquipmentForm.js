import React, { useState, useEffect } from 'react';
import './EquipmentForm.css';

function EquipmentForm({ onSubmit, editingItem, onCancel }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [lastCleanedDate, setLastCleanedDate] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setType(editingItem.type);
      setStatus(editingItem.status);
      setLastCleanedDate(editingItem.lastCleanedDate);
    } else {
      setName('');
      setType('');
      setStatus('');
      setLastCleanedDate('');
    }
    setErrors({});
  }, [editingItem]);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Required';
    if (!type) newErrors.type = 'Required';
    if (!status) newErrors.status = 'Required';
    if (!lastCleanedDate) newErrors.lastCleanedDate = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({ name, type, status, lastCleanedDate });
    
    if (!editingItem) {
      setName('');
      setType('');
      setStatus('');
      setLastCleanedDate('');
    }
  };

  return (
    <div className="form-container">
      <h2>{editingItem ? 'Edit Equipment' : 'Add Equipment'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Type *</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className={errors.type ? 'error' : ''}
          >
            <option value="">Select type</option>
            <option value="Machine">Machine</option>
            <option value="Vessel">Vessel</option>
            <option value="Tank">Tank</option>
            <option value="Mixer">Mixer</option>
          </select>
          {errors.type && <span className="error">{errors.type}</span>}
        </div>

        <div className="form-group">
          <label>Status *</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={errors.status ? 'error' : ''}
          >
            <option value="">Select status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Under Maintenance">Under Maintenance</option>
          </select>
          {errors.status && <span className="error">{errors.status}</span>}
        </div>

        <div className="form-group">
          <label>Last Cleaned Date *</label>
          <input
            type="date"
            value={lastCleanedDate}
            onChange={(e) => setLastCleanedDate(e.target.value)}
            className={errors.lastCleanedDate ? 'error' : ''}
          />
          {errors.lastCleanedDate && <span className="error">{errors.lastCleanedDate}</span>}
        </div>

        <button type="submit">{editingItem ? 'Update' : 'Add'}</button>
        {editingItem && (
          <button type="button" onClick={onCancel}>Cancel</button>
        )}
      </form>
    </div>
  );
}

export default EquipmentForm;

