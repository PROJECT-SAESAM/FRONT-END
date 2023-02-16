import React from 'react';
import Header from './Layout/Header';
import RCMND from './Layout/Main/RCMND/RCMND';
import Footer from './Layout/Footer';
import Map from './Layout/Main/Map';
import { useState, useEffect } from 'react';

export interface localButtonType {
  localButtonHandler: (target: EventTarget) => void
};


const App = () => {

  //map에서 props로 인자 받아오기
  const localButtonHandler = (target: EventTarget) => {
    window.scrollTo(0, 800)
  }

  //쭉 전체
  const [showScroll, setShowScroll] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 200) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }
    console.log(window.scrollY)
    window.addEventListener("scroll", handleShowButton)
    return () => {
      window.removeEventListener("scroll", handleShowButton)
    }
  }, [])


  const topButton = () => {

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })

      return showScroll && (
        <div className="scroll__container">
          <button id="top" onClick={scrollToTop} type="button" > Top</button>
        </div>
      )
    }

    return (<label className='flex flex-wrap justify-center p-3 w-14'>
      <img src="/IMG/up-arrow.png" className='w-8 h-8 pb-1' alt="위로 이동" />
      <button id="top" type="button" className='text-lg font-bold' onClick={scrollToTop}>Top</button>
    </label>)
  }



  return (
    <div className='App h-full bg-[#eae7de] scrollbar-hide overflow-x-hidden'>
      {/* 기본 배경색 */}
      <div ><Header /></div>
      <div ><Map localButtonHandler={localButtonHandler} /></div>
      <div><RCMND /></div>
      <div className="fixed z-10 scroll__container right-5 bottom-5">
        {topButton()}
      </div>
      <div className='h-64'></div>
      <Footer />
    </div>
  );
}

export default App
