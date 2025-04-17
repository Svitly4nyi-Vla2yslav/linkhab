import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MagicButton } from '../MagicButton/MagicButton';
import { useTranslation } from 'react-i18next';

const CookieBanner = () => {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Перевіряємо, чи користувач вже дав згоду
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    if (cookiesAccepted !== 'true') {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Зберігаємо в localStorage, що користувач прийняв cookies
    localStorage.setItem('cookiesAccepted', 'true');

    // Додатково можна зберегти дату прийняття
    localStorage.setItem('cookiesAcceptDate', new Date().toISOString());

    // Встановлюємо cookies для аналітики (приклад для Google Analytics)
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }

    setIsVisible(false);

    // Ініціалізуємо аналітичні інструменти після отримання згоди
    initializeAnalytics();
  };

  const initializeAnalytics = () => {
    // Тут ініціалізація Google Analytics, Facebook Pixel тощо
    console.log('Analytics initialized with user consent');
    // Приклад:
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    // gtag('config', 'GA_MEASUREMENT_ID');
  };

  if (!isVisible) return null;

  return (
    <BannerContainer>
      <BannerContent>
        <BannerText>{t('cookies.message')}</BannerText>
        <ButtonContainer>
          <MagicButton onClick={handleAccept}>
            <AcceptIcon width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clipPath="url(#clip0_2111_18481)">
                <path
                  d="M2.99967 14.6667V11.3334M2.99967 4.66671V1.33337M1.33301 3.00004H4.66634M1.33301 13H4.66634M8.66634 2.00004L7.51022 5.00595C7.32221 5.49477 7.22821 5.73918 7.08203 5.94476C6.95247 6.12697 6.79327 6.28617 6.61106 6.41573C6.40548 6.56191 6.16107 6.65591 5.67225 6.84392L2.66634 8.00004L5.67225 9.15616C6.16107 9.34417 6.40548 9.43817 6.61107 9.58435C6.79327 9.71391 6.95247 9.87311 7.08203 10.0553C7.22821 10.2609 7.32221 10.5053 7.51022 10.9941L8.66634 14L9.82246 10.9941C10.0105 10.5053 10.1045 10.2609 10.2507 10.0553C10.3802 9.87311 10.5394 9.71391 10.7216 9.58435C10.9272 9.43817 11.1716 9.34417 11.6604 9.15616L14.6663 8.00004L11.6604 6.84392C11.1716 6.65591 10.9272 6.56191 10.7216 6.41573C10.5394 6.28617 10.3802 6.12697 10.2507 5.94476C10.1045 5.73918 10.0105 5.49477 9.82246 5.00595L8.66634 2.00004Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2111_18481">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </AcceptIcon>
            <span>{t('cookies.acceptButton')}</span>
          </MagicButton>
        </ButtonContainer>
      </BannerContent>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 133px;
  z-index: 1000;
  //   opacity: 0.9;
  animation: slideUp 0.5s ease-out forwards;

  @keyframes slideUp {
    from {
      transform: translate(-50%, 100%);
    }
    to {
      transform: translate(-50%, 0);
    }
  }

      @media screen and (min-width: 744px){
display: flex;

}

@media screen and (min-width: 1440px){


}
`;

const BannerContent = styled.div`
  border: 1px solid var(--line);
  border-radius: 16px 16px 0 0;
  padding: 20px 16px;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 0 var(--white), 0 0 0 1px rgba(244, 244, 245, 0.1),
    0 0 0 0 rgba(0, 0, 0, 0), 0 6px 9px 0 rgba(0, 0, 0, 0.25);
  background: var(--substrate);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

@media screen and (min-width: 744px){
         display: flex
;
        flex-direction: row;
        justify-content: center;
        align-items: baseline;
        gap: 40px;

}

@media screen and (min-width: 1440px){


}
`;

const BannerText = styled.p`
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  color: var(--white);
  margin: 0;
  text-align: center;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

const ButtonContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;

      @media screen and (min-width: 744px){
  width: 30%;

}

@media screen and (min-width: 1440px){
 width: 20%;

}
`;

const AcceptIcon = styled.svg`
  flex-shrink: 0;
`;

export default CookieBanner;
