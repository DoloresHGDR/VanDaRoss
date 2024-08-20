import React from 'react';

const card = (props) => {
  return (
    <div class="containerC">
      <div class="boxC">
        <span class="titleC" >{props.text1}</span>
        <div>
          <strong>{props.text1}</strong>
          <p>0000 000 000 0000</p>
          <span>VALID</span> <span>01/28</span>
        </div>
      </div>
    </div>

  );
}

export default card;