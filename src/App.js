import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './components/Top'
import SideNav from './components/SideNav';
import Header from './components/Header';
import Filters from './components/Filters';
import ProgressBars from './components/ProgressBars';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="md:flex flex-row lg:md:flex flex-row">
          {/* this is a side bar */}
          <div className="hidden md:flex flex-col lg:md:flex flex-col xl:flex flex-col">
            <SideNav />
          </div>
          {/* this contains all the content */}
          <div className="flex flex-col w-full">
            <Top />
            <div className="mx-8">
              <Header />
              <Filters />
              <ProgressBars visibility='hidden' />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
