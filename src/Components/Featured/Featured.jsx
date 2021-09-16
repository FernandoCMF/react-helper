import React from "react";
import Card from "../Card/Card";
import "./Featured.css";

function Featured() {
  return (
    <div className='Featured__container'>
      <h1>Destaque</h1>
      <div className='Featured__wrapper'>
        <Card
          src='img-2.jpg'
          alt='Test'
          title='Lorem ipsum dolor'
          text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, alias corrupti neque nobis veritatis ducimus quae eos architecto possimus veniam recusandae nihil iusto ullam, asperiores expedita, dignissimos enim voluptas numquam!'
        />
        <Card
          src='img-3.jpg'
          alt='Test'
          title='Lorem ipsum dolor'
          text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, alias corrupti neque nobis veritatis ducimus quae eos architecto possimus veniam recusandae nihil iusto ullam, asperiores expedita, dignissimos enim voluptas numquam!'
        />
        <Card
          src='img-5.jpg'
          alt='Test'
          title='Lorem ipsum dolor'
          text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, alias corrupti neque nobis veritatis ducimus quae eos architecto possimus veniam recusandae nihil iusto ullam, asperiores expedita, dignissimos enim voluptas numquam!
          '
        />
      </div>
      <div className='Featured__wrapper'>
        <Card
          src='img-4.jpg'
          alt='Test'
          title='Lorem ipsum dolor'
          text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, alias corrupti neque nobis veritatis ducimus quae eos architecto possimus veniam recusandae nihil iusto ullam, asperiores expedita, dignissimos enim voluptas numquam!'
        />
        <Card
          src='img-5.jpg'
          alt='Test'
          title='Lorem ipsum dolor'
          text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, alias corrupti neque nobis veritatis ducimus quae eos architecto possimus veniam recusandae nihil iusto ullam, asperiores expedita, dignissimos enim voluptas numquam!
          '
        />
        <Card
          src='img-3.jpg'
          alt='Test'
          title='Lorem ipsum dolor'
          text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, alias corrupti neque nobis veritatis ducimus quae eos architecto possimus veniam recusandae nihil iusto ullam, asperiores expedita, dignissimos enim voluptas numquam!'
        />
      </div>
    </div>
  );
}

export default Featured;
