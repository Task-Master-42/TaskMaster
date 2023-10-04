import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

const DoneContainer: React.FC = () => {
    return (
        <Droppable droppableId="done">
  {(provided) => (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
      id="done"
      className="bg-gray-200 h-[32rem] w-64 rounded-md mr-4"
    >
      <h1 className="text-slate-500 text-sm m-3">DONE</h1>
      {provided.placeholder}
    </div>
  )}
</Droppable>
    );
    
}


export default DoneContainer;