import React from 'react';
import '../../styles/services/transition-comp-1.css'; 
import styledArrow from "../../images-and-icons/styled-arrow-1.svg";

function TransitionComp1() {
  return (
    <div className="transition-container">
      <div className="dashed-line dashed-line-vertical"></div>
      <div className="dashed-line dashed-line-horizontal"></div>
      <div className="dashed-line dashed-line-vertical-2"></div>
      <img src={styledArrow} alt="arrow svg used for styling the page" className='styled-arrow-1' />
    </div>
  );
}

export default TransitionComp1;
