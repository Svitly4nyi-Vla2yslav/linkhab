import React, { useEffect } from 'react';
import {
  AboutCardContainer,
  AboutTitle,
  AboutWrapper,
  AllProjectsSpann,
  AllProjectsSpannGray,
  AllProjectsText,
  AllProjectsTitle,
  CompleteContainer,
  CompleteText,
  ComprehensiveContainer,
  ComprehensiveText,
  ComprehensiveTitle,
  ComputerIcon,
  ContainerProjects,
  ContainerTabl,
  DataContainer,
  DataContainerText,
  DataText,
  DeleteIcon,
  DeleteIconBox,
  Div,
  DivProjects,
  DollarIcon,
  DollarSpan,
  EditorIcon,
  GrafikIcon,
  GrafikIconRed,
  GrafikWrapp,
  IconContainer,
  IconTabl,
  IconWarning,
  ListIcon,
  MyToDoBoxContainer,
  MyToDoHeaderContainer,
  MyToDoItems,
  MyToDoItemsContainer,
  MyToDoItemsTitel,
  MyToDoListBoxCheck,
  PointIcon,
  PriseText,
  ProgressBar,
  ProgressBarContainer,
  ProjectsOverviewContainer,
  ProjectsOverviewSpan,
  ProjectsOverviewSpanContainer,
  ProjectsOverviewSpanRed,
  ProjectsOverviewText,
  ProjectsOverviewTextContainer,
  ProzentIcon,
  ProzentIconContainer,
  ProzentText,
  ShadowContainer,
  TaskText,
  TextAboutUs,
  ToDoContainer,
  TotalDepositContainer,
  TotalDepositText,
  WarningOrangContainer,
  WarningOrangText,
  WriteOrangeBox,
} from './About.styled';
import Comp from '../../assets/icons/about/compIcon.svg';
import { PriseContainer } from './About.styled';
import $ from '../../assets/icons/about/$-icon.svg';
import Graf from '../../assets/icons/about/depositGrafik.svg';
import Prozent from '../../assets/icons/about/prozent-icon.svg';
import Grafik from '../../assets/icons/about/grafik1.svg';
import List from '../../assets/icons/about/listIcon.svg';
import Tabl from '../../assets/icons/about/projects-tabl.svg';
import Warn from '../../assets/icons/about/WarningIcon.svg';
import Point from '../../assets/icons/about/pointIcon.svg';
import Delete from '../../assets/icons/about/delete.svg';
import Editor from '../../assets/icons/about/editor.svg';
import Card from './Card';
import { useTranslation } from 'react-i18next';
import {
  BackgroundIcon,
  BackgroundIconContainer,
  IconContainerCard,
  IconContainerCard1,
  IconContainerCard2,
  PhoneIcon,
  PhoneIcon1,
  PhoneIcon2,
} from './Card.styled';

import BackgroundImage from '../../assets/icons/about/rainbow.svg';
import Phone1 from '../../assets/icons/about/phone1.svg';
import Phone2 from '../../assets/icons/about/phone2.svg';
import Phone3 from '../../assets/icons/about/phone3.svg';
import Icon from '../../assets/icons/about/cardIcon.svg';
import { useMediaQuery } from 'react-responsive';

import AOS from 'aos';
import 'aos/dist/aos.css';

const About: React.FC = () => {

  useEffect(() => {
    // Ініціалізація AOS тільки на клієнтській стороні
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 1600,
          offset: 120, // Змініть це значення (спробуйте 120, 200, -100)
          easing: 'ease-out-quad',
          once: false,
          mirror: true,
          disableMutationObserver: true,
          debounceDelay: 50,
          throttleDelay: 99,
          disable: function() {
            return window.innerWidth < 1024;
          }
        });
        
        // Оновлення AOS після ініціалізації
        AOS.refresh();
      });
    }
  }, []);


  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <>
      <AboutWrapper>
        <TextAboutUs  data-aos="fade-right">{t('about.sectionTitle')}</TextAboutUs>
        <AboutTitle data-aos="fade-right">{t('about.mainHeading')}</AboutTitle>
        <AboutCardContainer>
          <ComprehensiveContainer  data-aos="fade-right">
            <IconContainer>
              <ComputerIcon src={Comp} alt={t('about.icons.computer')} />
            </IconContainer>
            <ComprehensiveTitle>{t('about.crm.title')}</ComprehensiveTitle>
            <ComprehensiveText>{t('about.crm.description')}</ComprehensiveText>

            <ContainerTabl>
              <TotalDepositContainer>
                <Div>
                  <PriseContainer>
                    <TotalDepositText>
                      {t('about.deposit.total')}
                    </TotalDepositText>
                    <PriseText>$1200.00</PriseText>
                  </PriseContainer>
                  <DollarSpan>
                    <DollarIcon src={$} alt={t('about.icons.dollar')} />
                  </DollarSpan>
                </Div>
                <GrafikWrapp>
                  <GrafikIcon src={Graf} alt={t('about.icons.chart')} />
                </GrafikWrapp>
              </TotalDepositContainer>

              <ContainerProjects>
                <ProzentIconContainer>
                  <ProzentText>
                    <p>62</p>
                    <span>{t('about.projects.completed')}</span>
                    <ProzentIcon src={Prozent} alt={t('about.icons.percent')} />
                  </ProzentText>
                </ProzentIconContainer>

                <PriseContainer>
                  <AllProjectsTitle>{t('about.projects.all')}</AllProjectsTitle>
                  <AllProjectsText>
                    <AllProjectsSpann></AllProjectsSpann>{' '}
                    {t('about.projects.status.completed')}
                  </AllProjectsText>
                  <AllProjectsText>
                    <AllProjectsSpann></AllProjectsSpann>{' '}
                    {t('about.projects.status.pending')}
                  </AllProjectsText>
                  <AllProjectsText>
                    <AllProjectsSpannGray></AllProjectsSpannGray>
                    {t('about.projects.status.notStarted')}
                  </AllProjectsText>
                </PriseContainer>
              </ContainerProjects>

              <TotalDepositContainer>
                <Div>
                  <PriseContainer>
                    <TotalDepositText>
                      {t('about.expenses.total')}
                    </TotalDepositText>
                    <PriseText>$1200.00</PriseText>
                  </PriseContainer>
                  <DollarSpan>
                    <DollarIcon src={$} alt={t('about.icons.dollar')} />
                  </DollarSpan>
                </Div>
                <GrafikWrapp>
                  <GrafikIconRed src={Grafik} alt={t('about.icons.chart')} />
                </GrafikWrapp>
              </TotalDepositContainer>

              <TotalDepositContainer>
                <Div>
                  <PriseContainer>
                    <ProjectsOverviewText>
                      {t('about.tasks.total')}
                    </ProjectsOverviewText>
                    <PriseText>20</PriseText>
                  </PriseContainer>
                  <DollarSpan>
                    <ListIcon src={List} alt={t('about.icons.list')} />
                  </DollarSpan>
                </Div>
                <TaskText>{t('about.tasks.unfinished')}</TaskText>
                <ProgressBarContainer>
                  <ProgressBar />
                </ProgressBarContainer>
              </TotalDepositContainer>
            </ContainerTabl>

            <ShadowContainer>
              <DivProjects>
                <ProjectsOverviewContainer>
                  <ProjectsOverviewTextContainer>
                    <ProjectsOverviewText>
                      {t('about.projects.overview.title')}
                    </ProjectsOverviewText>
                    <ProjectsOverviewSpanContainer>
                      <ProjectsOverviewSpanRed>
                        {t('about.projects.filter.week')}
                      </ProjectsOverviewSpanRed>
                      <ProjectsOverviewSpan>
                        {t('about.projects.filter.month')}
                      </ProjectsOverviewSpan>
                      <ProjectsOverviewSpan>
                        {t('about.projects.filter.year')}
                      </ProjectsOverviewSpan>
                      <ProjectsOverviewSpan>
                        {t('about.projects.filter.all')}
                      </ProjectsOverviewSpan>
                    </ProjectsOverviewSpanContainer>
                  </ProjectsOverviewTextContainer>
                  <IconTabl src={Tabl} alt={t('about.icons.table')} />
                </ProjectsOverviewContainer>

                <MyToDoItemsContainer>
                  <MyToDoHeaderContainer>
                    <MyToDoItemsTitel>{t('about.todo.title')}</MyToDoItemsTitel>
                    <MyToDoItemsTitel>
                      {t('about.todo.viewAll')}
                    </MyToDoItemsTitel>
                  </MyToDoHeaderContainer>

                  <MyToDoItems>
                    <ToDoContainer>
                      <WarningOrangContainer>
                        <IconWarning
                          src={Warn}
                          alt={t('about.icons.warning')}
                        />
                        <WarningOrangText>
                          {t('about.todo.latest')}
                        </WarningOrangText>
                      </WarningOrangContainer>
                      <CompleteContainer>
                        <DataContainer>
                          <PointIcon src={Point} alt={t('about.icons.point')} />
                          <MyToDoListBoxCheck></MyToDoListBoxCheck>
                          <CompleteText>
                            {t('about.todo.taskExample')}
                          </CompleteText>
                          <MyToDoBoxContainer>
                            <DeleteIconBox>
                              <DeleteIcon
                                src={Delete}
                                alt={t('about.icons.delete')}
                              />
                            </DeleteIconBox>
                            <WriteOrangeBox>
                              <EditorIcon
                                src={Editor}
                                alt={t('about.icons.edit')}
                              />
                            </WriteOrangeBox>
                          </MyToDoBoxContainer>
                        </DataContainer>
                        <DataContainerText>
                          <DataText>2023-12-26 07:15:00</DataText>
                        </DataContainerText>
                      </CompleteContainer>
                    </ToDoContainer>

                    {/* Повторювані ToDo елементи з однаковим перекладом */}
                    {[1, 2].map(item => (
                      <ToDoContainer key={item}>
                        <WarningOrangContainer>
                          <IconWarning
                            src={Warn}
                            alt={t('about.icons.warning')}
                          />
                          <WarningOrangText>
                            {t('about.todo.latestFinished')}
                          </WarningOrangText>
                        </WarningOrangContainer>
                        <CompleteContainer>
                          <DataContainer>
                            <PointIcon
                              src={Point}
                              alt={t('about.icons.point')}
                            />
                            <MyToDoListBoxCheck></MyToDoListBoxCheck>
                            <CompleteText>
                              {t('about.todo.taskExample')}
                            </CompleteText>
                            <MyToDoBoxContainer>
                              <DeleteIconBox>
                                <DeleteIcon
                                  src={Delete}
                                  alt={t('about.icons.delete')}
                                />
                              </DeleteIconBox>
                              <WriteOrangeBox>
                                <EditorIcon
                                  src={Editor}
                                  alt={t('about.icons.edit')}
                                />
                              </WriteOrangeBox>
                            </MyToDoBoxContainer>
                          </DataContainer>
                          <DataContainerText>
                            <DataText>2023-12-26 07:15:00</DataText>
                          </DataContainerText>
                        </CompleteContainer>
                      </ToDoContainer>
                    ))}
                  </MyToDoItems>
                </MyToDoItemsContainer>
              </DivProjects>
            </ShadowContainer>
          </ComprehensiveContainer>
          {isDesktop && (
            <ComprehensiveContainer  data-aos="fade-left">
              <IconContainer>
                <ComputerIcon src={Icon} alt={t('card.icons.unicorn')} />
              </IconContainer>
              <ComprehensiveTitle>
                {t('card.sections.standardApps.title')}
              </ComprehensiveTitle>
              <ComprehensiveText>
                {t('card.sections.standardApps.description')}
              </ComprehensiveText>
              <BackgroundIconContainer>
                <BackgroundIcon
                  src={BackgroundImage}
                  alt={t('card.icons.background')}
                />
                <IconContainerCard>
                  <PhoneIcon src={Phone1} alt={t('card.icons.phone')} />
                </IconContainerCard>
                <IconContainerCard1>
                  <PhoneIcon1 src={Phone2} alt={t('card.icons.phone')} />
                </IconContainerCard1>
                <IconContainerCard2>
                  <PhoneIcon2 src={Phone3} alt={t('card.icons.phone')} />
                </IconContainerCard2>
              </BackgroundIconContainer>
            </ComprehensiveContainer>
          )}
        </AboutCardContainer>
        <Card />
      </AboutWrapper>
    </>
  );
};

export default About;
