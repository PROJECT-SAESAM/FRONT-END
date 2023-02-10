import React from 'react';
import Header from './Layout/Header';
import RCMND from './Layout/Main/RCMND/RCMND';
import Footer from './Layout/Footer';
import Map from './Layout/Main/Map';
import Users from './Users';



function App() {

  return (
    <div className='App h-full bg-[#eae7de]'>
      {/* 기본 배경색 */}
      <div><Header /></div>
      <div className='h-32'></div>
      <div><Map /></div>
      <div className='h-32'></div>
      <div><RCMND /></div>
      <div className='h-32'></div>
      {/* <Users /> */}
      <Footer />
    </div>
  );
}

export default App;
