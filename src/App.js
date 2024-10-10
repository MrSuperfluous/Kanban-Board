import './App.css';
import React, { useState, useEffect } from 'react';
import DisplayOptions from './components/DisplayOptions';
import TicketsByStatus from './components/TicketsByStatus';
import TicketsByPriority from './components/TicketsByPriority';
import TicketsByUser from './components/TicketsByUser';

function App() {
  const [grouping, setGrouping] = useState('status');
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchTicketsAndUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets); // Assuming the API response has `tickets` field
        setUsers(data.users);     // Assuming the API response has `users` field
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchTicketsAndUsers();
  }, []); // Empty dependency array means this useEffect runs once when the component mounts.

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <DisplayOptions setGrouping={setGrouping} />
      {grouping === 'status' ? (
        <TicketsByStatus tickets={tickets} users={users} />
      ) : grouping === 'priority' ? (
        <TicketsByPriority tickets={tickets} users={users} />
      ) : (
        <TicketsByUser tickets={tickets} users={users} />
      )}
    </div>
  );
}

export default App;
