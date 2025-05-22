import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firabase';
import styled from 'styled-components';
import { ThemeData } from '../ContainerWidget/HomeDefaultDarkTheme';
import { DEFAULT_THEME } from '../ContainerWidget/theme';

const ThemeSwitcherContainer = styled.div`
  width: 420px;
  margin: 0 auto;
  padding: 0 16px;
  margin-bottom: 24px;
`;

const ThemeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const ThemeTitle = styled.span`
  color:rgb(0, 0, 0);
  font-size: 20px;
  font-weight: 500;
`;

const ThemeItem = styled.div<{ $isActive: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;
  border: ${({ $isActive }) =>
    $isActive ? '2px solid #4E7FDF' : '1px solid rgba(255, 255, 255, 0.2)'};
  box-shadow: ${({ $isActive }) =>
    $isActive ? '0 0 0 2px rgba(78, 127, 223, 0.3)' : 'none'};

  &:hover {
    transform: scale(1.05);
  }
`;

const ThemeItemContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 6px;
`;

const ThemePreview = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 12px;
  margin-top: 16px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;



// Локальні теми
const LOCAL_THEMES: Record<string, ThemeData> = {
  default_theme: DEFAULT_THEME,
  light_theme: {
    isDefault: false,
    styles: {
      MainContainer: { background: '#FFFFFF' },
      ProfileSection: { background: '#F5F5F5' },
      PersonalBanner: {
        background: 'linear-gradient(180deg, #4E7FDF, #62DF4E)',
      },
      ProfileCover: {},
      ProfileCard: {},
      ProfileInfo: {},
      ProfileName: {},
      ProfileDescription: {},
      ProfileAvatar: {},
      ProfileLinks: {},
      ProfileLink: {},
      ProfileLinkIcon: {},
      ProfileLinkText: {},
      ProfileLinkArrow: {},
      ProfileLinkDivider: {},
      ProfileLinkContainer: {},
      ProfileLinkContent: {},
      ProfileLinkBadge: {},
      ProfileLinkBadgeText: {},
      ProfileLinkBadgeIcon: {},
      ProfileLinkBadgeContainer: {},
      ProfileLinkBadgeContent: {},
      BannerContainer1: {},
      BannerContainer2: {},
      BannerContainer3: {},
      BannerContainer4: {},
      BannerContainer5: {},
      BannerContainer6: {},
      BannerContainer7: {},
      BannerContainer8: {},
      BannerContainer9: {},
      BannerContainer10: {},
      BannerContainer11: {},
      BannerContainer12: {},
      BannerContainer13: {},
      BannerContainer14: {},
      BannerContainer15: {},
      BannerContainer16: {},
      BannerContainer17: {},
      BannerContainer18: {},
      BannerContainer19: {},
      BannerContainer20: {},
      NamePart: {},
      ProfileTitle: {},
      ActionButtons: {},
      ActionButton: {},
      VideoSection: {},
      ArtItem: {},
      ArtTitle: {},
      ArtPrice: {},
      SocialLinks: {},
      SocialLink: {},
      SocialIcon: {},
      SocialText: {},
      SocialArrow: {},
      Footer: {},
      FooterText: {},
      FooterTextPart: {},
      PlayButton: {},
      Container: {},
      VideoContainer: {},
      BannerTitle: {},
      BannerName: {},
      BannerContainer: {},
      FreeEntrance: {},
      BannerLocation: {},
      BannerItem: {},
      DataContainer: {}
    },
  },
  blue_theme: {
    isDefault: false,
    styles: {
      MainContainer: { background: '#1A1A2E' },
      ProfileSection: { background: '#16213E' },
      PersonalBanner: {
        background: 'linear-gradient(180deg, #00D2FF, #3A7BD5)',
      },
      ProfileCover: {},
      ProfileCard: {},
      ProfileInfo: {},
      ProfileName: {},
      ProfileDescription: {},
      ProfileAvatar: {},
      ProfileLinks: {},
      ProfileLink: {},
      ProfileLinkIcon: {},
      ProfileLinkText: {},
      ProfileLinkArrow: {},
      ProfileLinkDivider: {},
      ProfileLinkContainer: {},
      ProfileLinkContent: {},
      ProfileLinkBadge: {},
      ProfileLinkBadgeText: {},
      ProfileLinkBadgeIcon: {},
      ProfileLinkBadgeContainer: {},
      ProfileLinkBadgeContent: {},
      BannerContainer1: {},
      BannerContainer2: {},
      BannerContainer3: {},
      BannerContainer4: {},
      BannerContainer5: {},
      BannerContainer6: {},
      BannerContainer7: {},
      BannerContainer8: {},
      BannerContainer9: {},
      BannerContainer10: {},
      BannerContainer11: {},
      BannerContainer12: {},
      BannerContainer13: {},
      BannerContainer14: {},
      BannerContainer15: {},
      BannerContainer16: {},
      BannerContainer17: {},
      BannerContainer18: {},
      BannerContainer19: {},
      BannerContainer20: {},
      NamePart: {},
      ProfileTitle: {},
      ActionButtons: {},
      ActionButton: {},
      VideoSection: {},
      ArtItem: {},
      ArtTitle: {},
      ArtPrice: {},
      SocialLinks: {},
      SocialLink: {},
      SocialIcon: {},
      SocialText: {},
      SocialArrow: {},
      Footer: {},
      FooterText: {},
      FooterTextPart: {},
      PlayButton: {},
      Container: {},
      VideoContainer: {},
      BannerTitle: {},
      BannerName: {},
      BannerContainer: {},
      FreeEntrance: {},
      BannerLocation: {},
      BannerItem: {},
      DataContainer: {}
    },
  },
  purple_theme: {
    isDefault: false,
    styles: {
      MainContainer: { background: '#1E0F33' },
      ProfileSection: { background: '#2A1B47' },
      PersonalBanner: {
        background: 'linear-gradient(180deg, #9C27B0, #673AB7)',
      },
      ProfileCover: {},
      ProfileCard: {},
      ProfileInfo: {},
      ProfileName: {},
      ProfileDescription: {},
      ProfileAvatar: {},
      ProfileLinks: {},
      ProfileLink: {},
      ProfileLinkIcon: {},
      ProfileLinkText: {},
      ProfileLinkArrow: {},
      ProfileLinkDivider: {},
      ProfileLinkContainer: {},
      ProfileLinkContent: {},
      ProfileLinkBadge: {},
      ProfileLinkBadgeText: {},
      ProfileLinkBadgeIcon: {},
      ProfileLinkBadgeContainer: {},
      ProfileLinkBadgeContent: {},
      BannerContainer1: {},
      BannerContainer2: {},
      BannerContainer3: {},
      BannerContainer4: {},
      BannerContainer5: {},
      BannerContainer6: {},
      BannerContainer7: {},
      BannerContainer8: {},
      BannerContainer9: {},
      BannerContainer10: {},
      BannerContainer11: {},
      BannerContainer12: {},
      BannerContainer13: {},
      BannerContainer14: {},
      BannerContainer15: {},
      BannerContainer16: {},
      BannerContainer17: {},
      BannerContainer18: {},
      BannerContainer19: {},
      BannerContainer20: {},
      NamePart: {},
      ProfileTitle: {},
      ActionButtons: {},
      ActionButton: {},
      VideoSection: {},
      ArtItem: {},
      ArtTitle: {},
      ArtPrice: {},
      SocialLinks: {},
      SocialLink: {},
      SocialIcon: {},
      SocialText: {},
      SocialArrow: {},
      Footer: {},
      FooterText: {},
      FooterTextPart: {},
      PlayButton: {},
      Container: {},
      VideoContainer: {},
      BannerTitle: {},
      BannerName: {},
      BannerContainer: {},
      FreeEntrance: {},
      BannerLocation: {},
      BannerItem: {},
      DataContainer: {}
    },
  },
};

interface ThemeSwitcherProps {
  onThemeChange: (theme: ThemeData) => void;
  currentTheme: ThemeData;
}

export const ThemeSwitcher = ({
  onThemeChange,
  currentTheme,
}: ThemeSwitcherProps) => {
  const [themes, setThemes] = useState<Record<string, ThemeData>>(LOCAL_THEMES);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Додаємо дефолтну тему, якщо її немає
    if (!themes.default_theme) {
      setThemes(prev => ({ default_theme: DEFAULT_THEME, ...prev }));
    }

    // Знаходимо індекс активної теми
    const themeEntries = Object.entries(themes);
    const foundIndex = themeEntries.findIndex(
      ([_, theme]) =>
        JSON.stringify(theme.styles) === JSON.stringify(currentTheme.styles)
    );

    setActiveIndex(foundIndex >= 0 ? foundIndex : 0);
  }, [currentTheme, themes]);

  const handleThemeSelect = (
    themeName: string,
    themeData: ThemeData,
    index: number
  ) => {
    setActiveIndex(index);
    onThemeChange({
      isDefault: themeData.isDefault,
      styles: themeData.styles,
    });
  };

  return (
    <ThemeSwitcherContainer>
      <ThemeHeader>
        <ThemeTitle>Theme</ThemeTitle>
      </ThemeHeader>

      <Swiper
        modules={[FreeMode]}
        spaceBetween={8}
        slidesPerView="auto"
        freeMode={true}
        initialSlide={activeIndex}
      >
        {Object.entries(themes).map(([themeName, themeData], index) => (
          <SwiperSlide key={themeName} style={{ width: 'auto' }}>
            <ThemeItem
              $isActive={index === activeIndex}
              style={{ background: themeData.styles.MainContainer?.background }}
              onClick={() => handleThemeSelect(themeName, themeData, index)}
            >
              <ThemeItemContent
                style={{
                  background: themeData.styles.PersonalBanner?.background,
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  }}
                />
              </ThemeItemContent>
            </ThemeItem>
          </SwiperSlide>
        ))}
      </Swiper>

      <ThemePreview
        style={{
          background:
            Object.values(themes)[activeIndex]?.styles.MainContainer
              ?.background,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            right: '20px',
            height: '40px',
            borderRadius: '8px',
            background:
              Object.values(themes)[activeIndex]?.styles.ProfileSection
                ?.background,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            height: '60px',
            borderRadius: '8px',
            background:
              Object.values(themes)[activeIndex]?.styles.PersonalBanner
                ?.background,
          }}
        />
      </ThemePreview>
    </ThemeSwitcherContainer>
  );
};
