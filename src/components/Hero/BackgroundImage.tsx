import React from 'react';
import styled from 'styled-components';
import Icon from '../../assets/icons/HeroBackgroundIcon.svg';

const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
  overflow: hidden;
  opacity: 0.8; /* Змінюємо прозорість */
  z-index: 0; /* Важливо: відправляємо на задній план */

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 46%;
    background: linear-gradient(0deg, #101010 70%, rgba(16, 16, 16, 0) 100%);
    pointer-events: none;

  }

  @media screen and (min-width: 744px){
    top: -6%;

}

@media screen and (min-width: 1440px){

    // background: linear-gradient(0deg, #000 70%, #000 100%);


  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: linear-gradient(0deg, #000 70%, #000 100%);
    pointer-events: none;

  }

top:  -113%;
}
`;

const BackgroundHeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
    // background: linear-gradient(359deg, #101010 79%, rgba(16, 16, 16, 0) 100%);

}
`;

const BackgroundImage: React.FC = () => {
  return (
    <BackgroundImageContainer>
      <BackgroundHeroImage src={Icon} alt="Background Icon" />
    </BackgroundImageContainer>
  );
};

export default BackgroundImage;
