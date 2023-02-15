import React from 'react';
import Header from './Layout/Header';
import RCMND from './Layout/Main/RCMND/RCMND';
import Footer from './Layout/Footer';
import Map from './Layout/Main/Map';



function App() {

  return (
    <div className='App h-full bg-[#eae7de] scrollbar-hide overflow-x-hidden'>
      {/* 기본 배경색 */}
      <div><Header /></div>
      <div><Map /></div>
      <div><RCMND /></div>
      <div className='h-64'></div>
      <Footer />
    </div>
  );
}

export default App;
