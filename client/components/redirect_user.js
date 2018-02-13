import React from 'react';
import MobileDetect from '../../node_modules/mobile-detect';
import {browserHistory} from 'react-router';

const RedirectUser = (props) => {
  const currentLocation = props.location.pathname;
  let md = new MobileDetect(window.navigator.userAgent);
  console.log(md);
  const redirectUsersTo = (md.mobile()) ?  browserHistory.push('/') : top.location="https://www.facebook.com/lavazzadanmark/app/180321945790800";
  return (
    <div>{redirectUsersTo}</div>
  )
};

export default RedirectUser;