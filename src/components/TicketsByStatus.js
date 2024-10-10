import React from 'react';
import Card from './Card'; // Adjust the import path as needed

//import yourIcon from '../icons_FEtask/._add.svg'; // Adjust this path

const TicketsByStatus = ({ tickets, users }) => {
    const statuses = ["backlog","todo", "in progress", "done", "canceled"];
    
    return (
      <div className="columns">
        {statuses.map((status) => {
          const filteredTickets = tickets.filter(ticket => ticket.status.toLowerCase() === status);
          return (
            <div className="column" key={status}>
              <h3 style={{ display: 'flex', alignItems: 'center' }}>
                
                {status.charAt(0).toUpperCase() + status.slice(1)} ({filteredTickets.length})
              </h3>
              {filteredTickets.map(ticket => (
                <Card 
                  key={ticket.id} 
                  id={ticket.id} 
                  title={ticket.title} 
                  userId={ticket.userId} 
                  users={users} 
                />
              ))}
            </div>
          );
        })}
      </div>
    );
};
export default TicketsByStatus;
