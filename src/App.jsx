import React from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className={css.app}>
      <Routes>
        <Route path='/*' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;