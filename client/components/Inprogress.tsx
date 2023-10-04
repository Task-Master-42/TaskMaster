import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

const InProgressContainer: React.FC = () => {
  return (
    <Droppable droppableId="inprogress">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          id="inprogress"
          className="bg-gray-200 h-[32rem] w-64 rounded-md mr-4"
        >
          <h1 className="text-slate-500 text-sm m-3">IN PROGRESS</h1>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default InProgressContainer;
