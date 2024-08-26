import React, { useState } from 'react';
import '../styles/Collapse.scss';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span className={`collapse-icon ${isOpen ? 'open' : ''}`}>
          ▼
        </span>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
