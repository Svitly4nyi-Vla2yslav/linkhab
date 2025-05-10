import { useTheme } from 'styled-components';
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
import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import phone from '../../assets/icons/IconPhone.svg';
import mail from '../../assets/icons/IconMail.svg';
import play from '../../assets/icons/play-icon.svg';
import telegram from '../../assets/icons/telegram-icon.svg';
import arrow from '../../assets/icons/arrow-icon.svg';

interface Artwork {
  id: number;
  image: string;
  title: string;
  price: string;
}
const videoData = [
  {
    id: 1,
    src: Loading,
    title: 'Video 1',
  },
  {
    id: 2,
    src: Loading,
    title: 'Video 2',
  },
  {
    id: 3,
    src: Loading,
    title: 'Video 3',
  },
];

const HomeDefaultDarkTheme: React.FC = () => {
  const { theme } = useTheme();

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingStates, setPlayingStates] = useState<boolean[]>(
    videoData.map(() => false)
  );
  const [showControls, setShowControls] = useState<boolean[]>(
    videoData.map(() => false)
  );

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    const newPlayingStates = [...playingStates];
    const newShowControls = [...showControls];

    if (newPlayingStates[index]) {
      video.pause();
    } else {
      video.play();
      newShowControls[index] = true;
    }

    newPlayingStates[index] = !newPlayingStates[index];
    setPlayingStates(newPlayingStates);
    setShowControls(newShowControls);
  };

  const handleEnded = (index: number) => {
    const newPlayingStates = [...playingStates];
    const newShowControls = [...showControls];

    newPlayingStates[index] = false;
    newShowControls[index] = false;

    setPlayingStates(newPlayingStates);
    setShowControls(newShowControls);
  };

  const artworks: Artwork[] = [
    {
      id: 1,
      image: art,
      title: 'Paint Flowers',
      price: '$380',
    },
    {
      id: 2,
      image: art1,
      title: 'Paint Face',
      price: '$9000',
    },
    {
      id: 3,
      image: art,
      title: 'Paint Face',
      price: '$9000',
    },
  ];

  interface SocialLinkData {
    id: number;
    icon: JSX.Element;
    text: string;
    url: string;
  }

  const socialLinksData: SocialLinkData[] = [
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

  const handleCall = () => {
    window.open('tel:+1234567890'); // Відкриває дзвінок
  };

  const handleMessage = () => {
    window.open('sms:+1234567890'); // Відкриває SMS
  };
  return (
    <MainContainer theme={theme}>
      <ProfileSection theme={theme}>
        <ProfileCover theme={theme}>
          <CoverImage src={Cover} alt="Profile Cover" />
          <ProfileCard theme={theme}>
            <ProfileInfo theme={theme}>
              <ProfileImage src={avatar} alt="Profile" />
              <ProfileName theme={theme}>
                <NamePart theme={theme}>Olivia</NamePart>
                <NamePart theme={theme}>Baker</NamePart>
              </ProfileName>
              <ProfileTitle theme={theme}>
                artist, sculptor, blogger
              </ProfileTitle>
            </ProfileInfo>

            <ActionButtons theme={theme}>
              <ActionButton theme={theme} onClick={handleCall}>
                <img src={phone} alt="Phone" />
                <span>Call</span>
              </ActionButton>

              <ActionButton theme={theme} onClick={handleMessage}>
                <img src={mail} alt="Mail" />
                <span>Send</span>
              </ActionButton>
            </ActionButtons>
          </ProfileCard>
        </ProfileCover>
      </ProfileSection>

      <VideoSection>
        <Swiper spaceBetween={20} slidesPerView={'auto'} freeMode={true}>
          {videoData.map((video, index) => (
            <SwiperSlide key={video.id}>
              <VideoContainer>
                <video
                  ref={el => (videoRefs.current[index] = el)}
                  src={video.src}
                  onClick={() => togglePlay(index)}
                  onPause={() => {
                    const newStates = [...playingStates];
                    newStates[index] = false;
                    setPlayingStates(newStates);
                  }}
                  onEnded={() => handleEnded(index)}
                  controls={showControls[index]}
                />
                <PlayButton
                  onClick={() => togglePlay(index)}
                  $show={!playingStates[index]}
                  aria-label={
                    playingStates[index] ? 'Pause video' : 'Play video'
                  }
                >
                  <img src={play} alt="⏯️" />
                </PlayButton>
              </VideoContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </VideoSection>

      <Container>
        <Swiper
          slidesOffsetBefore={12} // Відступ перед першим слайдом
          slidesOffsetAfter={12}
          spaceBetween={12}
          slidesPerView={'auto'}
          freeMode={true}
        >
          {artworks.map(artwork => (
            <SwiperSlide key={artwork.id} style={{ width: 'auto' }}>
              <ArtItem>
                <ArtImage src={artwork.image} alt={artwork.title} />
                <ArtTitle theme={theme}>{artwork.title}</ArtTitle>
                <ArtPrice theme={theme}>{artwork.price}</ArtPrice>
              </ArtItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <SocialLinks>
        {socialLinksData.map(link => (
          <SocialLink
            key={link.id}
            theme={theme}
            onClick={() => window.open(link.url, '_blank')}
          >
            <SocialIcon>
              {link.icon}
              <SocialText theme={theme}>{link.text}</SocialText>
            </SocialIcon>
            <SocialArrow>
              <img src={arrow} alt="➡️" />
            </SocialArrow>
          </SocialLink>
        ))}
      </SocialLinks>

      <PersonalBanner>
        <BannerContainer>
          <BannerTitle>NEW ARTS</BannerTitle>
          <BannerName>Olivia Baker</BannerName>
        </BannerContainer>
        <BannerContainer1>
          <BannerItem>
            <FreeEntrance>Free Entrance</FreeEntrance>
            <BannerLocation>Museum OF modern arts, New York</BannerLocation>
          </BannerItem>{' '}
          <DataContainer>
            <p>20</p>
            <span>July</span>
          </DataContainer>
        </BannerContainer1>
      </PersonalBanner>

      <Footer>
        <FooterText>
          <FooterTextPart theme={theme}>Create to</FooterTextPart>
          <FooterTextPart theme={theme}>Label</FooterTextPart>
        </FooterText>
      </Footer>
    </MainContainer>
  );
};

export default HomeDefaultDarkTheme;
