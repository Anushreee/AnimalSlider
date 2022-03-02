import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import styled from 'styled-components';

const Slider = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowLeft = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
`;

const ArrowRight = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
 
`;

const AnimalImage = styled.img`
  width: 1000px;
  height: 600px;
  border-radius: 6px;
  object-fit: cover;
`

const Slide = styled.div`
  opacity: 0;
  transition-duration: 1s ease;

  &.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
`

const Heading = styled.h1`
  font-size: 2rem;
  display: block;
`

const Description = styled.div`
font-size: 2rem;
display: block;
`

interface Animal {
  id: number,
  name: string,
  img: string,
  habitat: string
}

interface AnimalSliderProps {
  animals: Animal[];
}

const AnimalSlider: React.FC<AnimalSliderProps> = ({ animals }) => {
  const [current, setCurrent] = useState(0);
  const length = animals.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  console.log('current is', current)

  if (animals.length <= 0) {
    return null;
  }

  return (
    <Slider>
      <ArrowLeft onClick={previousSlide} />
      <ArrowRight onClick={nextSlide} />
      {animals.map((animal, index) => {
        return (
          <Slide className={index === current ? 'active' : ''}>
            {index === current &&
              <>
                <Heading> {animal.name}</Heading>
                <AnimalImage src={animal.img} alt={animal.name} />
                <Description>{animal.habitat}</Description>
              </>

            }

          </Slide>
        )
      })}
    </Slider>

  )
}

export default AnimalSlider;
