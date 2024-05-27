import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import TextBox from './components/Input'
import Footer from './components/Footer';
import Header from './components/Header';
import About from './views/About';
import Timer from './components/Timer';
import Home from './views/Home';

function App() {

  let wordDump = ["this", "is", "a", "test"];
  const year = new Date().getFullYear();
  let footerInput = ` ${year} Website by Ryan`

  const handleTimerFinish = () => {

  }
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home wordDump={wordDump}
              initialSeconds={60}
            />} />
            <Route path="/about" Component={About} />
          </Routes>
          <Footer footerInput={footerInput} />
        </div>
      </Router>
      <Timer initialSeconds={2} shouldStart={false} onTimerFinish={handleTimerFinish} />
    </>
  );
}

export default App;
