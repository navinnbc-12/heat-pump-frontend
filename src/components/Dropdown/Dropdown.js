import "./Dropdown.css"

import React,{useState,useEffect} from 'react';


const data = [{id: 0, label: "Istanbul, TR (AHL)"}, {id: 1, label: "Paris, FR (CDG)"}];

export const Dropdown = () => {
  const [isOpend, setOpend] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpend(!isOpend);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }
  
  return (
    <>
    
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : "Select your destination"}
        <i className={`fa fa-chevron-right icon ${isOpend && "open"}`}></i>
        <img src={require("../../Img/adminDropdown.png")} className={`commondropdown ${isOpend&&"commondropdownrotate" }`}  />
      </div> 
      <div className={`dropdown-body ${isOpend && 'open'}`}>
        {items.map(item => (
          <div className="dropdown-item" onClick={e => {handleItemClick(e.target.id);toggleDropdown()}} id={item.id}>
            <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
            {item.label}
          </div>
        ))}
      </div>
      
    </div>
    
    </>
  )
}

