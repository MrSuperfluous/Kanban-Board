// TicketsByUser.js
import React from 'react';
import Card from './Card'; // Import your Card component

const TicketsByUser = ({ tickets, users }) => {
    return (
        <div className="columns" style={{ display: 'flex', gap: '20px' }}>
            {users.map(user => {
                // Filter tickets by user ID
                const userTickets = tickets.filter(ticket => ticket.userId === user.id);

                return (
                    <div className="column" key={user.id} style={{ flex: 1 }}>
                        <h3 style={{ display: 'flex', alignItems: 'center' }}>
                            {user.name} ({userTickets.length})
                        </h3>
                        {userTickets.map(ticket => (
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

export default TicketsByUser;
