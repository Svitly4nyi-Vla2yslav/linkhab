import styled from 'styled-components';

// Styled Components
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background: ${({ theme }) => theme.colors.background || '#090909'};
  min-height: 100vh;
  width: 393px;
  margin: 0 auto;
  position: relative;
    overflow-x: auto; /* або hidden, якщо хочете повністю приховати скролл */
  width: 100%;
  scrollbar-width: none; /* для Firefox */
  &::-webkit-scrollbar {
    display: none; /* для Chrome/Safari */
  }

`;

export const ProfileSection = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 180px;
`;

export const ProfileCover = styled.div`
  position: relative;
  width: 100%;
  height: 462px;
border-radius: 0 0 24px 24px;
height: 280px;
`;

export const CoverImage = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

`;

export const ProfileCard = styled.div`
  position: absolute;
  top: 127px;
  left: 50%;
  transform: translateX(-50%);
  width: 345px;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(31,31,31,0.7) 100%);
  border: 1px solid ${({ theme }) => theme.colors.border || '#FFF'};
  border-radius: 48px;
  backdrop-filter: blur(10px);
  margin : 0 auto;
  border: none;

`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ProfileImage = styled.img`
  border-radius: 40px;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const ProfileName = styled.div`
  display: flex;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
`;

export const NamePart = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary || '#FFF'};
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
`;

export const ProfileTitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary || 'rgba(255,255,255,0.7)'};
  font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 48px;
  padding: 8px 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  color: #FFF;
  
  &:first-child {
    background: linear-gradient(100deg, #62DF4E 0%, #35792A 96.03%);
  }
  
  &:last-child {
    background: linear-gradient(100deg, #4E7FDF 0%, #5864A3 96.03%);
  }
`;


// Оновлені стилі
export const VideoSection = styled.div`
  position: relative;
  border-radius: 16px;
  width: 100%;
  max-width: 345px;
  height: 194px;
  overflow: hidden;
  background: #000;
  margin-top: 32px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    &::-webkit-media-controls {
      display: none !important;
    }
  }

  video[controls]::-webkit-media-controls {
    display: flex !important;
  }
`;

// PlayButton залишається без змін
interface PlayButtonProps {
  $show: boolean;
}

export const PlayButton = styled.button<PlayButtonProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 24px;
  width: 56px;
  height: 56px;
  backdrop-filter: blur(6px);
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  display: ${props => props.$show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;


export const SectionTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary || '#FFF'};
  font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
`;

export const Container = styled.div`
width: 100%;
`;

export const ArtItem = styled.div`
border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background: rgba(39, 38, 40, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.05) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      animation: shine 1.5s infinite;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

`;

export const ArtImage = styled.img`
  border-radius: 26.667px;
  width: 160px;
  height: 160px;
  object-fit: cover;
`;

export const ArtTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary || '#FFF'};
  font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
 padding: 0 0 8px 8px;
`;

export const ArtPrice = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary || '#FFF'};
  font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
   padding: 0 0 8px 8px;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px 12px 16px;
max-width: 100%;
  height: 64px;
  border: 1px solid ${({ theme }) => theme.colors.borderSecondary || '#656565'};
  background: rgba(39, 38, 40, 0.7);
  border-radius: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  gap: 10px;
    max-width: 345px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background: rgba(39, 38, 40, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.05) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      animation: shine 1.5s infinite;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.3s ease;

  ${SocialLink}:hover & {
    transform: translateX(4px);
  }
`;

export const SocialText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary || '#979797'};
  font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
  transition: color 0.3s ease, transform 0.3s ease;

  ${SocialLink}:hover & {
    color: ${({ theme }) => theme.colors.textPrimary || '#FFF'};
    transform: scale(1.02);
  }
`;

export const SocialArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  width: 48px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  ${SocialLink}:hover & {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(4px);

    svg {
      transform: translateX(2px);
    }
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

export const PersonalBanner = styled.div`
    position: relative; /* Додаємо для позиціонування псевдоелемента */
    display: flex;
    border-radius: 20px;
    padding: 16px;
    width: 345px;
    height: 192px;
    background: #fff;
    backdrop-filter: blur(50px);
    box-shadow: inset 0 1px 0 0 #fff;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    overflow: hidden; /* Ховаємо виступаючі частини псевдоелемента */

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 50%; /* Займає половину батьківського компонента */
        height: 100%;
        background: linear-gradient(
            318deg,
            rgba(255, 0, 0, 0.85) 0%,
            rgba(255, 0, 98, 0) 100%
        );
        filter: blur(20px); /* Робимо ефект розмиття */
        z-index: 0; /* Поміщаємо під основний контент */
    }
`;

/* Додамо z-index до всіх вмістих елементів, щоб вони були над плямою */
export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    width: 100%;
    z-index: 1;
`;

export const BannerContainer1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    width: 100%;
    z-index: 1;
`;

/* Решта стилів залишаються без змін */
export const BannerItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    flex-wrap: wrap;
    justify-content: space-between;
    z-index: 1;
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 1;

    p {
        font-family: var(--font7);
        font-weight: 700;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 0.01em;
        text-align: center;
        color: #000;
    }
    span {
        font-family: var(--font7);
        font-weight: 400;
        font-size: 11px;
        line-height: 100%;
        letter-spacing: 0.01em;
        text-align: center;
        color: #000;
    }
`;

/* Інші стилі без змін */
export const FreeEntrance = styled.p`
    font-family: var(--font7);
    font-weight: 500;
    font-size: 11px;
    line-height: 100%;
    letter-spacing: 0.01em;
    color: #000;
`;

export const BannerLocation = styled.p`
    font-family: var(--font7);
    font-weight: 700;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0.01em;
    color: #000;
`;

export const BannerTitle = styled.h4`
    font-family: var(--font16);
    font-weight: 400;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0.01em;
    color: #000;
`;

export const BannerName = styled.p`
    font-family: var(--font7);
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0.01em;
    color: #000;
`;



export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 51px;
  background: #1E1E1F;
`;



export const FooterText = styled.div`
  display: flex;
  gap: 8px;
`;

export const FooterTextPart = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary || '#FFF'};
  font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
  font-size: 14px;
  line-height: 1.2;
  
  &:last-child {
    font-weight: 700;
  }
`;

// export const Divider = styled.div`
//   width: 50%;
//   height: 5px;
//   background: #FFF;
//   border-radius: 2.5px;
//   margin: 8px 0;
//   margin-bottom: 20px;
// `;
