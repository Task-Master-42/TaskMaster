import React from 'react';
import Navbar from './Navbar.tsx';
import TaskContainer from './TaskContainer.tsx';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';



const Dashboard: React.FC = () => {

  const onDragEnd = (result: DropResult) => {
   const { source, destination } = result;

   if (!destination) return;
   if (destination.droppableId===source.droppableId) return
  }

  return (
    <>
    <DragDropContext onDragEnd={onDragEnd}>
        <Navbar />
        <h1 className='font-semibold text-lg ml-8 mt-5 text-slate-600'>Dashboard</h1>
        <TaskContainer />
      </DragDropContext>
    </>
  )
}

export default Dashboard