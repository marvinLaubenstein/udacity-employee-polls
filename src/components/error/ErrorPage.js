import React from 'react';
import Navbar from '../navbar/Navbar';
import './errorpage.css';

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="error_wrapper">
        <svg>
          <defs>
            <filter id="glow">
              <fegaussianblur
                className="blur"
                result="coloredBlur"
                stdDeviation="4"
              ></fegaussianblur>
              <femerge>
                <femergenode in="coloredBlur"></femergenode>
                <femergenode in="SourceGraphic"></femergenode>
              </femerge>
            </filter>
          </defs>
        </svg>

        <div className="error-title">
          <h1>404</h1>
        </div>
        <div className="error-subtitle">
          <h2>Page Not Found</h2>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
