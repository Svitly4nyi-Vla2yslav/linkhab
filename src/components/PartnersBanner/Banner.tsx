import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Border, Image, SwiperContainer } from './Partners.styled';
import 'swiper/css/bundle';

import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

import WarnerBros from '../../assets/icons/partners/warner_bros.svg';
import partner2 from '../../assets/icons/partners/Partner2.svg';
import partner3 from '../../assets/icons/partners/partner3.svg';
import partner4 from '../../assets/icons/partners/partner4.svg';
import partner5 from '../../assets/icons/partners/partner5.svg';
import partner6 from '../../assets/icons/partners/partner6.svg';

const slides = [
  {
    id: 1,
    imageUrl: WarnerBros,
  },
  {
    id: 2,
    imageUrl: partner2,
  },
  {
    id: 3,
    imageUrl: partner3,
  },
  {
    id: 4,
    imageUrl: partner4,
  },
  {
    id: 5,
    imageUrl: partner5,
  },
  {
    id: 6,
    imageUrl: partner6,
  },
  {
    id: 7,
    imageUrl: WarnerBros,
  },
  {
    id: 8,
    imageUrl: partner2,
  },
  {
    id: 9,
    imageUrl: partner3,
  },
];

const Partners: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 743px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1023px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const slidesPerView = isMobile ? 2 : isTablet ? 4 : isDesktop ? 7 : 7;
  
  return (
    <SwiperContainer>
   <Border/>
      <Swiper
        loop={true}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        navigation={false}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        pagination={false}
        grabCursor={true}
        speed={4000}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {Array.from({ length: 2 }).map((_, i) =>
          slides.map(slide => (
            <SwiperSlide
              key={`${slide.id}-${i}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                fontSize: 36,
                paddingTop: 10,
              }}
            >
              <Image
                loading="lazy"
                src={slide.imageUrl}
                alt={`Slide ${slide.id}`}
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>

      {/* Другий слайдер - відображається тільки на мобільних */}
      {isMobile && (
        <Swiper
          loop={true}
          slidesPerView={slidesPerView}
          spaceBetween={20}
          navigation={false}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          pagination={false}
          grabCursor={true}
          speed={4000}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {Array.from({ length: 2 }).map((_, i) =>
            slides.map(slide => (
              <SwiperSlide
                key={`${slide.id}-${i}-reverse`}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '10vh',
                  fontSize: 36,
                  paddingBottom: 10,
                }}
              >
                <Image
                  loading="lazy"
                  src={slide.imageUrl}
                  alt={`Slide ${slide.id}`}
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      )}
    </SwiperContainer>
  );
};

export default Partners;