import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { CarouselContainer, CarouselItem, CarouselButton } from './styles';

const Carousel = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handlePrevItem = () => {
    setCurrentItemIndex(
      currentItemIndex === 0 ? items.length - 1 : currentItemIndex - 1
    );
  };

  const handleNextItem = () => {
    setCurrentItemIndex(
      currentItemIndex === items.length - 1 ? 0 : currentItemIndex + 1
    );
  };

  const getItemsToShow = () => {
    const itemsToShowList = items.slice(currentItemIndex, currentItemIndex + 1);
    return itemsToShowList.map((item, index) => (
      <CarouselItem key={index}>{item}</CarouselItem>
    ));
  };

  return (
    <CarouselContainer>
      <CarouselButton onClick={handlePrevItem}>
        <FaArrowAltCircleLeft />
      </CarouselButton>
      {getItemsToShow()}
      <CarouselButton onClick={handleNextItem}>
        <FaArrowAltCircleRight />
      </CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel;