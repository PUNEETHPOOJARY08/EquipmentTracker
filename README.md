# Equipment Tracker

# live demo
https://equipmenttracker-1.onrender.com

A simple web application to manage equipment with basic CRUD operations.

## Features

- View a list of equipment in a table format
- Add new equipment
- Edit existing equipment
- Delete equipment

Each equipment item has:
- Name (text)
- Type (dropdown: Machine, Vessel, Tank, Mixer)
- Status (dropdown: Active, Inactive, Under Maintenance)
- Last Cleaned Date (date picker)

## Tech Stack

- **Frontend**: React (Create React App)
- **Backend**: Node.js with Express
- **Database**: JSON file storage (in `backend/data/equipment.json`)

## Project Structure

```
EquipmentTracker/
├── backend/
│   ├── data/
│   │   └── equipment.json (auto-generated)
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EquipmentTable.js
│   │   │   ├── EquipmentTable.css
│   │   │   ├── EquipmentForm.js
│   │   │   └── EquipmentForm.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000` and automatically open in your browser.

## API Endpoints

- `GET /api/equipment` - Get all equipment
- `POST /api/equipment` - Add new equipment
- `PUT /api/equipment/:id` - Update equipment
- `DELETE /api/equipment/:id` - Delete equipment

## Usage

1. Make sure both backend and frontend servers are running
2. Open your browser to `http://localhost:3000`
3. Fill out the form to add new equipment
4. Click "Edit" to modify existing equipment
5. Click "Delete" to remove equipment (with confirmation)

## Notes

- Data is stored in `backend/data/equipment.json` and will be created automatically on first run
- Form validation ensures all fields are filled before submission
- Error handling is implemented for API calls
- The application uses basic styling for a clean, functional interface

