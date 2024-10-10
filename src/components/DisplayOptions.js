import React, { useState } from 'react';

const DisplayOptions = () => {
  const [grouping, setGrouping] = useState('users');

  const handleSelection = (e) => {
    setGrouping(e.target.value);
  };

  return (
    <div>
      <select onChange={handleSelection} value={grouping}>
        <option value="status">Status</option>
        <option value="priority">Priority</option>
        <option value="users">Users</option>
      </select>
    </div>
  );
};

export default DisplayOptions;
