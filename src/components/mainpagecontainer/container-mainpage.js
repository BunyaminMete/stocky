import React from 'react';
import './container-mainpage.css';

const MainPageContainer = () => {
  return (
      <>
      <div className='container-cover'>
    <div className="container-mainpage">
      <div className="left-section">
        <h1 className="title">Title</h1>
        <hr className="divider" />
        <p className="description">Additional information goes here.</p>
      </div>
      <div className="right-section">
        <div className="image-placeholder">Image Area</div>
      </div>
    </div>
    </div>
    </>
  );
};

export default MainPageContainer;
