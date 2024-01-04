import React from "react";
import Iphone from './iphone'
const index = ({iphone}) => {
  const category = iphone.category
  return (
    
    <>
    {
      category === 'iphone' && <Iphone iphone={iphone} />
    }
    </>
  );
};

export default index;
