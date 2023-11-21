import React, { useState } from 'react';

const DragAndDropComponent = () => {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, droppedItem) => {
    e.preventDefault();
    // Perform actions on drop, like swapping items, updating state, etc.
    console.log('Dropped', droppedItem, 'onto', draggedItem);
    setDraggedItem(null);
  };

  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h2>Drag and Drop Component</h2>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, item)}
            style={{
              border: '1px solid #ccc',
              padding: '8px',
              margin: '4px',
              backgroundColor: draggedItem === item ? 'lightblue' : 'white',
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropComponent;