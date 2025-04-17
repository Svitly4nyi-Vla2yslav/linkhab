// SuccessModal.tsx
import React from 'react';
import styled from 'styled-components';
import { MagicButton } from '../MagicButton/MagicButton'; // Ваша існуюча кнопка
import { IconsStars } from '../BurgerMenu/BurgerMenu.styled';
import IconStars from '../../assets/icons/Icon-stars.svg';
import { useTranslation } from 'react-i18next';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 24px;
  width: 343px;
  height: 412px;
  background: var(--substrate);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 1px 2px 0 #525154, 0 0 18px -5px rgba(0, 0, 0, 0.5);
`;

const IconContainer = styled.div`
  margin: 20px 0;
`;

const Title = styled.h3`
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  text-align: center;
  color: var(--white);
  margin-bottom: 12px;
`;

const Message = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  text-align: center;
  color: var(--gray-500);
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  width: auto;
  height: 44px;
  margin-bottom: 50px;
`;

interface SuccessModalProps {
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <ModalOverlay>
      <ModalContent>
        <IconContainer>
          <svg
            width="185"
            height="185"
            viewBox="0 0 185 185"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              clipPath="url(#clip0_100_22169)"
              filter="url(#filter0_di_100_22169)"
            >
              <path
                d="M122.135 19.6287C107.722 13.7673 91.8952 12.3114 76.6553 15.445C61.4153 18.5787 47.4468 26.1611 36.5162 37.2335C25.5856 48.3059 18.1838 62.371 15.2468 77.65C12.3099 92.9291 13.9696 108.736 20.0162 123.072C26.0628 137.408 36.2247 149.628 49.2168 158.189C62.2089 166.749 77.4477 171.265 93.0061 171.165C108.565 171.064 123.744 166.353 136.625 157.626C149.505 148.898 159.509 136.548 165.37 122.135C173.23 102.809 173.091 81.1512 164.982 61.9275C156.874 42.7038 141.461 27.4885 122.135 19.6287ZM150.04 87.398L65.8746 122.86L44.9054 73.144C44.1887 71.4448 44.1763 69.5306 44.8711 67.8223C45.5658 66.1141 46.9106 64.7518 48.6098 64.0351C50.3089 63.3184 52.2232 63.3061 53.9314 64.0008C55.6397 64.6955 57.002 66.0404 57.7187 67.7395L73.3375 104.77L144.689 74.7128C145.53 74.358 146.433 74.1723 147.347 74.1664C148.26 74.1605 149.165 74.3345 150.011 74.6785C150.857 75.0225 151.626 75.5297 152.276 76.1712C152.926 76.8127 153.443 77.5759 153.798 78.4173C154.153 79.2586 154.339 80.1616 154.344 81.0747C154.35 81.9878 154.176 82.8931 153.832 83.7389C153.488 84.5847 152.981 85.3546 152.34 86.0044C151.698 86.6542 150.935 87.1713 150.094 87.5261L150.04 87.398Z"
                fill="url(#paint0_linear_100_22169)"
              />
            </g>
            <defs>
              <filter
                id="filter0_di_100_22169"
                x="-9.65535"
                y="-9.65535"
                width="204.311"
                height="204.311"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="4.55178"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_100_22169"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="9.10356" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_100_22169"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_100_22169"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1.13795" />
                <feGaussianBlur stdDeviation="1.13795" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.321569 0 0 0 0 0.317647 0 0 0 0 0.329412 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_100_22169"
                />
              </filter>
              <linearGradient
                id="paint0_linear_100_22169"
                x1="49.2637"
                y1="-10.0068"
                x2="122.582"
                y2="167.897"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0.12" />
                <stop offset="0.3" stopColor="white" stopOpacity="0.06" />
                <stop offset="1" stopColor="white" stopOpacity="0.02" />
              </linearGradient>
              <clipPath id="clip0_100_22169">
                <rect
                  width="177"
                  height="177"
                  fill="white"
                  transform="translate(4 4)"
                />
              </clipPath>
            </defs>
          </svg>
        </IconContainer>

        <Title>{t('successModal.title')}</Title>
        <Message>{t('successModal.message')}</Message>

        <ButtonWrapper>
          <MagicButton onClick={onClose} type="button">
            <IconsStars src={IconStars} alt="Stars" />
            {t('successModal.buttonText')}
          </MagicButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};
