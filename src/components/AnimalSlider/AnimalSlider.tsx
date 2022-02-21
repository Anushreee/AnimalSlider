import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div` 
 display: flex;
 margin: 0 auto;
 max-width: 800px;
 overflow: hidden;
`

const Article = styled.article`
  display: grid;
  grid-template-rows: min-content 200px min-content;
  
  &.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }

  &.lastSlide {
    transform: translateX(-100%);
  }

  &.nextSlide {
    transform: translateX(100%);
  }
`

const Heading = styled.h1`
grid-column: 1/-1;
`

const Slider = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 200px;
`

const Description = styled.div`
grid-column: 1/-1;
`;

const AnimalImageWrapper = styled.div`
  grid-column: 1/-1;
  grid-row: 1/2;
  z-index: 1;
 
`

const AnimalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`

const ArrowRight = styled(FaChevronRight)`
  height: 2rem;
  width: 2rem;
  grid-column: 1/-1;
  grid-row: 1/2;
  z-index: 2;
  justify-self: end;
  align-self: center;
  margin-right: 20px;
`

const ArrowLeft = styled(FaChevronLeft)`
  height: 2rem;
  width: 2rem;
  grid-column: 1/-1;
  grid-row: 1/2;
  z-index: 2;
  justify-self: start;
  align-self: center;
  margin-left: 20px;
`

interface Animal {
  id: number,
  name: string,
  img: string,
  habitat: string
}

interface AnimalSliderProps {
  data: Animal[];
}

const AnimalSlider: React.FC<AnimalSliderProps> = ({ data }) => {
  const [animals, setAnimals] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <div className="App">
      <h1>Wild Animals</h1>
      <Wrapper>
        {
          animals.map(({ name, img, habitat }, animalIndex) => {
            let position = "nextSlide";
            if (animalIndex === index) {
              position = "activeSlide";
            }

            if (animalIndex === index - 1 || index === 0) {
              position = "lastSlide";
            }
            return <Article className={position}>
              <Heading>{name}</Heading>
              <Slider>
                <AnimalImageWrapper>
                  <AnimalImage src={img} alt={name} />
                </AnimalImageWrapper>
                <ArrowLeft onClick={() => setIndex(index - 1)} />
                <ArrowRight onClick={() => setIndex(index + 1)} />
              </Slider>
              <Description>{habitat}</Description>
            </Article>
          })
        }
      </Wrapper>
    </div>
  );
}

export default AnimalSlider;
