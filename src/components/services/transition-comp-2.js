import React from 'react';
import '../../styles/services/transition-comp-2.css'; 
import styledArrow from "../../images-and-icons/styled-arrow-1.svg";

function TransitionComp2() {
  return (
    <div className="transition-container-2">
      <div className="dashed-line dashed-line-vertical-2a"></div>
      <div className="dashed-line dashed-line-horizontal-2a"></div>
      <div className="dashed-line dashed-line-vertical-2b"></div>
      <img src={styledArrow} alt="arrow svg used for styling the page" className='styled-arrow-2a' />
    </div>
  );
}

export default TransitionComp2;
