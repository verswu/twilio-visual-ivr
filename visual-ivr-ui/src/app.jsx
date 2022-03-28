import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";
import {Provider} from 'react-redux';
import store from './hooks/store';
/**
* This code defines the react app
*
* Imports the router functionality to provide page navigation
* Defines the Home function outlining the content on each page
* Content specific to each page (Home and About) is defined in their components in /pages
* Each page content is presented inside the overall structure defined here
* The router attaches the page components to their paths
*/

// Import and apply CSS stylesheet
import "./styles/styles.css";
import "./styles/buttons.scss";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

import Logo from './assets/logo-twilio-red.png'; 

// Home function that is reflected across the site
export default function Home() {
  return (
    <Provider store={store}> 
    <Router hook={useHashLocation} base='/ivr-menu'>
      <Seo />
      <header className="header">
        <Link href="/">
          <img src={Logo} width="200" height="100"/>
        </Link>
      </header>
      <main role="main" className="wrapper">
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter /> 
        </div>
      </main>
      {/* Footer links to Home and About, Link elements matched in router.jsx */}
      <footer className="footer">
        <div className="links">
          <Link href="/">Home</Link>
        </div>
      </footer>
    </Router>
    </Provider>
  );
}
