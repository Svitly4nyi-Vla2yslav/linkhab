import React, { useEffect, useState } from 'react';
import {
  ButtonWrapp,
  ContainerBar,
  HeaderContainer,
  Logo,
  LogoIcon,
  MenuContainer,
} from './Header.styled';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import LogoSabsus from '../../assets/icons/logo-sabsus.svg';
import { Element, scroller } from 'react-scroll';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useMediaQuery } from 'react-responsive';
import { MagicButton } from '../MagicButton/MagicButton';
import IconStars from '../../assets/icons/Icon-stars.svg';
import { IconsStars, MenuLink } from '../BurgerMenu/BurgerMenu.styled';
import { useTranslation } from 'react-i18next';

export interface ContainerProps {
  $isScrolled: boolean;
}

const Header: React.FC = () => {
  const [isopen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isopen);
  };
  const { t } = useTranslation();
  const [isScrolled, setScrolled] = useState(false);

  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (to: string) => {
    scroller.scrollTo(to, {
      smooth: 'easeInOutQuart',
      duration: 100,
      offset: -90,
    });
    setIsOpen(false);
  };

  const links = [
    { href: 'service', label: t('menu.services') },
    { href: 'case', label: t('menu.caseStudies') },
    { href: 'faq', label: t('menu.faq') },
    { href: 'contact', label: t('menu.contact') },
  ];

  return (
    <Element name="header">
      <HeaderContainer isopen={isopen} $isScrolled={isScrolled}>
        <ContainerBar>
          <Logo href="#header">
            <LogoIcon src={LogoSabsus} alt="logo-sabsus" />
          </Logo>

          <ContainerBar>
            {isDesktop && (
              <MenuContainer>
                {links.map((link, index) => (
                  <MenuLink key={index} onClick={() => handleScroll(link.href)}>
                    {link.label}
                  </MenuLink>
                ))}
              </MenuContainer>
            )}
            <LanguageSwitcher />
            <BurgerMenu />
          </ContainerBar>
          {isDesktop && (
            <ButtonWrapp>
              <MagicButton onClick={() => handleScroll('contact')}>
                <IconsStars src={IconStars} alt="Stars" />
                {t('buttons.getInTouch')}
              </MagicButton>
            </ButtonWrapp>
          )}
        </ContainerBar>
      </HeaderContainer>{' '}
    </Element>
  );
};

export default Header;
