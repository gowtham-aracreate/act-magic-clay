import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';


const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1">
        <Header />
       
        <div className="">
       
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
