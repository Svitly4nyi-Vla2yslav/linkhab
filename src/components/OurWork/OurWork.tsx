import React, { useEffect, useState } from 'react';
import {
  IconContainerCard,
  IconContainerCard1,
  IconContainerCard2,
  IconContainerCard3, // Додано новий контейнер
  IconOne,
  IconSecond,
  IconThierd,
  IconFourth, // Додано нову іконку
  IconCreditServices,
  PhoneCreditServices,
  OurWorkText,
  OurWorkTitel,
  WorkCardText,
  WorkCardTitle,
  WorkCardWrapper,
  WorkShadowContainer,
  WorkWrapper,
  ImagesRow,
  WorkCardsWrapper,
} from './OurWork.styled';

import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive'; // Додано для медіа-запитів

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Project, getProjects, getCaseStudy, CaseStudy } from '../../firabase';
import { ProjectTranslation } from '@/@types/types';

const OurWork: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const { t, i18n } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 744px)' });

  const getCurrentLanguage = (): keyof ProjectTranslation => {
    const lang = i18n.language;
    return lang === 'en' || lang === 'ru' || lang === 'es' ? lang : 'en';
  };

  

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then(AOS => {
        AOS.init({
          duration: 1600,
          offset: 120,
          easing: 'ease-out-quad',
          once: false,
          mirror: true,
          disableMutationObserver: true,
          debounceDelay: 50,
          throttleDelay: 99,
          disable: function () {
            return window.innerWidth < 1024;
          },
        });
        AOS.refresh();
      });
    }
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [projectsData, caseStudyData] = await Promise.all([
          getProjects(),
          getCaseStudy(),
        ]);
        
        // Додамо логування для перевірки даних
        projectsData.forEach((project, index) => {
          // console.log(`Project ${index}:`, {
          //   id: project.id,
          //   title: project.title,
          //   hasSingleImage: project.imageUrl?.length === 1
          // });
        });
        
        setProjects(projectsData);
        setCaseStudy(caseStudyData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  const currentLanguage = getCurrentLanguage();

  const getLocalizedText = (
    translation: ProjectTranslation | undefined, 
    fallbackKey: string
  ): string => {
    if (!translation) {
      console.warn('Translation object is undefined');
      return t(fallbackKey);
    }
    
    const text = translation[currentLanguage];
    if (!text) {
      console.warn(`Missing translation for language ${currentLanguage}`, translation);
      return t(fallbackKey);
    }
    
    return text;
  };

  return (
    <Element name="case">
      <WorkWrapper>
        <OurWorkText data-aos="fade-right">
          {t('ourWork.sectionTitle')}
        </OurWorkText>
        <OurWorkTitel data-aos="fade-right">
          {t('ourWork.mainHeading')}
        </OurWorkTitel>

        <WorkCardsWrapper>
          {projects.map(project => (
            <WorkCardWrapper key={project.id}>
         <WorkCardTitle>
  {project.title 
    ? getLocalizedText(project.title, 'ourWork.defaults.noTitle')
    : 'Title is missing'}
</WorkCardTitle>

              {project.client && (
                <WorkCardText>
                  {t('ourWork.clientLabel')}:{' '}
                  {getLocalizedText(project.client, '')}
                </WorkCardText>
              )}

              <WorkCardText>
                {getLocalizedText(project.description, 'ourWork.defaults.noDescription')}
              </WorkCardText>
              {project.imageUrl && project.imageUrl.length === 1 && (
                <WorkShadowContainer
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <IconCreditServices>
                    <PhoneCreditServices
                      src={project.imageUrl[0]}
                      alt={t('ourWork.imageAlt')}
                      onError={e => {
                        console.error(
                          t('ourWork.errors.imageLoad', {
                            url: project.imageUrl?.[0],
                          })
                        );
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </IconCreditServices>
                </WorkShadowContainer>
              )}

              {project.imageUrl && project.imageUrl.length > 1 && (
                <WorkShadowContainer
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <ImagesRow>
                    {project.imageUrl[0] && (
                      <IconContainerCard>
                        <IconOne
                          src={project.imageUrl[0]}
                          alt={t('ourWork.imageAlt')}
                        />
                      </IconContainerCard>
                    )}
                    {project.imageUrl[1] && (
                      <IconContainerCard1>
                        <IconSecond
                          src={project.imageUrl[1]}
                          alt={t('ourWork.imageAlt')}
                        />
                      </IconContainerCard1>
                    )}
                    {project.imageUrl[2] && (
                      <IconContainerCard2>
                        <IconThierd
                          src={project.imageUrl[2]}
                          alt={t('ourWork.imageAlt')}
                        />
                      </IconContainerCard2>
                    )}
                    {isDesktop && project.imageUrl[3] && (
                      <IconContainerCard3>
                        <IconFourth
                          src={project.imageUrl[3]}
                          alt={t('ourWork.imageAlt')}
                        />
                      </IconContainerCard3>
                    )}
                  </ImagesRow>
                </WorkShadowContainer>
              )}
            </WorkCardWrapper>
          ))}
        </WorkCardsWrapper>

        {caseStudy && (
          <WorkCardWrapper>
            <WorkCardTitle>
              {getLocalizedText(caseStudy.title, 'ourWork.defaults.caseStudyTitle')}
            </WorkCardTitle>
            <WorkCardText>
              {getLocalizedText(caseStudy.content, 'ourWork.defaults.noDescription')}
            </WorkCardText>
          </WorkCardWrapper>
        )}
      </WorkWrapper>
    </Element>
  );
};

export default OurWork;
