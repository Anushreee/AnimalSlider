import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styled from 'styled-components';


const Counter: React.FC = (props) => {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount(count + 1);
  }




  return (
    <>
      <h1> {count}</h1>
      <button onClick={onButtonClick}>Click Me</button>
    </>

  )


}


export default Counter;
