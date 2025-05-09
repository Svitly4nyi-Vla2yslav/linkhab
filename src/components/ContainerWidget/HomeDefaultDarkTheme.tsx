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
  SectionTitle,
  ArtGallery,
  ArtItem,
  ArtImage,
  ArtTitle,
  ArtPrice,
  SocialLinks,
  SocialLink,
  SocialIcon,
  SocialText,
  SocialArrow,
  PersonalBanner,
  Footer,
  FooterText,
  FooterTextPart,
  Divider,
  PlayButton,
  Container,
  VideoContainer,
} from './ContainerWidget.styled';

import art from '../../assets/images/art-icon.png';
import art1 from '../../assets/images/art-icon1.png';
import Cover from '../../assets/images/Profile Cover.png';
import avatar from '../../assets/images/IMG.png';

import Loading from '../../assets/videos/PASSAGE_WEB_002.mp4';
import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

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
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M19.9997 3.33333C10.7997 3.33333 3.33301 10.8 3.33301 20C3.33301 29.2 10.7997 36.6667 19.9997 36.6667C29.1997 36.6667 36.6663 29.2 36.6663 20C36.6663 10.8 29.1997 3.33333 19.9997 3.33333ZM27.733 14.6667C27.483 17.3 26.3997 23.7 25.8497 26.65C25.6163 27.9 25.1497 28.3167 24.7163 28.3667C23.7497 28.45 23.0163 27.7333 22.083 27.1167C20.6163 26.15 19.783 25.55 18.3663 24.6167C16.7163 23.5333 17.783 22.9333 18.733 21.9667C18.983 21.7167 23.2497 17.8333 23.333 17.4833C23.3446 17.4303 23.343 17.3753 23.3285 17.323C23.314 17.2707 23.2869 17.2228 23.2497 17.1833C23.1497 17.1 23.0163 17.1333 22.8997 17.15C22.7497 17.1833 20.4163 18.7333 15.8663 21.8C15.1997 22.25 14.5997 22.4833 14.0663 22.4667C13.4663 22.45 12.333 22.1333 11.483 21.85C10.433 21.5167 9.61634 21.3333 9.68301 20.75C9.71634 20.45 10.133 20.15 10.9163 19.8333C15.783 17.7167 19.0163 16.3167 20.633 15.65C25.2663 13.7167 26.2163 13.3833 26.8497 13.3833C26.983 13.3833 27.2997 13.4167 27.4997 13.5833C27.6663 13.7167 27.7163 13.9 27.733 14.0333C27.7163 14.1333 27.7497 14.4333 27.733 14.6667Z"
            fill="white"
            fillOpacity="0.7"
          />
        </svg>
      ),
      text: 'Olivabaker',
      url: 'https://telegram.me/olivabaker',
    },
    {
      id: 2,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M19.9997 3.33333C10.7997 3.33333 3.33301 10.8 3.33301 20C3.33301 29.2 10.7997 36.6667 19.9997 36.6667C29.1997 36.6667 36.6663 29.2 36.6663 20C36.6663 10.8 29.1997 3.33333 19.9997 3.33333ZM27.733 14.6667C27.483 17.3 26.3997 23.7 25.8497 26.65C25.6163 27.9 25.1497 28.3167 24.7163 28.3667C23.7497 28.45 23.0163 27.7333 22.083 27.1167C20.6163 26.15 19.783 25.55 18.3663 24.6167C16.7163 23.5333 17.783 22.9333 18.733 21.9667C18.983 21.7167 23.2497 17.8333 23.333 17.4833C23.3446 17.4303 23.343 17.3753 23.3285 17.323C23.314 17.2707 23.2869 17.2228 23.2497 17.1833C23.1497 17.1 23.0163 17.1333 22.8997 17.15C22.7497 17.1833 20.4163 18.7333 15.8663 21.8C15.1997 22.25 14.5997 22.4833 14.0663 22.4667C13.4663 22.45 12.333 22.1333 11.483 21.85C10.433 21.5167 9.61634 21.3333 9.68301 20.75C9.71634 20.45 10.133 20.15 10.9163 19.8333C15.783 17.7167 19.0163 16.3167 20.633 15.65C25.2663 13.7167 26.2163 13.3833 26.8497 13.3833C26.983 13.3833 27.2997 13.4167 27.4997 13.5833C27.6663 13.7167 27.7163 13.9 27.733 14.0333C27.7163 14.1333 27.7497 14.4333 27.733 14.6667Z"
            fill="white"
            fillOpacity="0.7"
          />
        </svg>
      ),
      text: 'OliviaBaker',
      url: 'https://facebook.com/oliviabaker',
    },
    {
      id: 3,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M19.9997 3.33333C10.7997 3.33333 3.33301 10.8 3.33301 20C3.33301 29.2 10.7997 36.6667 19.9997 36.6667C29.1997 36.6667 36.6663 29.2 36.6663 20C36.6663 10.8 29.1997 3.33333 19.9997 3.33333ZM27.733 14.6667C27.483 17.3 26.3997 23.7 25.8497 26.65C25.6163 27.9 25.1497 28.3167 24.7163 28.3667C23.7497 28.45 23.0163 27.7333 22.083 27.1167C20.6163 26.15 19.783 25.55 18.3663 24.6167C16.7163 23.5333 17.783 22.9333 18.733 21.9667C18.983 21.7167 23.2497 17.8333 23.333 17.4833C23.3446 17.4303 23.343 17.3753 23.3285 17.323C23.314 17.2707 23.2869 17.2228 23.2497 17.1833C23.1497 17.1 23.0163 17.1333 22.8997 17.15C22.7497 17.1833 20.4163 18.7333 15.8663 21.8C15.1997 22.25 14.5997 22.4833 14.0663 22.4667C13.4663 22.45 12.333 22.1333 11.483 21.85C10.433 21.5167 9.61634 21.3333 9.68301 20.75C9.71634 20.45 10.133 20.15 10.9163 19.8333C15.783 17.7167 19.0163 16.3167 20.633 15.65C25.2663 13.7167 26.2163 13.3833 26.8497 13.3833C26.983 13.3833 27.2997 13.4167 27.4997 13.5833C27.6663 13.7167 27.7163 13.9 27.733 14.0333C27.7163 14.1333 27.7497 14.4333 27.733 14.6667Z"
            fill="white"
            fillOpacity="0.7"
          />
        </svg>
      ),
      text: 'Olivia_B',
      url: 'https://youtube.com/olivia_b',
    },
  ];

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
              <ActionButton theme={theme}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path
                    d="M20.76 15.38C19.53 15.38 18.34 15.18 17.23 14.82C17.0561 14.7611 16.8691 14.7523 16.6905 14.7948C16.5118 14.8372 16.3488 14.9291 16.22 15.06L14.65 17.03C11.82 15.68 9.17 13.13 7.76 10.2L9.71 8.54C9.98 8.26 10.06 7.87 9.95 7.52C9.58 6.41 9.39 5.22 9.39 3.99C9.39 3.45 8.94 3 8.4 3H4.94C4.4 3 3.75 3.24 3.75 3.99C3.75 13.28 11.48 21 20.76 21C21.47 21 21.75 20.37 21.75 19.82V16.37C21.75 15.83 21.3 15.38 20.76 15.38Z"
                    fill="white"
                  />
                </svg>
                <span>Call</span>
              </ActionButton>

              <ActionButton theme={theme}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path
                    d="M4.75 20C4.2 20 3.72933 19.8043 3.338 19.413C2.94667 19.0217 2.75067 18.5507 2.75 18V6C2.75 5.45 2.946 4.97933 3.338 4.588C3.73 4.19667 4.20067 4.00067 4.75 4H20.75C21.3 4 21.771 4.196 22.163 4.588C22.555 4.98 22.7507 5.45067 22.75 6V18C22.75 18.55 22.5543 19.021 22.163 19.413C21.7717 19.805 21.3007 20.0007 20.75 20H4.75ZM12.75 13L20.75 8V6L12.75 11L4.75 6V8L12.75 13Z"
                    fill="white"
                  />
                </svg>
                <span>Send</span>
              </ActionButton>
            </ActionButtons>
          </ProfileCard>
        </ProfileCover>
      </ProfileSection>

      <VideoSection>
        <Swiper
          spaceBetween={20}
          slidesPerView={'auto'}
          freeMode={true}
        >
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
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2039_4933)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M29.512 20.328C32.842 18.404 32.842 13.596 29.512 11.67L12.502 1.83601C9.17 -0.0899932 5 2.31601 5 6.16601V25.834C5 29.684 9.17 32.09 12.502 30.162L29.512 20.328Z"
                        fill="white"
                      />
                    </g>
                  </svg>
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 12L13 18M19 12L13 6M19 12L5 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SocialArrow>
          </SocialLink>
        ))}
      </SocialLinks>

      <PersonalBanner src="/PersonalBanner.png" alt="Personal Banner" />

      <Footer>
        <FooterText>
          <FooterTextPart theme={theme}>Create to</FooterTextPart>
          <FooterTextPart theme={theme}>Label</FooterTextPart>
        </FooterText>
      </Footer>

      <Divider />
    </MainContainer>
  );
};

export default HomeDefaultDarkTheme;
