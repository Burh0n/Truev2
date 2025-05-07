// App.js - Main component with routing
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Advantages from './pages/Advantages';
import OpenClub from './pages/OpenClub';
import Contacts from './pages/Contacts';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/advantages" element={<Advantages />} />
            <Route path="/open-club" element={<OpenClub />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './styles/global.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Project folder structure recommendation
/*
true-fitness-app/
├── public/
│   ├── index.html
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ClubMap.jsx
│   │   ├── FacilityLayout.jsx
│   │   └── CircleButton.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Advantages.jsx
│   │   ├── OpenClub.jsx
│   │   └── Contacts.jsx
│   ├── App.js
│   ├── index.js
│   └── styles/
│       ├── global.css
│       └── components/
└── package.json
*/

// // styles/global.css
// :root {
//   --primary-color: #00a0e3;
//   --secondary-color: #0071bc;
//   --text-color: #333333;
//   --light-grey: #f5f5f5;
//   --dark-grey: #444444;
//   --white: #ffffff;
//   --black: #000000;
// }

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   font-family: 'Roboto', Arial, sans-serif;
//   line-height: 1.6;
//   color: var(--text-color);
// }

// a {
//   color: var(--primary-color);
//   text-decoration: none;
// }

// h1, h2, h3, h4, h5, h6 {
//   font-weight: 700;
//   margin-bottom: 1rem;
// }

// .container {
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 1rem;
// }

// .main-content {
//   min-height: calc(100vh - 160px); /* Adjust based on header and footer height */
// }

// section {
//   padding: 4rem 0;
// }

// .section-title {
//   text-align: center;
//   margin-bottom: 3rem;
//   font-size: 2.5rem;
//   color: var(--primary-color);
// }

// button {
//   cursor: pointer;
//   border: none;
//   outline: none;
//   background-color: var(--primary-color);
//   color: var(--white);
//   padding: 0.75rem 1.5rem;
//   border-radius: 4px;
//   font-weight: 600;
//   transition: background-color 0.3s ease;
// }

// button:hover {
//   background-color: var(--secondary-color);
// }

// img {
//   max-width: 100%;
//   height: auto;
// }