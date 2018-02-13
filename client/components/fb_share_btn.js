import React from 'react';

const FbShareBtn = () => {
  return(
    <div className="fb-share-button"
         data-href="https://lavazzamaestrodetalje.dk"
         data-layout="button_count" data-size="large"
         data-mobile-iframe="false">
      <a className="fb-xfbml-parse-ignore"
         target="_blank"
         href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flavazzamaestrodetalje.dk%2F&amp;src=sdkpreparse">Del</a>
    </div>
  )
};

export default FbShareBtn;