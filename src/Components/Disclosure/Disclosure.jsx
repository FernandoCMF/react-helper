import React from "react";
import ImageLogo from "../../Assets/Imagens/logo.svg";
import Image2 from "../../Assets/Imagens/img-2.jpg";

import "./Disclosure.css";

function Disclosure() {
  return (
    <div className='disclosure__container'>
      <div className='disclosure__wrapper'>
        <div className='disclosure__wrapper-info'>
          <h1>
            Juntos somos mais f
            <img className='logo' alt='children' src={ImageLogo} />
            rtes!
          </h1>
          <div className='info__wrapper'>
            <div className='info__wrapper-text'>
              <h3>A VIDA NÃO PARA</h3>

              <p>
                A luta contra a pobreza não pode parar. Doando apenas R$ 2.00
                por dia você pode mudar a vida de uma criança e de toda sua
                comunidade. Sua doação vai facilitar, por exemplo, que famílias
                tenham acesso a direitos básicos, como à água e à alimentação
                saudável.
              </p>

              <h3>FAÇA UMA CRIANÇA FELIZ!</h3>
            </div>
            <img
              src={Image2}
              alt='Children smile'
              className='info__wrapper-image'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disclosure;
