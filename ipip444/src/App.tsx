import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import FormPage from './pages/FormPage';
import MainPage from './pages/MainPage';


function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
