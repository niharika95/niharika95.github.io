/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './screens/Home/Home';
import Header from './components/Header/Header';
import Project from './screens/Project/Project';
import Resume from './screens/Resume/Resume';
// import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#projects" element={<Home />} />
        <Route path="/#about" element={<Home />} />
        <Route path="/project/:id" element={<Project />} exact />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      {/* <Footer /> */}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
