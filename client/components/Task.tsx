import React, {FC} from 'react';
import { Draggable } from 'react-beautiful-dnd';



const Task: React.FC = () => {

  return (
    <>
    <Draggable draggableId='1'>
      {(provided) => (
          <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className='bg-white ml-3 mr-3 p-3 rounded-md'>
          <h1 className=''>This is a task that has yet to be complete</h1>
          </div>
      )}
    </Draggable>
    </>
  )
}

export default Task