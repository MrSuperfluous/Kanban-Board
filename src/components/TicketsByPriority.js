import React from 'react';
import Card from './Card'; // Adjust the import path as needed
//import yourIcon from './path/to/your/icon.png'; // Use the same or a different icon

const TicketsByPriority = ({ tickets, users }) => {
    // Define priority levels, from highest to lowest
    const priorities = [4, 3, 2, 1, 0]; // Adjust this based on your priority values
    
    return (
      <div className="columns">
        {priorities.map((priority) => {
          const filteredTickets = tickets.filter(ticket => ticket.priority === priority);
          return (
            <div className="column" key={priority}>
              <h3 style={{ display: 'flex', alignItems: 'center' }}>
                
                Priority {priority} ({filteredTickets.length})
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

export default TicketsByPriority;
