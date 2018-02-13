import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const FooterAlt = () => {
  return (
    <footer>
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>

        <div className="logo-container"><img className="logo" src="/images/lavazza_logo.svg" alt=""/></div>
      </ReactCSSTransitionGroup>
    </footer>
  )
};


export default FooterAlt;