import React from 'react';
import Sidebar from './Sidebar';
import Columns from './Columns';
import BottomBlock from './BottomBlock';

function MainContent() {
  return (
    <main className="main-content">
      <div className="left-section">
        <Columns />
        <BottomBlock />
      </div>
      <Sidebar />
    </main>
  );
}

export default MainContent;
