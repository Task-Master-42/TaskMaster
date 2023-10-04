import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
     <div className='flex p-4 border-b-2 shadow'>
      <div className='ml-12 mr-auto font-semibold text-slate-700'>TaskMaster</div>
      <ul className='flex mr-12'>
        <li className='mr-5 text-slate-700'>Home</li>
        <li className='mr-5 text-slate-700'>Dashboard</li>
        <li className='mr-5 text-slate-700'>Logout</li>
      </ul>
     </div>
    </>
  )
}

export default Navbar;