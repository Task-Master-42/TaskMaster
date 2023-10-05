import React from 'react';
import Navbar from './Navbar.tsx';
import TaskContainer from './TaskContainer.tsx';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import backgroundImage from '../assets/neon-city.gif';


const Dashboard: React.FC = () => {

  const onDragEnd = (result: DropResult) => {
   const { source, destination } = result;

   if (!destination) return;
   if (destination.droppableId===source.droppableId) return
  }

  const inlineStyle ={
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize:'cover',
    minHeight: '100vh',
  };

  return (
    <>

    <DragDropContext onDragEnd={onDragEnd}>
        <Navbar />
        <div className="bg-blue-500 bg-cover bg-center min-h-screen" style={inlineStyle}>
        <h1 className='font-semibold text-lg ml-8 pt-5 text-slate-200'>Dashboard</h1>
        <TaskContainer />
        </div>
      </DragDropContext>

    </>
  )
}

export default Dashboard