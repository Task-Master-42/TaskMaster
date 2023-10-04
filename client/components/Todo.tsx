import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

const TodoContainer: React.FC = () => {
  return (
    <Droppable droppableId="todo">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          id="todo"
          className="bg-gray-200 h-[32rem] w-64 rounded-md mr-4"
        >
          <h1 className="text-slate-500 text-sm m-3">TO DO</h1>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoContainer;
