import React from 'react';
import './EquipmentTable.css';

function EquipmentTable({ equipment, onEdit, onDelete }) {
  if (equipment.length === 0) {
    return <div>No equipment found.</div>;
  }

  return (
    <div className="table-container">
      <h2>Equipment List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Last Cleaned Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.status}</td>
              <td>{item.lastCleanedDate}</td>
              <td>
                <button onClick={() => onEdit(item)}>Edit</button>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EquipmentTable;

