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
  max-width: 425px; 
  
 
  margin: 0 auto;
  position: relative;
`;

export const  Container = styled.div`
width: 345px;
`;

export const ProfileSection = styled.div`
  width: 100%;
  max-width: 375px;
  position: relative;
  margin-bottom: 180px;
`;

export const ProfileCover = styled.div`
  position: relative;
  width: 100%;
  height: 462px;
  
border-radius: 0 0 24px 24px;
width: 393px;
height: 280px;
`;

export const CoverImage = styled.img`
  position: absolute;
  top: 0;
  left: -9px;
  width: 100%;
  height: 100%;
  object-fit: cover;

`;

export const ProfileCard = styled.div`
  position: absolute;
  top: 127px;
  left: 48%;
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


export const VideoSection = styled.div`
  position: relative;
  border-radius: 16px;
  width: 345px;
  height: 194px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  margin-top: 32px;

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

export const ArtGallery = styled.div`
  display: flex;
  gap: 16px;
`;

export const ArtItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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
`;

export const ArtPrice = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary || '#FFF'};
  font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SocialLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.borderSecondary || '#656565'};
  background: rgba(39, 38, 40, 0.7);
  border-radius: 8px;
`;

export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SocialText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary || '#979797'};
  font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
`;

export const SocialArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
`;

export const PersonalBanner = styled.img`
  border-radius: 8px;
  width: 353px;
  height: 80px;
  object-fit: cover;
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

export const Divider = styled.div`
  width: 100%;
  height: 5px;
  background: #FFF;
  border-radius: 2.5px;
  margin: 8px 0;
`;
