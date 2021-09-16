import React from "react";

function Card(props) {
  return (
    <>
      <div className='Card__container'>
        <div className='Card__cover'>
          <img
            className='Card__image'
            src={require(`../../Assets/Imagens/${props.src}`).default}
            alt={props.alt}
          />
        </div>
        <div className='Card__content'>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
