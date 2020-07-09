import React from 'react';
import './App.css';
import Header from './Components/Layouts/Header/Header';
import Sidebar from './Components/Layouts/Sidebar/Sidebar';
import Content from './Components/Layouts/Content/Content';
import Footer from './Components/Layouts/Footer/Footer';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="container__main">
          <Sidebar />
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
