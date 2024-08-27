import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import '../styles/Collapse.scss';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3 className="collapse-title">{title}</h3>
        <div className="collapse-arrow">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
