import React from 'react';
import Header from './Layout/Header';
import RCMND from './Layout/Main/RCMND/RCMND';
// import Footer from './Layout/Footer';



function App() {

  return (
    <div className='App h-full bg-[#eae7de]'>
      {/* 기본 배경색 */}
      <Header />
      <RCMND />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
