import React, { useEffect } from 'react';
import {
  ContactUsText,
  ContactUsTitle,
  ContactUsWrapper,
} from './ContactUs.styled';
import ContactForm from './ContactForm';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import AOS from 'aos';
import 'aos/dist/aos.css';


const ContactUs: React.FC = () => {
  const { t } = useTranslation();

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


  return (
    <Element name="contact">
      <ContactUsWrapper id="contact">
        <ContactUsText data-aos="zoom-in-up">{t('contactUs.sectionTitle')}</ContactUsText>
        <ContactUsTitle data-aos="zoom-in-up">{t('contactUs.mainHeading')}</ContactUsTitle>
        <ContactForm/>
      </ContactUsWrapper>
    </Element>
  );
};

export default ContactUs;
