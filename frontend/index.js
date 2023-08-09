import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LoginForm from './LoginForm';
import RegisterationForm from './RegisterationForm.js';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import UserHome from './user/UserHome';
import History from './user/History';

import guideHome from './guide/guideHome';
import guideHistory from './guide/guideHistory';

import TravelUserForm from './user/travel/TravelUserForm';
import BookGuide from "./user/travel/BookGuide";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <div>
        <Routes>
          <Route path="/guide/guideHome" element={<guideHome />} />
          <Route path="/guide/guideHistory" element={<guideHistory />} />
          <Route path="/user" element={<LoginForm />} />
          <Route path="/History" element={<History />} />
          <Route path="/register" element={<RegisterationForm />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/TravelUserForm" element={<TravelUserForm />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/user/UserHome" element={<UserHome />}/>
          <Route path="/BookGuide" element={<BookGuide />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/userHome" element={<UserHome />} />
          
        </Routes>
      </div>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
