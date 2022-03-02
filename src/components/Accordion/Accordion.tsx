import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styled from 'styled-components';

interface Item {
  title: string;
  content: string;
}

interface AccordionProps {
  items: Item[];
}

const Title = styled.div`
  &.active {
    font-weight: bold;
  }
`;

const Content = styled.div`

  font-weight: bold;
  display: none;

  &.active {
    display: block;
  }
`;

const Accordion: React.FC<AccordionProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderedItems = props.items.map((item, index) => {

    const active = index === activeIndex ? 'active' : '';

    return (
      <div key={item.title} >
        <Title className={active} onClick={() => setActiveIndex(index)}>
          {item.title}
          <FaChevronDown />
        </Title>
        <Content className={active}>
          <p>{item.content}</p>
        </Content>
      </div>
    )
  })

  return renderedItems;
}


export default Accordion;
