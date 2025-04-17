import React, { useEffect } from 'react';
import {
  ComprehensiveText,
  ComprehensiveTitle,
  ComputerIcon,
  IconContainer,
} from './About.styled';
import Icon from '../../assets/icons/about/cardIcon.svg';
import {
  BackgroundIcon,
  BackgroundIconContainer,
  BigCard,
  CardContainer,
  CardSmollContainer,
  CardText,
  CardTitel,
  CardZipContainer,
  ComprehensiveContainer,
  EngineIcons,
  IconContainerCard,
  IconContainerCard1,
  IconContainerCard2,
  IconContainerCardCode,
  IconContainerCredit,
  PhoneIcon,
  PhoneIcon1,
  PhoneIcon2,
  PhoneIconCode,
  PhoneIconCredit,
  SmollCard,
  CardsGrid,
} from './Card.styled';
import BackgroundImage from '../../assets/icons/about/rainbow.svg';
import Phone1 from '../../assets/icons/about/phone1.svg';
import Phone2 from '../../assets/icons/about/phone2.svg';
import Phone3 from '../../assets/icons/about/phone3.svg';
import Code from '../../assets/icons/about/codeIcon.svg';
import BigCode from '../../assets/icons/about/CodeWarning.svg';
import Lamp from '../../assets/icons/about/IconLicht.svg';
import Credit from '../../assets/icons/about/creditCard.svg';
import Zip from '../../assets/icons/about/Zip.svg';
import Engine from '../../assets/icons/about/engineCard.svg';
import SmollLamp from '../../assets/icons/about/smollLamp.svg';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Card: React.FC = () => {

  useEffect(() => {
    // Ініціалізація AOS тільки на клієнтській стороні
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 1600,
          offset: 120, // Змініть це значення (спробуйте 120, 200, -100)
          easing: 'ease-out-quad',
          once: false,
          mirror: true,
          disableMutationObserver: true,
          debounceDelay: 50,
          throttleDelay: 99,
          disable: function() {
            return window.innerWidth < 1024;
          }
        });

        // Оновлення AOS після ініціалізації
        AOS.refresh();
      });
    }
  }, []);


  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <CardContainer>
      <CardsGrid>
        {!isDesktop && (
          <ComprehensiveContainer  data-aos="zoom-in-up">
            <IconContainer>
              <ComputerIcon src={Icon} alt={t('card.icons.unicorn')} />
            </IconContainer>
            <ComprehensiveTitle>
              {t('card.sections.standardApps.title')}
            </ComprehensiveTitle>
            <ComprehensiveText>
              {t('card.sections.standardApps.description')}
            </ComprehensiveText>
            <BackgroundIconContainer>
              <BackgroundIcon
                src={BackgroundImage}
                alt={t('card.icons.background')}
              />
              <IconContainerCard>
                <PhoneIcon src={Phone1} alt={t('card.icons.phone')} />
              </IconContainerCard>
              <IconContainerCard1>
                <PhoneIcon1 src={Phone2} alt={t('card.icons.phone')} />
              </IconContainerCard1>
              <IconContainerCard2>
                <PhoneIcon2 src={Phone3} alt={t('card.icons.phone')} />
              </IconContainerCard2>
            </BackgroundIconContainer>
          </ComprehensiveContainer>
        )}

        <ComprehensiveContainer  data-aos="zoom-in-up">
          <IconContainer>
            <ComputerIcon src={Code} alt={t('card.icons.code')} />
          </IconContainer>
          <ComprehensiveTitle>
            {t('card.sections.customSolutions.title')}
          </ComprehensiveTitle>
          <ComprehensiveText>
            {t('card.sections.customSolutions.description')}
          </ComprehensiveText>
          <BackgroundIconContainer>
            <IconContainerCardCode>
              <PhoneIconCode src={BigCode} alt={t('card.icons.phone')} />
            </IconContainerCardCode>
          </BackgroundIconContainer>
        </ComprehensiveContainer>

        <ComprehensiveContainer  data-aos="zoom-in-up">
          <IconContainer>
            <ComputerIcon src={Lamp} alt={t('card.icons.lamp')} />
          </IconContainer>
          <ComprehensiveTitle>
            {t('card.sections.design.title')}
          </ComprehensiveTitle>
          <ComprehensiveText>
            {t('card.sections.design.description')}
          </ComprehensiveText>
          <BackgroundIconContainer>
            <IconContainerCredit>
              <PhoneIconCredit src={Credit} alt={t('card.icons.phone')} />
            </IconContainerCredit>
          </BackgroundIconContainer>
        </ComprehensiveContainer>

        <ComprehensiveContainer  data-aos="zoom-in-up">
          <IconContainer>
            <ComputerIcon src={Zip} alt={t('card.icons.zip')} />
          </IconContainer>
          <ComprehensiveTitle>
            {t('card.sections.packages.title')}
          </ComprehensiveTitle>
          <ComprehensiveText>
            {t('card.sections.packages.description')}
          </ComprehensiveText>
          <BackgroundIconContainer>
            <CardZipContainer>
              <CardSmollContainer>
                <SmollCard>
                  <EngineIcons src={Engine} alt={t('card.icons.engine')} />
                  <CardTitel>{t('card.packages.standard.title')}</CardTitel>
                  <CardText>{t('card.packages.standard.description')}</CardText>
                </SmollCard>
                <SmollCard>
                  <EngineIcons
                    src={SmollLamp}
                    alt={t('card.icons.lampSmall')}
                  />
                  <CardTitel>{t('card.packages.custom.title')}</CardTitel>
                  <CardText>{t('card.packages.custom.description')}</CardText>
                </SmollCard>
              </CardSmollContainer>
              <BigCard>
                <EngineIcons src={SmollLamp} alt={t('card.icons.lampSmall')} />
                <CardTitel>{t('card.packages.full.title')}</CardTitel>
                <CardText>{t('card.packages.full.description')}</CardText>
              </BigCard>
            </CardZipContainer>
          </BackgroundIconContainer>
        </ComprehensiveContainer>
      </CardsGrid>
    </CardContainer>
  );
};

export default Card;
