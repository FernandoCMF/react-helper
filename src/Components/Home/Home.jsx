import React from "react";
import ImageLogo from "../../Assets/Imagens/logo.svg";
import "./Home.css";

function Home() {
  return (
    <div className='home-container'>
      <div className='home-wrapper'>
        <div className='home-logo'>
          <img src={ImageLogo} alt='Imagem logo' />
        </div>
        <div className='home-info'>
          <h1>HELPER</h1>
          <h2>Ajude como pode</h2>
          <h2>com que puder</h2>
        </div>
        <button type='button' className='home-button'>
          FAÇA A SUA PARTE
        </button>
      </div>
    </div>
  );
}

export default Home;
