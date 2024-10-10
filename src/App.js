import './App.css';
import React, { useState } from 'react';

import DisplayOptions from './components/DisplayOptions';
import TicketsByStatus from './components/TicketsByStatus';
import TicketsByPriority from './components/TicketsByPriority';
import TicketsByUser from './components/TicketsByUser';
const apiResponse = {
  tickets: [
    { id: "CAM-1", title: "Update User Profile Page UI", tag: ["Feature request"], userId: "usr-1", status: "Todo", priority: 4 },
    { id: "CAM-2", title: "Add Multi-Language Support - Enable multi-language support within the application.", tag: ["Feature Request"], userId: "usr-2", status: "In progress", priority: 3 },
    {
      "id": "CAM-6",
      "title": "Third-Party Payment Gateway",
      "tag": [
        "Feature Request"
      ],
      "userId": "usr-2",
      "status": "Todo",
      "priority": 1
    },
    {
      "id": "CAM-7",
      "title": "Create Onboarding Tutorial for New Users",
      "tag": [
        "Feature Request"
      ],
      "userId": "usr-1",
      "status": "Backlog",
      "priority": 2
    },
    {
      "id": "CAM-8",
      "title": "Implement Role-Based Access Control (RBAC)",
      "tag": [
        "Feature Request"
      ],
      "userId": "usr-3",
      "status": "In progress",
      "priority": 3
    }
    // ...other tickets
  ],
  users: [
    {
      "id": "usr-1",
      "name": "Anoop sharma",
      "available": false
    },
    {
      "id": "usr-2",
      "name": "Yogesh",
      "available": true
    },
    {
      "id": "usr-3",
      "name": "Shankar Kumar",
      "available": true
    },
    {
      "id": "usr-4",
      "name": "Ramesh",
      "available": true
    },
    {
      "id": "usr-5",
      "name": "Suresh",
      "available": true
    }
  ]
};
function App() {
  const [grouping, setGrouping] = useState('status'); 
  return (
    <div>
    <DisplayOptions setGrouping={setGrouping} />
    {grouping === 'status' ? (
                <TicketsByStatus tickets={apiResponse.tickets} users={apiResponse.users} />
            ) : grouping === 'priority' ? (
                <TicketsByPriority tickets={apiResponse.tickets} users={apiResponse.users} />
            ) : (
              <TicketsByUser tickets={apiResponse.tickets} users={apiResponse.users} />
            )}
     </div>
    
  );
}

export default App;
