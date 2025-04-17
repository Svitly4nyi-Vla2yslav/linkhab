import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ENG from '../../assets/icons/US.svg';
import ESP from '../../assets/icons/ES.svg';
import RUS from '../../assets/icons/RU.svg';
import Arrow from '../../assets/icons/arrow_down.svg';

// Дані мов
const languages = [
  { code: 'en', label: 'ENG', flag: ENG },
  { code: 'es', label: 'ESP', flag: ESP },
  { code: 'ru', label: 'RUS', flag: RUS },
];

// Styled Components
const Wrapper = styled.div`
  position: relative;
  left: 70px;
  display: flex;
  z-index: 100;

  @media screen and (min-width: 744px){
margin-right: 20px;
left: 0;
}

@media screen and (min-width: 1440px){


}

`;

const Button = styled.button`
  margin-top: 0px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: transparent;
  backdrop-filter: blur(80px);
  color: white;
  border-radius: 28px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #444;
    background-color: rgba(249, 249, 249, 0.28);
  }
`;

const Dropdown = styled(motion.ul)`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  width: 90px;
  background-color: rgba(249, 249, 249, 0.28);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 11;
`;

const DropdownItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #444;
  }
`;

const Icons = styled.img`
  width: 20px;
`;

const IconsArrow = styled.img`
  width: 10px;
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const selectedLang =
    languages.find(lang => lang.code === i18n.language) || languages[0];

  const toggleMenu = () => setIsOpen(prev => !prev);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode).then(() => {
      // Перезавантажуємо сторінку після зміни мови
      window.location.reload();
    });
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Button onClick={toggleMenu}>
        <span>{selectedLang.label}</span>
        <Icons src={selectedLang.flag} alt={selectedLang.label} />
        <IconsArrow src={Arrow} alt="🔽" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <Dropdown
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map(lang => (
              <DropdownItem
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
              >
                {lang.label}
                <Icons src={lang.flag} />
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default LanguageSwitcher;