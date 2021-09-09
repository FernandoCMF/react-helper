import React from "react";

function Card(props) {
  return (
    <>
      <div className='disclosure__card__info'>
        <h4 className='disclosure__card_text'>{props.text}</h4>
      </div>
    </>
  );
}

export default Card;
