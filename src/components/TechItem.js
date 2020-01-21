import React from 'react';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">remove</button>
    </li>
  );
}

export default TechItem;