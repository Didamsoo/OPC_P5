import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import '../styles/Collapse.scss';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false); // J'utilise un état local pour gérer l'ouverture

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Je change l'état lorsque je clique
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3 className="collapse-title">{title}</h3>
        <div className={`collapse-arrow ${isOpen ? 'open' : ''}`}> <IoIosArrowDown />
        </div>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
