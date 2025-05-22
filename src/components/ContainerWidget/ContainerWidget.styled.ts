import styled, { css, keyframes } from "styled-components";
import { darkTheme1 } from "../Thema/theme";

export const MainContainer = styled.div`
  display: ${darkTheme1.styles.MainContainer.display};
  flex-direction: ${darkTheme1.styles.MainContainer.flexDirection};
  align-items: ${darkTheme1.styles.MainContainer.alignItems};
  gap: ${darkTheme1.styles.MainContainer.gap};
  background: ${darkTheme1.styles.MainContainer.background};
  min-height: ${darkTheme1.styles.MainContainer.minHeight};
  width: ${darkTheme1.styles.MainContainer.width};
  margin: ${darkTheme1.styles.MainContainer.margin};
  position: ${darkTheme1.styles.MainContainer.position};
  overflow-x: ${darkTheme1.styles.MainContainer.overflowX};
  scrollbar-width: ${darkTheme1.styles.MainContainer.scrollbarWidth};
  max-width: ${darkTheme1.styles.MainContainer.maxWidth};

  &::-webkit-scrollbar {
    display: ${darkTheme1.styles.MainContainer["&::-webkit-scrollbar"].display};
  }
`;

export const ProfileSection = styled.div`
  width: ${darkTheme1.styles.ProfileSection.width};
  max-width: ${darkTheme1.styles.ProfileSection.maxWidth};
  position: ${darkTheme1.styles.ProfileSection.position};
  margin-bottom: ${darkTheme1.styles.ProfileSection.marginBottom};
`;

export const ProfileCover = styled.div`
  position: ${darkTheme1.styles.ProfileCover.position};
  width: ${darkTheme1.styles.ProfileCover.width};
  height: ${darkTheme1.styles.ProfileCover.height};
  border-radius: ${darkTheme1.styles.ProfileCover.borderRadius};
`;

export const CoverImage = styled.img`
  position: ${darkTheme1.styles.CoverImage.position};
  top: ${darkTheme1.styles.CoverImage.top};
  width: ${darkTheme1.styles.CoverImage.width};
  height: ${darkTheme1.styles.CoverImage.height};
  object-fit: ${darkTheme1.styles.CoverImage.objectFit};
`;

export const ProfileCard = styled.div`
  position: ${darkTheme1.styles.ProfileCard.position};
  top: ${darkTheme1.styles.ProfileCard.top};
  left: ${darkTheme1.styles.ProfileCard.left};
  transform: ${darkTheme1.styles.ProfileCard.transform};
  width: ${darkTheme1.styles.ProfileCard.width};
  padding: ${darkTheme1.styles.ProfileCard.padding};
  display: ${darkTheme1.styles.ProfileCard.display};
  flex-direction: ${darkTheme1.styles.ProfileCard.flexDirection};
  align-items: ${darkTheme1.styles.ProfileCard.alignItems};
  gap: ${darkTheme1.styles.ProfileCard.gap};
  background: ${darkTheme1.styles.ProfileCard.background};
  border: ${darkTheme1.styles.ProfileCard.border};
  border-radius: ${darkTheme1.styles.ProfileCard.borderRadius};
  backdrop-filter: ${darkTheme1.styles.ProfileCard.backdropFilter};
  margin: ${darkTheme1.styles.ProfileCard.margin};
`;



export const ProfileInfo = styled.div`
  display: ${darkTheme1.styles.ProfileInfo.display};
  flex-direction: ${darkTheme1.styles.ProfileInfo.flexDirection};
  align-items: ${darkTheme1.styles.ProfileInfo.alignItems};
  gap: ${darkTheme1.styles.ProfileInfo.gap};
`;

export const ProfileImage = styled.img`
  border-radius: ${darkTheme1.styles.ProfileImage.borderRadius};
  width: ${darkTheme1.styles.ProfileImage.width};
  height: ${darkTheme1.styles.ProfileImage.height};
  object-fit: ${darkTheme1.styles.ProfileImage.objectFit};
`;

export const ProfileName = styled.div`
  display: ${darkTheme1.styles.ProfileName.display};
  gap: ${darkTheme1.styles.ProfileName.gap};
  font-family: ${darkTheme1.styles.ProfileName.fontFamily};
`;

export const NamePart = styled.p`
  color: ${darkTheme1.styles.NamePart.color};
  font-size: ${darkTheme1.styles.NamePart.fontSize};
  font-weight: ${darkTheme1.styles.NamePart.fontWeight};
  line-height: ${darkTheme1.styles.NamePart.lineHeight};
`;

export const ProfileTitle = styled.p`
  color: ${darkTheme1.styles.ProfileTitle.color};
  font-family: ${darkTheme1.styles.ProfileTitle.fontFamily};
  font-size: ${darkTheme1.styles.ProfileTitle.fontSize};
  font-weight: ${darkTheme1.styles.ProfileTitle.fontWeight};
  line-height: ${darkTheme1.styles.ProfileTitle.lineHeight};
`;

export const ActionButtons = styled.div`
  display: ${darkTheme1.styles.ActionButtons.display};
  justify-content: ${darkTheme1.styles.ActionButtons.justifyContent};
  gap: ${darkTheme1.styles.ActionButtons.gap};
  width: ${darkTheme1.styles.ActionButtons.width};
`;

export const ActionButton = styled.button`
  display: ${darkTheme1.styles.ActionButton.display};
  justify-content: ${darkTheme1.styles.ActionButton.justifyContent};
  align-items: ${darkTheme1.styles.ActionButton.alignItems};
  gap: ${darkTheme1.styles.ActionButton.gap};
  width: ${darkTheme1.styles.ActionButton.width};
  height: ${darkTheme1.styles.ActionButton.height};
  padding: ${darkTheme1.styles.ActionButton.padding};
  border: ${darkTheme1.styles.ActionButton.border};
  border-radius: ${darkTheme1.styles.ActionButton.borderRadius};
  cursor: ${darkTheme1.styles.ActionButton.cursor};
  font-family: ${darkTheme1.styles.ActionButton.fontFamily};
  font-size: ${darkTheme1.styles.ActionButton.fontSize};
  font-weight: ${darkTheme1.styles.ActionButton.fontWeight};
  line-height: ${darkTheme1.styles.ActionButton.lineHeight};
  color: ${darkTheme1.styles.ActionButton.color};
  
`;

export const ActionButtonCall = styled(ActionButton)`
 background: ${darkTheme1.styles.ActionButtonCall?.background || '#62DF4E'};
`;

export const ActionButtonMail = styled(ActionButton)`
   background: ${darkTheme1.styles.ActionButtonMail?.background || '#4E7FDF'};
`;

export const VideoSection = styled.div`
  position: ${darkTheme1.styles.VideoSection.position};
  border-radius: ${darkTheme1.styles.VideoSection.borderRadius};
  width: ${darkTheme1.styles.VideoSection.width};
  max-width: ${darkTheme1.styles.VideoSection.maxWidth};
  height: ${darkTheme1.styles.VideoSection.height};
  overflow: ${darkTheme1.styles.VideoSection.overflow};
  background: ${darkTheme1.styles.VideoSection.background};
  margin-top: ${darkTheme1.styles.VideoSection.marginTop};

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
  position: ${darkTheme1.styles.VideoContainer.position};
  width: ${darkTheme1.styles.VideoContainer.width};
  height: ${darkTheme1.styles.VideoContainer.height};

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
  position: ${darkTheme1.styles.PlayButton.position};
  top: ${darkTheme1.styles.PlayButton.top};
  left: ${darkTheme1.styles.PlayButton.left};
  transform: ${darkTheme1.styles.PlayButton.transform};
  border: ${darkTheme1.styles.PlayButton.border};
  border-radius: ${darkTheme1.styles.PlayButton.borderRadius};
  width: ${darkTheme1.styles.PlayButton.width};
  height: ${darkTheme1.styles.PlayButton.height};
  backdrop-filter: ${darkTheme1.styles.PlayButton.backdropFilter};
  background: ${darkTheme1.styles.PlayButton.background};
  cursor: ${darkTheme1.styles.PlayButton.cursor};
  display: ${props => props.$show ? 'flex' : 'none'};
  justify-content: ${darkTheme1.styles.PlayButton.justifyContent};
  align-items: ${darkTheme1.styles.PlayButton.alignItems};
  z-index: ${darkTheme1.styles.PlayButton.zIndex};
  transition: ${darkTheme1.styles.PlayButton.transition};

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const Container = styled.div`
  width: ${darkTheme1.styles.Container.width};
  max-width: ${darkTheme1.styles.Container.maxWidth};
`;

const createAnimation = (animationData: any) => {
  if (!animationData) return null;
  return keyframes`
    ${Object.entries(animationData).map(([key, value]: [string, any]) => 
      `${key} { ${Object.entries(value).map(([prop, val]) => 
        `${prop}: ${val};`).join(' ')} }`
    ).join(' ')}
  `;
};

export const ArtItem = styled.div<{ $themeStyles?: any }>`
  border-radius: ${darkTheme1.styles.ArtItem.borderRadius};
  display: ${darkTheme1.styles.ArtItem.display};
  flex-direction: ${darkTheme1.styles.ArtItem.flexDirection};
  gap: ${darkTheme1.styles.ArtItem.gap};
  transition: ${darkTheme1.styles.ArtItem.transition};

  ${({ $themeStyles }) => {
    const styles = $themeStyles?.ArtItem || {};
    const shineAnim = createAnimation($themeStyles?.keyframes?.shine);

    return css`
      /* Базові стилі */
      ${styles && css(styles)}

      /* Ховер-стилі */
      &:hover {
        ${styles.hover && css(styles.hover)}
        
        &::before {
          ${styles.hover?.before && css(styles.hover.before)}
          ${styles.hover?.before?.animation?.name === 'shine' && shineAnim && css`
            animation: ${shineAnim} ${styles.hover.before.animation.duration || '1.5s'} infinite;
          `}
        }
      }

      /* Активні стилі */
      &:active {
        ${styles.active && css(styles.active)}
      }
    `;
  }}
`;

export const ArtImage = styled.img`
  border-radius: ${darkTheme1.styles.ArtImage.borderRadius};
  width: ${darkTheme1.styles.ArtImage.width};
  height: ${darkTheme1.styles.ArtImage.height};
  object-fit: ${darkTheme1.styles.ArtImage.objectFit};
`;

export const ArtTitle = styled.p`
  color: ${darkTheme1.styles.ArtTitle.color};
  font-family: ${darkTheme1.styles.ArtTitle.fontFamily};
  font-size: ${darkTheme1.styles.ArtTitle.fontSize};
  font-weight: ${darkTheme1.styles.ArtTitle.fontWeight};
  line-height: ${darkTheme1.styles.ArtTitle.lineHeight};
  padding: ${darkTheme1.styles.ArtTitle.padding};
`;

export const ArtPrice = styled.p`
  color: ${darkTheme1.styles.ArtPrice.color};
  font-family: ${darkTheme1.styles.ArtPrice.fontFamily};
  font-size: ${darkTheme1.styles.ArtPrice.fontSize};
  font-weight: ${darkTheme1.styles.ArtPrice.fontWeight};
  line-height: ${darkTheme1.styles.ArtPrice.lineHeight};
  padding: ${darkTheme1.styles.ArtPrice.padding};
`;

export const SocialLinks = styled.div`
  display: ${darkTheme1.styles.SocialLinks.display};
  flex-direction: ${darkTheme1.styles.SocialLinks.flexDirection};
  gap: ${darkTheme1.styles.SocialLinks.gap};
`;

export const SocialLink = styled.a<{ $themeStyles?: any }>`
  display: ${darkTheme1.styles.SocialLink.display};
  align-items: ${darkTheme1.styles.SocialLink.alignItems};
  justify-content: ${darkTheme1.styles.SocialLink.justifyContent};
  padding: ${darkTheme1.styles.SocialLink.padding};
  max-width: ${darkTheme1.styles.SocialLink.maxWidth};
  height: ${darkTheme1.styles.SocialLink.height};
  border: ${darkTheme1.styles.SocialLink.border};
  background: ${darkTheme1.styles.SocialLink.background};
  border-radius: ${darkTheme1.styles.SocialLink.borderRadius};
  cursor: ${darkTheme1.styles.SocialLink.cursor};
  position: ${darkTheme1.styles.SocialLink.position};
  overflow: ${darkTheme1.styles.SocialLink.overflow};
  gap: ${darkTheme1.styles.SocialLink.gap};
  transition: ${darkTheme1.styles.SocialLink.transition};

 ${({ $themeStyles }) => {
    const styles = $themeStyles?.SocialLink || {};
    const shineAnim = createAnimation($themeStyles?.keyframes?.shine);

    return css`
      /* Базові стилі */
      ${styles && css(styles)}

      /* Ховер-стилі */
      &:hover {
        ${styles.hover && css(styles.hover)}
        
        &::before {
          ${styles.hover?.before && css(styles.hover.before)}
          ${styles.hover?.before?.animation?.name === 'shine' && shineAnim && css`
            animation: ${shineAnim} ${styles.hover.before.animation.duration || '1.5s'} infinite;
          `}
        }
      }

      /* Активні стилі */
      &:active {
        ${styles.active && css(styles.active)}
      }
    `;
  }}
`;

export const SocialIcon = styled.div`
  display: ${darkTheme1.styles.SocialIcon.display};
  align-items: ${darkTheme1.styles.SocialIcon.alignItems};
  gap: ${darkTheme1.styles.SocialIcon.gap};
  transition: ${darkTheme1.styles.SocialIcon.transition};

  ${SocialLink}:hover & {
    transform: ${darkTheme1.styles.SocialIcon[":hover"].transform};
  }
`;

export const SocialText = styled.p`
  color: ${darkTheme1.styles.SocialText.color};
  font-family: ${darkTheme1.styles.SocialText.fontFamily};
  font-size: ${darkTheme1.styles.SocialText.fontSize};
  font-weight: ${darkTheme1.styles.SocialText.fontWeight};
  line-height: ${darkTheme1.styles.SocialText.lineHeight};
  transition: ${darkTheme1.styles.SocialText.transition};

  ${SocialLink}:hover & {
    color: ${darkTheme1.styles.SocialText[":hover"].color};
    transform: ${darkTheme1.styles.SocialText[":hover"].transform};
  }
`;

export const SocialArrow = styled.div`
  display: ${darkTheme1.styles.SocialArrow.display};
  justify-content: ${darkTheme1.styles.SocialArrow.justifyContent};
  align-items: ${darkTheme1.styles.SocialArrow.alignItems};
  border-radius: ${darkTheme1.styles.SocialArrow.borderRadius};
  width: ${darkTheme1.styles.SocialArrow.width};
  height: ${darkTheme1.styles.SocialArrow.height};
  background: ${darkTheme1.styles.SocialArrow.background};
  transition: ${darkTheme1.styles.SocialArrow.transition};

  ${SocialLink}:hover & {
    background: ${darkTheme1.styles.SocialArrow[":hover"].background};
    transform: ${darkTheme1.styles.SocialArrow[":hover"].transform};

    svg {
      transform: ${darkTheme1.styles.SocialArrow[":hover"].svg.transform};
    }
  }

  svg {
    transition: ${darkTheme1.styles.SocialArrow.svg.transition};
  }
`;
export const PersonalBanner = styled.div<{ $themeStyles?: any }>`
  ${({ $themeStyles }) => {
    // Базові стилі з darkTheme1
    const baseStyles = darkTheme1.styles.PersonalBanner;
    // Динамічні стилі з пропсів
    const dynamicStyles = $themeStyles?.PersonalBanner || {};
    
    // Об'єднуємо стилі (пріоритет у динамічних)
    const styles = { ...baseStyles, ...dynamicStyles };

    return css`
      /* Основні стилі */
      position: ${styles.position};
      display: ${styles.display};
      border-radius: ${styles.borderRadius};
      padding: ${styles.padding};
      width: ${styles.width};
      height: ${styles.height};
      background: ${styles.background};
      backdrop-filter: ${styles.backdropFilter};
      -webkit-backdrop-filter: ${styles.backdropFilter};
      box-shadow: ${styles.boxShadow};
      flex-direction: ${styles.flexDirection};
      justify-content: ${styles.justifyContent};
      align-items: ${styles.alignItems};
      overflow: ${styles.overflow};
      z-index: 1;

      /* Псевдоелемент ::after */
      &::after {
        content: " "; /* Пробіл замість пустого рядка */
        position: ${styles.after_position};
        top: ${styles.after_top};
        right: ${styles.after_right};
        width: ${styles.after_width};
        height: ${styles.after_height};
        background: ${styles.after_background};
        filter: ${styles.after_filter};
        z-index: ${styles.after_zIndex};
      }
    `;
  }}
`;


export const BannerContainer = styled.div`
  display: ${darkTheme1.styles.BannerContainer.display};
  flex-direction: ${darkTheme1.styles.BannerContainer.flexDirection};
  justify-content: ${darkTheme1.styles.BannerContainer.justifyContent};
  align-items: ${darkTheme1.styles.BannerContainer.alignItems};
  flex-wrap: ${darkTheme1.styles.BannerContainer.flexWrap};
  width: ${darkTheme1.styles.BannerContainer.width};
  z-index: ${darkTheme1.styles.BannerContainer.zIndex};
`;

export const BannerContainer1 = styled.div`
  display: ${darkTheme1.styles.BannerContainer1.display};
  flex-direction: ${darkTheme1.styles.BannerContainer1.flexDirection};
  justify-content: ${darkTheme1.styles.BannerContainer1.justifyContent};
  align-items: ${darkTheme1.styles.BannerContainer1.alignItems};
  flex-wrap: ${darkTheme1.styles.BannerContainer1.flexWrap};
  width: ${darkTheme1.styles.BannerContainer1.width};
  z-index: ${darkTheme1.styles.BannerContainer1.zIndex};
`;

export const BannerItem = styled.div`
  display: ${darkTheme1.styles.BannerItem.display};
  flex-direction: ${darkTheme1.styles.BannerItem.flexDirection};
  align-items: ${darkTheme1.styles.BannerItem.alignItems};
  flex-wrap: ${darkTheme1.styles.BannerItem.flexWrap};
  justify-content: ${darkTheme1.styles.BannerItem.justifyContent};
  z-index: ${darkTheme1.styles.BannerItem.zIndex};
`;

export const DataContainer = styled.div`
  display: ${darkTheme1.styles.DataContainer.display};
  flex-direction: ${darkTheme1.styles.DataContainer.flexDirection};
  align-items: ${darkTheme1.styles.DataContainer.alignItems};
  z-index: ${darkTheme1.styles.DataContainer.zIndex};

  p {
    font-family: ${darkTheme1.styles.DataContainer.p.fontFamily};
    font-weight: ${darkTheme1.styles.DataContainer.p.fontWeight};
    font-size: ${darkTheme1.styles.DataContainer.p.fontSize};
    line-height: ${darkTheme1.styles.DataContainer.p.lineHeight};
    letter-spacing: ${darkTheme1.styles.DataContainer.p.letterSpacing};
    text-align: ${darkTheme1.styles.DataContainer.p.textAlign};
    color: ${darkTheme1.styles.DataContainer.p.color};
  }
  
  span {
    font-family: ${darkTheme1.styles.DataContainer.span.fontFamily};
    font-weight: ${darkTheme1.styles.DataContainer.span.fontWeight};
    font-size: ${darkTheme1.styles.DataContainer.span.fontSize};
    line-height: ${darkTheme1.styles.DataContainer.span.lineHeight};
    letter-spacing: ${darkTheme1.styles.DataContainer.span.letterSpacing};
    text-align: ${darkTheme1.styles.DataContainer.span.textAlign};
    color: ${darkTheme1.styles.DataContainer.span.color};
  }
`;

export const FreeEntrance = styled.p`
  font-family: ${darkTheme1.styles.FreeEntrance.fontFamily};
  font-weight: ${darkTheme1.styles.FreeEntrance.fontWeight};
  font-size: ${darkTheme1.styles.FreeEntrance.fontSize};
  line-height: ${darkTheme1.styles.FreeEntrance.lineHeight};
  letter-spacing: ${darkTheme1.styles.FreeEntrance.letterSpacing};
  color: ${darkTheme1.styles.FreeEntrance.color};
`;

export const BannerLocation = styled.p`
  font-family: ${darkTheme1.styles.BannerLocation.fontFamily};
  font-weight: ${darkTheme1.styles.BannerLocation.fontWeight};
  font-size: ${darkTheme1.styles.BannerLocation.fontSize};
  line-height: ${darkTheme1.styles.BannerLocation.lineHeight};
  letter-spacing: ${darkTheme1.styles.BannerLocation.letterSpacing};
  color: ${darkTheme1.styles.BannerLocation.color};
`;

export const BannerTitle = styled.h4`
  font-family: ${darkTheme1.styles.BannerTitle.fontFamily};
  font-weight: ${darkTheme1.styles.BannerTitle.fontWeight};
  font-size: ${darkTheme1.styles.BannerTitle.fontSize};
  line-height: ${darkTheme1.styles.BannerTitle.lineHeight};
  letter-spacing: ${darkTheme1.styles.BannerTitle.letterSpacing};
  color: ${darkTheme1.styles.BannerTitle.color};
`;

export const BannerName = styled.p`
  font-family: ${darkTheme1.styles.BannerName.fontFamily};
  font-weight: ${darkTheme1.styles.BannerName.fontWeight};
  font-size: ${darkTheme1.styles.BannerName.fontSize};
  line-height: ${darkTheme1.styles.BannerName.lineHeight};
  letter-spacing: ${darkTheme1.styles.BannerName.letterSpacing};
  color: ${darkTheme1.styles.BannerName.color};
`;

export const Footer = styled.div`
  display: ${darkTheme1.styles.Footer.display};
  justify-content: ${darkTheme1.styles.Footer.justifyContent};
  align-items: ${darkTheme1.styles.Footer.alignItems};
  width: ${darkTheme1.styles.Footer.width};
  height: ${darkTheme1.styles.Footer.height};
  background: ${darkTheme1.styles.Footer.background};
`;

export const FooterText = styled.div`
  display: ${darkTheme1.styles.FooterText.display};
  gap: ${darkTheme1.styles.FooterText.gap};
`;

export const FooterTextPart = styled.p`
  color: ${darkTheme1.styles.FooterTextPart.color};
  font-family: ${darkTheme1.styles.FooterTextPart.fontFamily};
  font-size: ${darkTheme1.styles.FooterTextPart.fontSize};
  line-height: ${darkTheme1.styles.FooterTextPart.lineHeight};
  
  &:last-child {
    font-weight: ${darkTheme1.styles.FooterTextPart.lastChild.fontWeight};
  }
`;

// import styled from 'styled-components';



// // Styled Components
// export const MainContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 32px;
//   background: ${({ theme }) => theme.colors.background || '#090909'};
//   min-height: 100vh;
//   width: 393px;
//   margin: 0 auto;
//   position: relative;
//     overflow-x: auto; /* або hidden, якщо хочете повністю приховати скролл */
//   width: 100%;
//   scrollbar-width: none; /* для Firefox */
//   &::-webkit-scrollbar {
//     display: none; /* для Chrome/Safari */
//   }

// `;

// export const ProfileSection = styled.div`
//   width: 100%;
//       max-width: 393px;
//   position: relative;
//   margin-bottom: 180px;
// `;

// export const ProfileCover = styled.div`
//   position: relative;
//   width: 100%;
//   height: 462px;
// border-radius: 0 0 24px 24px;
// height: 280px;
// `;

// export const CoverImage = styled.img`
//   position: absolute;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;

// `;

// export const ProfileCard = styled.div`
//   position: absolute;
//   top: 127px;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 345px;
//   padding: 40px 24px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 24px;
//   background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(31,31,31,0.7) 100%);
//   border: 1px solid ${({ theme }) => theme.colors.border || '#FFF'};
//   border-radius: 48px;
//   backdrop-filter: blur(10px);
//   margin : 0 auto;
//   border: none;

// `;
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// export const ProfileInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 16px;
// `;

// export const ProfileImage = styled.img`
//   border-radius: 40px;
//   width: 100px;
//   height: 100px;
//   object-fit: cover;
// `;

// export const ProfileName = styled.div`
//   display: flex;
//   gap: 12px;
//   font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
// `;

// export const NamePart = styled.p`
//   color: ${({ theme }) => theme.colors.textPrimary || '#FFF'};
//   font-size: 36px;
//   font-weight: 700;
//   line-height: 1.2;
// `;

// export const ProfileTitle = styled.p`
//   color: ${({ theme }) => theme.colors.textSecondary || 'rgba(255,255,255,0.7)'};
//   font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
//   font-size: 18px;
//   font-weight: 400;
//   line-height: 1.2;
// `;

// export const ActionButtons = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   width: 100%;
// `;

// export const ActionButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 8px;
//   width: 100%;
//   height: 48px;
//   padding: 8px 16px;
//   border: none;
//   border-radius: 12px;
//   cursor: pointer;
//   font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
//   font-size: 20px;
//   font-weight: 400;
//   line-height: 1.2;
//   color: #FFF;
  
//   &:first-child {
//     background: linear-gradient(100deg,hsl(112, 69.40%, 59.00%) 0%, #35792A 96.03%);
//   }
  
//   &:last-child {
//     background: linear-gradient(100deg, #4E7FDF 0%, #5864A3 96.03%);
//   }
// `;


// // Оновлені стилі
// export const VideoSection = styled.div`
//   position: relative;
//   border-radius: 16px;
//   width: 100%;
//   max-width: 345px;
//   height: 194px;
//   overflow: hidden;
//   background: #000;
//   margin-top: 32px;

//   .swiper {
//     width: 100%;
//     height: 100%;
//   }

//   .swiper-slide {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `;

// export const VideoContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;

//   video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     cursor: pointer;
//     &::-webkit-media-controls {
//       display: none !important;
//     }
//   }

//   video[controls]::-webkit-media-controls {
//     display: flex !important;
//   }
// `;

// // PlayButton залишається без змін
// interface PlayButtonProps {
//   $show: boolean;
// }

// export const PlayButton = styled.button<PlayButtonProps>`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   border: none;
//   border-radius: 24px;
//   width: 56px;
//   height: 56px;
//   backdrop-filter: blur(6px);
//   background: rgb(255, 255, 255);
//   cursor: pointer;
//   display: ${props => props.$show ? 'flex' : 'none'};
//   justify-content: center;
//   align-items: center;
//   z-index: 10;
//   transition: all 0.3s ease;

//   &:hover {
//     background: rgba(255, 255, 255, 0.3);
//   }
// `;


// export const SectionTitle = styled.p`
//   color: ${({ theme }) => theme.colors.textPrimary || '#FFF'};
//   font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
//   font-size: 36px;
//   font-weight: 700;
//   line-height: 1.2;
// `;

// export const Container = styled.div`
// width: 100%;
//     max-width: 393px;
// `;

// export const ArtItem = styled.div`
// border-radius: 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//     transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

//   &:hover {
//     background: rgba(39, 38, 40, 0.9);
//     transform: translateY(-2px);
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

//     &::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background: linear-gradient(
//         90deg,
//         rgba(255, 255, 255, 0) 0%,
//         rgba(255, 255, 255, 0.05) 50%,
//         rgba(255, 255, 255, 0) 100%
//       );
//       animation: shine 1.5s infinite;
//     }
//   }

//   &:active {
//     transform: translateY(0);
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   }

//   @keyframes shine {
//     0% {
//       transform: translateX(-100%);
//     }
//     100% {
//       transform: translateX(100%);
//     }
//   }

// `;

// export const ArtImage = styled.img`
//   border-radius: 26.667px;
//   width: 160px;
//   height: 160px;
//   object-fit: cover;
// `;

// export const ArtTitle = styled.p`
//   color: ${({ theme }) => theme.colors.textPrimary || '#FFF'};
//   font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
//   font-size: 18px;
//   font-weight: 400;
//   line-height: 1.2;
//  padding: 0 0 8px 8px;
// `;

// export const ArtPrice = styled.p`
//   color: ${({ theme }) => theme.colors.textPrimary || '#FFF'};
//   font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
//   font-size: 24px;
//   font-weight: 700;
//   line-height: 1.2;
//    padding: 0 0 8px 8px;
// `;

// export const SocialLinks = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
// `;

// export const SocialLink = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 12px 32px 12px 16px;
// max-width: 100%;
//   height: 64px;
//   border: 1px solid ${({ theme }) => theme.colors.borderSecondary || '#656565'};
//   background: rgba(39, 38, 40, 0.7);
//   border-radius: 16px;
//   cursor: pointer;
//   position: relative;
//   overflow: hidden;
//   gap: 10px;
//     max-width: 345px;
//   transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

//   &:hover {
//     background: rgba(39, 38, 40, 0.9);
//     transform: translateY(-2px);
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

//     &::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background: linear-gradient(
//         90deg,
//         rgba(255, 255, 255, 0) 0%,
//         rgba(255, 255, 255, 0.05) 50%,
//         rgba(255, 255, 255, 0) 100%
//       );
//       animation: shine 1.5s infinite;
//     }
//   }

//   &:active {
//     transform: translateY(0);
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   }

//   @keyframes shine {
//     0% {
//       transform: translateX(-100%);
//     }
//     100% {
//       transform: translateX(100%);
//     }
//   }
// `;

// export const SocialIcon = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   transition: transform 0.3s ease;

//   ${SocialLink}:hover & {
//     transform: translateX(4px);
//   }
// `;

// export const SocialText = styled.p`
//   color: ${({ theme }) => theme.colors.textSecondary || '#979797'};
//   font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
//   font-size: 24px;
//   font-weight: 400;
//   line-height: 1.2;
//   transition: color 0.3s ease, transform 0.3s ease;

//   ${SocialLink}:hover & {
//     color: ${({ theme }) => theme.colors.textPrimary || '#FFF'};
//     transform: scale(1.02);
//   }
// `;

// export const SocialArrow = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 32px;
//   width: 48px;
//   height: 32px;
//   background: rgba(255, 255, 255, 0.1);
//   transition: all 0.3s ease;

//   ${SocialLink}:hover & {
//     background: rgba(255, 255, 255, 0.2);
//     transform: translateX(4px);

//     svg {
//       transform: translateX(2px);
//     }
//   }

//   svg {
//     transition: transform 0.3s ease;
//   }
// `;

// export const PersonalBanner = styled.div`
//     position: relative; /* Додаємо для позиціонування псевдоелемента */
//     display: flex;
//     border-radius: 20px;
//     padding: 16px;
//     width: 345px;
//     height: 192px;
//     background: #fff;
//     backdrop-filter: blur(50px);
//     box-shadow: inset 0 1px 0 0 #fff;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: baseline;
//     overflow: hidden; /* Ховаємо виступаючі частини псевдоелемента */

//     &::after {
//         content: '';
//         position: absolute;
//         top: 0;
//         right: 0;
//         width: 50%; /* Займає половину батьківського компонента */
//         height: 100%;
//         background: linear-gradient(
//             318deg,
//             rgba(255, 0, 0, 0.85) 0%,
//             rgba(255, 0, 98, 0) 100%
//         );
//         filter: blur(20px); /* Робимо ефект розмиття */
//         z-index: 0; /* Поміщаємо під основний контент */
//     }
// `;

// /* Додамо z-index до всіх вмістих елементів, щоб вони були над плямою */
// export const BannerContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: baseline;
//     flex-wrap: wrap;
//     width: 100%;
//     z-index: 1;
// `;

// export const BannerContainer1 = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: baseline;
//     flex-wrap: wrap;
//     width: 100%;
//     z-index: 1;
// `;

// /* Решта стилів залишаються без змін */
// export const BannerItem = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: baseline;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     z-index: 1;
// `;

// export const DataContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-end;
//     z-index: 1;

//     p {
//         font-family: var(--font7);
//         font-weight: 700;
//         font-size: 20px;
//         line-height: 100%;
//         letter-spacing: 0.01em;
//         text-align: center;
//         color: #000;
//     }
//     span {
//         font-family: var(--font7);
//         font-weight: 400;
//         font-size: 11px;
//         line-height: 100%;
//         letter-spacing: 0.01em;
//         text-align: center;
//         color: #000;
//     }
// `;

// /* Інші стилі без змін */
// export const FreeEntrance = styled.p`
//     font-family: var(--font7);
//     font-weight: 500;
//     font-size: 11px;
//     line-height: 100%;
//     letter-spacing: 0.01em;
//     color: #000;
// `;

// export const BannerLocation = styled.p`
//     font-family: var(--font7);
//     font-weight: 700;
//     font-size: 13px;
//     line-height: 100%;
//     letter-spacing: 0.01em;
//     color: #000;
// `;

// export const BannerTitle = styled.h4`
//     font-family: var(--font16);
//     font-weight: 400;
//     font-size: 32px;
//     line-height: 100%;
//     letter-spacing: 0.01em;
//     color: #000;
// `;

// export const BannerName = styled.p`
//     font-family: var(--font7);
//     font-weight: 400;
//     font-size: 20px;
//     line-height: 100%;
//     letter-spacing: 0.01em;
//     color: #000;
// `;



// export const Footer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 51px;
//   background: #1E1E1F;
// `;



// export const FooterText = styled.div`
//   display: flex;
//   gap: 8px;
// `;

// export const FooterTextPart = styled.p`
//   color: ${({ theme }) => theme.colors.textPrimary || '#FFF'};
//   font-family: ${({ theme }) => theme.fonts.main || "'Abhaya Libre', sans-serif"};
//   font-size: 14px;
//   line-height: 1.2;
  
//   &:last-child {
//     font-weight: 700;
//   }
// `;