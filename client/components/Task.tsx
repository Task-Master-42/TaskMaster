import React, {FC} from 'react';
import { Draggable } from 'react-beautiful-dnd';


//
const Task: React.FC<{ taskId: string }> = ({taskId}) => {

  return (
    <>
    <Draggable draggableId={taskId} index={0}>
      {(provided) => (
          <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className='bg-pink-400 ml-3 mr-3 p-3 rounded-md'>
          <h1 className='text-slate-200'>This is a task that has yet to be complete</h1>
          </div>
      )}
    </Draggable>
    </>
  )
}

export default Task