import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';
import {
  BurgerButton,
  ButtonWrapp,
  IconsStars,
  Line,
  MenuLink,
  MenuOverlay,
  Wrapper,
} from './BurgerMenu.styled';
import IconStars from '../../assets/icons/Icon-stars.svg';
import { useTranslation } from 'react-i18next';
import { MagicButton } from '../MagicButton/MagicButton';

// Анімації для бургер-кнопки
const topLineVariants = {
  open: { rotate: 45, y: 8 },
  closed: { rotate: 0, y: 0 },
};

const middleLineVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
};

const bottomLineVariants = {
  open: { rotate: -45, y: -8 },
  closed: { rotate: 0, y: 0 },
};

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const links = [
    { href: 'service', label: t('menu.services') },
    { href: 'case', label: t('menu.caseStudies') },
    { href: 'faq', label: t('menu.faq') },
    { href: 'contact', label: t('menu.contact') },
  ];

  const handleScroll = (to: string) => {
    scroller.scrollTo(to, {
      smooth: 'easeInOutQuart',
      duration: 100,
      offset: -90,
    });
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <BurgerButton onClick={() => setIsOpen(!isOpen)}>
        <Line animate={isOpen ? 'open' : 'closed'} variants={topLineVariants} />
        <Line
          animate={isOpen ? 'open' : 'closed'}
          variants={middleLineVariants}
        />
        <Line
          animate={isOpen ? 'open' : 'closed'}
          variants={bottomLineVariants}
        />
      </BurgerButton>

      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, index) => (
              <MenuLink key={index} onClick={() => handleScroll(link.href)}>
                {link.label}
              </MenuLink>
            ))}
            <ButtonWrapp>
              <MagicButton onClick={() => handleScroll('contact')}>
                <IconsStars src={IconStars} alt="Stars" />
                {t('buttons.getInTouch')}
              </MagicButton>
            </ButtonWrapp>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default BurgerMenu;
