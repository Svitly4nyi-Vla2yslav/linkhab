import React, { useState } from 'react';
import {
  ContainerButton,
  ContainerExperience,
  ContainerTextExperience,
  HeroWrapper,
  IconsExperience,
  TextDescription,
  TextDevelopment,
  TextExperience,
  TitleModern,
} from './Hero.styled';
import { useTranslation } from 'react-i18next';
import IconStars from '../../assets/icons/Icon-stars.svg';
import { IconsStars } from '../BurgerMenu/BurgerMenu.styled';
import Tailored from '../../assets/icons/Tailored Solutions.svg';
import Scalable from '../../assets/icons/Scalable Technologies.svg';
import Proven from '../../assets/icons/Proven Expertise.svg';
import { scroller } from 'react-scroll';
import { MagicButton } from '../MagicButton/MagicButton';
import BackgroundImage from './BackgroundImage';

const Hero: React.FC = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleScroll = (to: string) => {
    scroller.scrollTo(to, {
      smooth: false,
      duration: 2000,
      offset: -90,
    });
    setIsOpen(false);
  };

  return (
    <HeroWrapper id="header">
      <TextDevelopment>{t('hero.developmentAgency')}</TextDevelopment>
      <TitleModern>{t('hero.title')}</TitleModern>
      <TextDescription>{t('hero.description')}</TextDescription>

      <ContainerButton>
        <MagicButton onClick={() => handleScroll('contact')}>
          <IconsStars src={IconStars} alt="Stars" />
          {t('buttons.contact')}
        </MagicButton>
      </ContainerButton>

      <TextDevelopment>{t('hero.expertiseTitle')}</TextDevelopment>
<ContainerTextExperience>
      <ContainerExperience>
        <IconsExperience src={Tailored} alt="⚙️" />
        <TextExperience>{t('expertise.tailored')}</TextExperience>
      </ContainerExperience>

      <ContainerExperience>
        <IconsExperience src={Scalable} alt="🎢" />
        <TextExperience>{t('expertise.scalable')}</TextExperience>
      </ContainerExperience>

      <ContainerExperience>
        <IconsExperience src={Proven} alt="🤯" />
        <TextExperience>{t('expertise.proven')}</TextExperience>
      </ContainerExperience></ContainerTextExperience>
    </HeroWrapper>
  );
};

export default Hero;
