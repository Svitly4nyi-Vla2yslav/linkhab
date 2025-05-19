import {
  MainContainer,
  ProfileSection,
  ProfileCover,
  CoverImage,
  ProfileCard,
  ProfileInfo,
  ProfileImage,
  ProfileName,
  NamePart,
  ProfileTitle,
  ActionButtons,
  ActionButton,
  VideoSection,
  ArtItem,
  ArtImage,
  ArtTitle,
  ArtPrice,
  SocialLinks,
  SocialLink,
  SocialIcon,
  SocialText,
  SocialArrow,
  Footer,
  FooterText,
  FooterTextPart,
  PlayButton,
  Container,
  VideoContainer,
  PersonalBanner,
  BannerTitle,
  BannerName,
  BannerContainer,
  FreeEntrance,
  BannerLocation,
  BannerItem,
  DataContainer,
  BannerContainer1,
} from './ContainerWidget.styled';

import art from '../../assets/images/art-icon.png';
import art1 from '../../assets/images/art-icon1.png';
import Cover from '../../assets/images/Profile Cover.png';
import avatar from '../../assets/images/IMG.png';

import Loading from '../../assets/videos/PASSAGE_WEB_002.mp4';
import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import phone from '../../assets/icons/IconPhone.svg';
import mail from '../../assets/icons/IconMail.svg';
import play from '../../assets/icons/play-icon.svg';
import telegram from '../../assets/icons/telegram-icon.svg';
import arrow from '../../assets/icons/arrow-icon.svg';

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firabase';
import { ThemeProvider } from 'styled-components';

interface Artwork {
  id: number;
  image: string;
  title: string;
  price: string;
}

interface SocialLinkData {
  id: number;
  icon: JSX.Element;
  text: string;
  url: string;
}

interface VideoData {
  id: number;
  src: string;
  title: string;
}

export interface ThemeData {
  isDefault?: boolean;
  styles: {
    MainContainer?: any;
    ProfileSection?: any;
    ProfileCover?: any;
    ProfileCard?: any;
    ProfileInfo?: any;
    ProfileName?: any;
    NamePart?: any;
    ProfileTitle?: any;
    ActionButtons?: any;
    ActionButton?: any;
    VideoSection?: any;
    ArtItem?: React.CSSProperties;
    ArtTitle?: any;
    ArtPrice?: any;
    SocialLinks?: any;
    SocialLink?: React.CSSProperties;
    SocialIcon?: any;
    SocialText?: any;
    SocialArrow?: any;
    Footer?: any;
    FooterText?: any;
    FooterTextPart?: any;
    PlayButton?: any;
    Container?: any;
    VideoContainer?: any;
    PersonalBanner?: any;
    BannerTitle?: any;
    BannerName?: any;
    BannerContainer?: any;
    FreeEntrance?: any;
    BannerLocation?: any;
    BannerItem?: any;
    DataContainer?: any;
    BannerContainer1?: any;
    [key: string]: any;
  };
}

interface ProfileData {
  name: string;
  title: string;
  coverImage: string;
  avatar: string;
  phone?: string;
  email?: string;
}
interface ThemeStyles {
  [key: string]: React.CSSProperties;
}

const HomeDefaultDarkTheme: React.FC = () => {
  const [themeStyles, setThemeStyles] = useState<ThemeStyles>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Ініціалізація станів
  const [profileData] = useState({
    name: 'Olivia Baker',
    title: 'artist, sculptor, blogger',
    coverImage: Cover,
    avatar: avatar,
    phone: '+1234567890',
    email: 'olivia.baker@example.com',
  });

  const [videoData] = useState([
    { id: 1, src: Loading, title: 'Video 1' },
    { id: 2, src: Loading, title: 'Video 2' },
    { id: 3, src: Loading, title: 'Video 3' },
  ]);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingStates, setPlayingStates] = useState(
    videoData.map(() => false)
  );
  const [showControls, setShowControls] = useState(videoData.map(() => false));

  // Завантаження стилів з Firestore
  useEffect(() => {
    const loadTheme = async () => {
      try {
        setLoading(true);
        const docRef = doc(
          db,
          'users',
          'ur75Bs0wdLghWIqkYaHI',
          'themes',
          'Q0TD6P3NL0G5NGlM2ISt'
        );
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          throw new Error('Theme document not found');
        }

        const data = docSnap.data();
        if (!data?.dark_theme_1?.styles) {
          throw new Error('Invalid theme structure');
        }

        setThemeStyles(data.dark_theme_1.styles);
      } catch (err) {
        console.error('Failed to load theme:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadTheme();
  }, []);

  // Обробники подій
  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    const newPlayingStates = [...playingStates];
    if (newPlayingStates[index]) {
      video.pause();
    } else {
      video.play();
      setShowControls(prev => {
        const newControls = [...prev];
        newControls[index] = true;
        return newControls;
      });
    }
    newPlayingStates[index] = !newPlayingStates[index];
    setPlayingStates(newPlayingStates);
  };

  const handleEnded = (index: number) => {
    setPlayingStates(prev => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
    setShowControls(prev => {
      const newControls = [...prev];
      newControls[index] = false;
      return newControls;
    });
  };

  const handleCall = () =>
    window.open(`tel:${profileData.phone || '+1234567890'}`);
  const handleMessage = () =>
    window.open(
      profileData.email
        ? `mailto:${profileData.email}`
        : `sms:${profileData.phone || '+1234567890'}`
    );

  // Статичні дані
  const defaultArtworks = [
    { id: 1, image: art, title: 'Paint Flowers', price: '$380' },
    { id: 2, image: art1, title: 'Paint Face', price: '$9000' },
    { id: 3, image: art, title: 'Paint Face', price: '$9000' },
  ];

  const defaultSocialLinks = [
    {
      id: 1,
      icon: <img src={telegram} alt="Telegram" />,
      text: 'Olivabaker',
      url: 'https://telegram.me/olivabaker',
    },
    {
      id: 2,
      icon: <img src={telegram} alt="Telegram" />,
      text: 'OliviaBaker',
      url: 'https://facebook.com/oliviabaker',
    },
    {
      id: 3,
      icon: <img src={telegram} alt="Telegram" />,
      text: 'Olivia_B',
      url: 'https://youtube.com/olivia_b',
    },
  ];
  console.log('Theme styles:', themeStyles);
  if (loading) return <div>Loading styles from Firestore...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!Object.keys(themeStyles).length) return <div>No styles found</div>;
  return (
    <ThemeProvider theme={{ styles: themeStyles }}>
      <div style={themeStyles.MainContainer}>
        {/* Profile Section */}
        <div style={themeStyles.ProfileSection}>
          <div style={themeStyles.ProfileCover}>
            <img
              src={profileData.coverImage}
              alt="Profile Cover"
              style={themeStyles.CoverImage}
            />
            <div style={themeStyles.ProfileCard}>
              <div style={themeStyles.ProfileInfo}>
                <img
                  src={profileData.avatar}
                  alt="Profile"
                  style={themeStyles.ProfileImage}
                />
                <div style={themeStyles.ProfileName}>
                  {profileData.name.split(' ').map((part, i) => (
                    <span key={i} style={themeStyles.NamePart}>
                      {part}
                    </span>
                  ))}
                </div>
                <div style={themeStyles.ProfileTitle}>{profileData.title}</div>
              </div>

              <div style={themeStyles.ActionButtons}>
                <button
                  style={{
                    ...themeStyles.ActionButton,
                    ...themeStyles.ActionButtonCall,
                  }}
                  onClick={() => window.open(`tel:${profileData.phone}`)}
                >
                  <img src={phone} alt="Phone" style={{ marginRight: '8px' }} />
                  <span>Call</span>
                </button>

                <button
                  style={{
                    ...themeStyles.ActionButton,
                    ...themeStyles.ActionButtonMail,
                  }}
                  onClick={() => window.open(`mailto:${profileData.email}`)}
                >
                  <img src={mail} alt="Mail" style={{ marginRight: '8px' }} />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div style={themeStyles.VideoSection}>
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            freeMode
            style={themeStyles.SwiperStyle}
          >
            {videoData.map((video, i) => (
              <SwiperSlide key={video.id} style={themeStyles.SwiperSlideStyle}>
                <div style={themeStyles.VideoContainer}>
                  <video
                    ref={el => (videoRefs.current[i] = el)}
                    src={video.src}
                    onClick={() => togglePlay(i)}
                    onPause={() =>
                      setPlayingStates(prev => {
                        const newStates = [...prev];
                        newStates[i] = false;
                        return newStates;
                      })
                    }
                    onEnded={() => handleEnded(i)}
                    controls={showControls[i]}
                    style={themeStyles.Video}
                  />
                  <button
                    onClick={() => togglePlay(i)}
                    style={{
                      ...themeStyles.PlayButton,
                      display: playingStates[i] ? 'none' : 'flex',
                    }}
                    aria-label={playingStates[i] ? 'Pause' : 'Play'}
                  >
                    <img src={play} alt="Play" />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Artworks Section */}
        <div style={themeStyles.Container}>
          <Swiper
            slidesOffsetBefore={12}
            slidesOffsetAfter={12}
            spaceBetween={12}
            slidesPerView="auto"
            freeMode
          >
            {defaultArtworks.map(artwork => (
              <SwiperSlide key={artwork.id} style={{ width: 'auto' }}>
                <ArtItem $themeStyles={themeStyles}>
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    style={themeStyles.ArtImage}
                  />
                  <div style={themeStyles.ArtTitle}>{artwork.title}</div>
                  <div style={themeStyles.ArtPrice}>{artwork.price}</div>
                </ArtItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Social Links */}
        <div style={themeStyles.SocialLinks}>
          {defaultSocialLinks.map(link => (
            <SocialLink
              key={link.id}
              style={themeStyles.SocialLink}
              $themeStyles={themeStyles}
              onClick={() => window.open(link.url, '_blank')}
            >
              <div style={themeStyles.SocialIcon}>
                {link.icon}
                <span style={themeStyles.SocialText}>{link.text}</span>
              </div>
              <div style={themeStyles.SocialArrow}>
                <img src={arrow} alt="Arrow" />
              </div>
            </SocialLink>
          ))}
        </div>

        <div style={{ position: 'relative' }}>
          <PersonalBanner $themeStyles={themeStyles}>
            <div style={themeStyles.PersonalBanner}>
              <div style={themeStyles.BannerContainer}>
                <div style={themeStyles.BannerTitle}>NEW ARTS</div>
                <div style={themeStyles.BannerName}>{profileData.name}</div>
              </div>
              <div style={themeStyles.BannerContainer1}>
                <div style={themeStyles.BannerItem}>
                  <div style={themeStyles.FreeEntrance}>Free Entrance</div>
                  <div style={themeStyles.BannerLocation}>
                    Museum OF modern arts, New York
                  </div>
                </div>
                <div style={themeStyles.DataContainer}>
                  <p>20</p>
                  <span>July</span>
                </div>
              </div>
            </div>
          </PersonalBanner>
        </div>

        <div style={themeStyles.Footer}>
          <div style={themeStyles.FooterText}>
            <span style={themeStyles.FooterTextPart}>Create to</span>
            <span style={themeStyles.FooterTextPart}>Label</span>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomeDefaultDarkTheme;
