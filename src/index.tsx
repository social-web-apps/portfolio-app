import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HomeScreen } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollAnimationPage } from './pages/ScrollAnimationPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/animation' element={<ScrollAnimationPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
