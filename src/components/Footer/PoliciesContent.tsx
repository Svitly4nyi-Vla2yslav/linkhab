import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import {
  PoliciesContainer,
  PolicySection,
  LockIconContainer,
  LockIcon,
  PolicyTitle,
  PolicyText,
} from './Footer.styled';
import locker from '../../assets/icons/tabler_lock-filled.svg';
import { GradientWrapper } from '../StarrySky/GradientBackground';
import { useTranslation } from 'react-i18next';
import DOMPurify from 'dompurify';

interface PoliciesContentProps {
  activePolicy: string | null;
}

export const PoliciesContent: React.FC<PoliciesContentProps> = ({
  activePolicy,
}) => {
  const { t } = useTranslation();
  const termsContent = DOMPurify.sanitize(t('terms.content'));
  useEffect(() => {
    if (activePolicy) {
      scroller.scrollTo(activePolicy, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -100,
      });
    }
  }, [activePolicy]);

  return (
    <PoliciesContainer>
      {/* <GradientWrapper /> */}
      <Element name="privacy">
        <PolicySection>
          <PolicyTitle>
            <LockIcon src={locker} alt="🔐" /> {t('policies.privacy.title')}
          </PolicyTitle>
          <PolicyText>
            <h3>{t('policies.privacy.websiteVisitors')}</h3>
            {t('policies.privacy.content', { joinArrays: '\n\n' })
              .split('\n\n')
              .map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </PolicyText>
        </PolicySection>
      </Element>

      <Element name="terms">
        <PolicySection>
          <LockIconContainer></LockIconContainer>
          <PolicyTitle>{t('policies.terms.title')}</PolicyTitle>
          <PolicyText>
            <h3>{t('policies.terms.title')}</h3>
            {t('policies.terms.content', { joinArrays: '\n\n' })
              .split('\n\n')
              .map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </PolicyText>
          <div dangerouslySetInnerHTML={{ __html: termsContent }}/>
        </PolicySection>
      </Element>

      <Element name="cookie">
        <PolicySection>
          <LockIconContainer></LockIconContainer>
          <PolicyTitle>{t('policies.cookie.title')}</PolicyTitle>
          <PolicyText>
            <h3>{t('policies.cookie.cookies')}</h3>
            {t('policies.cookie.content', { joinArrays: '\n\n' })
              .split('\n\n')
              .map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </PolicyText>
        </PolicySection>
      </Element>
    </PoliciesContainer>
  );
};
