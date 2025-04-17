import {
  CloudIcon,
  CloudWrapper,
  FileIcon,
  FileInfo,
  FileName,
  FilePreviewContainer,
  FilePreviewLink,
  FileSize,
  FormRadioGroupContainer,
  FormWrapper,
  NameContainer,
  RadioCustom,
  RemoveFileButton,
  TextareaDiv,
} from './ContactUs.styled';
import { toast } from 'react-toastify';

import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../../firabase';
import {
  FormTitle,
  FormGroup,
  FormRadioGroup,
  FormRadioLabel,
  FormRadioInput,
  FormFileUpload,
} from './ContactUs.styled';
import {
  CustomSelect,
  ErrorInput,
  ErrorText,
  ErrorTextarea,
  ErrorTextCheck,
} from './CustomSelect';

import Cloud from '../../assets/icons/cloud🌥.svg';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { MagicButton } from '../MagicButton/MagicButton';
import { IconsStars } from '../BurgerMenu/BurgerMenu.styled';
import { SuccessModal } from './SuccessMessage';
import IconStars from '../../assets/icons/Icon-stars.svg';

import { useTranslation } from 'react-i18next';


import AOS from 'aos';
import 'aos/dist/aos.css';
interface FormErrors {
  firstName?: string;
  lastName?: string;
  budget?: string;
  contactMethod?: string;
  contact?: string;
  description?: string;
  files?: string;
}
interface FilePreview {
  name: string;
  size: number;
  type: string;
  url?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  budget: string;
  contactMethod: string;
  contact: string;
  description: string;
  files: FileList | null;
  filePreviews: FilePreview[];
}

const ContactForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    budget: '',
    contactMethod: '',
    contact: '',
    description: '',
    files: null,
    filePreviews: [],
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isUploading, setIsUploading] = useState(false);
  const { t } = useTranslation();
  const [fileError, setFileError] = useState<string | null>(null);

 useEffect(() => {
    AOS.init({
      duration: 1800, // Скоротили тривалість анімації
      offset: -320, // Анімація почнеться раніше (за 120px до появи елемента)
      easing: 'ease-in-out', // Плавність анімації
      once: false, // Анімація тільки один раз
      mirror: true // Вимкнули повторну анімацію при скролі назад
    });
  }, []);

  // const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

  // const invalidTypeFiles = Array.from(e.target.files).filter(
  //   file => !ALLOWED_TYPES.includes(file.type)
  // );
  
  // if (invalidTypeFiles.length > 0) {
  //   setFileError(
  //     t('contactForm.errors.invalidFileType', {
  //       types: ALLOWED_TYPES.map(t => t.split('/')[1]).join(', ')
  //     })
  //   );
  //   return;
  // }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('contactForm.errors.firstName');
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t('contactForm.errors.lastName');
    }

    if (!formData.budget) {
      newErrors.budget = t('contactForm.errors.budget');
    }

    if (!formData.contactMethod) {
      newErrors.contactMethod = t('contactForm.errors.contactMethod');
    }

    if (!formData.contact.trim()) {
      newErrors.contact = t('contactForm.errors.contact.required');
    } else if (
      formData.contactMethod === 'Email' &&
      !/^\S+@\S+\.\S+$/.test(formData.contact)
    ) {
      newErrors.contact = t('contactForm.errors.contact.email');
    } else if (
      formData.contactMethod === 'Phone' &&
      !/^[\d\s\-+]{10,}$/.test(formData.contact)
    ) {
      newErrors.contact = t('contactForm.errors.contact.phone');
    }

    if (!formData.description.trim()) {
      newErrors.description = t('contactForm.errors.description');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50 MB в байтах
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null); // Скидаємо попередні помилки
    
    if (e.target.files && e.target.files.length > 0) {
      const oversizedFiles = Array.from(e.target.files).filter(
        file => file.size > MAX_FILE_SIZE
      );
  
      if (oversizedFiles.length > 0) {
        setFileError(
          t('contactForm.errors.fileTooLarge', { 
            fileName: oversizedFiles[0].name, 
            maxSize: formatFileSize(MAX_FILE_SIZE) 
          })
        );
        // Очищаємо input, щоб користувач міг вибрати файли знову
        e.target.value = '';
        return;
      }
  
      const filesArray = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
      }));
  
      setFormData(prev => ({
        ...prev,
        files: e.target.files,
        filePreviews: filesArray,
      }));
    }
  };
  
  // Додаємо допоміжну функцію для форматування розміру
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
  };


  
  const removeFile = (index: number) => {
    const newPreviews = [...formData.filePreviews];
    newPreviews.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      filePreviews: newPreviews,
      files: null, // Очищаємо files, оскільки ми не можемо видалити конкретний файл з FileList
    }));
  };

  const uploadFiles = async (
    files: FileList
  ): Promise<Record<string, string>> => {
    const urls: Record<string, string> = {};

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Додаткова перевірка (на випадок, якщо хтось обійшов клієнтську валідацію)
        if (file.size > MAX_FILE_SIZE) {
          console.warn(`File ${file.name} is too large and was skipped`);
          continue;
        }

        const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        urls[file.name] = url;
      }
      return urls;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    try {
      setIsUploading(true);

      // Завантажуємо файли, якщо вони є
      let fileUrls: Record<string, string> = {};
      if (formData.files) {
        fileUrls = await uploadFiles(formData.files);

        // Якщо жоден файл не був завантажений (наприклад, всі були завеликі)
        if (Object.keys(fileUrls).length === 0 && formData.files.length > 0) {
          toast.error(t('contactForm.errors.noValidFiles'), {
            position: 'top-center',
            style: {
              border: '1px solid #ff4d4f',
              padding: '16px',
              color: '#ff4d4f',
              background: 'var(--substrate)',
            },
          });
          return;
        }

        // Оновлюємо filePreviews з URL
        const updatedPreviews = formData.filePreviews.map(file => ({
          ...file,
          url: fileUrls[file.name], // Додаємо URL до відповідного файлу
        }));

        setFormData(prev => ({
          ...prev,
          filePreviews: updatedPreviews,
        }));
      }

      // Відправляємо дані у Firestore
      const docRef = await addDoc(collection(db, 'contactSubmissions'), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        budget: formData.budget,
        contactMethod: formData.contactMethod,
        contact: formData.contact,
        description: formData.description,
        fileUrls: Object.values(fileUrls), // Відправляємо масив URL
        createdAt: new Date(),
      });

      console.log('Document written with ID: ', docRef.id);
      setIsModalOpen(true);

      // Скидаємо форму
      setFormData({
        firstName: '',
        lastName: '',
        budget: '',
        contactMethod: '',
        contact: '',
        description: '',
        files: null,
        filePreviews: [],
      });
    } catch (error) {
      console.error('Error:', error);
      let errorMessage = t('contactForm.errors.submitError');

      if (error instanceof Error) {
        if (error.message.includes('CORS')) {
          errorMessage = t('contactForm.errors.serverError');
        } else if (error.message.includes('too large')) {
          errorMessage = t('contactForm.errors.fileTooLarge', {
            fileName: error.message.split(' ')[1] || 'file',
          });
        }
      }
      toast.error(errorMessage, {
        position: 'top-center',
        style: {
          border: '1px solid #ff4d4f',
          padding: '16px',
          color: '#ff4d4f',
          background: 'var(--substrate)',
        },
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handlePreview = (file: FilePreview) => {
    if (file.url) {
      window.open(file.url, '_blank');
    } else {
      // Якщо файл ще не завантажено на сервер

      toast.error(t('contactForm.errors.fileNotUploaded'), {
        position: 'top-center',
        style: {
          border: '1px solid #ff4d4f',
          padding: '16px',
          color: '#ff4d4f',
          background: 'var(--substrate)',
          zIndex: 3,
        },
      });
    }
  };
  return (
    <FormWrapper  data-aos="zoom-out" onSubmit={handleSubmit}>
      <FormRadioGroupContainer>
        <FormTitle>{t('contactForm.title')}</FormTitle>
        <FormRadioGroup>
          <FormRadioLabel>
            <FormRadioInput
              type="radio"
              name="budget"
              value="Up to $10K"
              checked={formData.budget === 'Up to $10K'}
              onChange={handleChange}
            />
            <RadioCustom>{t('contactForm.budgetOptions.upTo10k')}</RadioCustom>
          </FormRadioLabel>

          <FormRadioLabel>
            <FormRadioInput
              type="radio"
              name="budget"
              value="$10K-$30K"
              checked={formData.budget === '$10K-$30K'}
              onChange={handleChange}
            />
            <RadioCustom>{t('contactForm.budgetOptions.10kTo30k')}</RadioCustom>
          </FormRadioLabel>

          <FormRadioLabel>
            <FormRadioInput
              type="radio"
              name="budget"
              value="$30K+"
              checked={formData.budget === '$30K+'}
              onChange={handleChange}
            />
            <RadioCustom>{t('contactForm.budgetOptions.30kPlus')}</RadioCustom>
          </FormRadioLabel>
          {errors.budget && <ErrorTextCheck>{errors.budget}</ErrorTextCheck>}
        </FormRadioGroup>
      </FormRadioGroupContainer>
      <NameContainer>
        <FormGroup>
          <ErrorInput
            type="text"
            name="firstName"
            placeholder={t('contactForm.fields.firstName')}
            value={formData.firstName}
            onChange={handleChange}
            required
            $hasError={!!errors.firstName}
          />
          {errors.firstName && (
            <ErrorText>{t('contactForm.errors.firstName')}</ErrorText>
          )}
        </FormGroup>

        <FormGroup>
          <ErrorInput
            placeholder={t('contactForm.fields.lastName')}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            $hasError={!!errors.lastName}
          />
          {errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <CustomSelect
            options={[
              { value: 'Email', label: t('contactForm.methods.email') },
              { value: 'Phone', label: t('contactForm.methods.phone') },
              { value: 'WhatsApp', label: t('contactForm.methods.whatsapp') },
              { value: 'Telegram', label: t('contactForm.methods.telegram') },
            ]}
            value={formData.contactMethod}
            onChange={value =>
              setFormData({ ...formData, contactMethod: value })
            }
            placeholder={t('contactForm.fields.contactMethod')}
            $hasError={!!errors.contactMethod}
          />
          {errors.contactMethod && (
            <ErrorText>{errors.contactMethod}</ErrorText>
          )}
        </FormGroup>

        <FormGroup>
          <ErrorInput
            placeholder={
              formData.contactMethod === 'Email'
                ? t('contactForm.fields.contactPlaceholder.email')
                : formData.contactMethod === 'Phone'
                ? t('contactForm.fields.contactPlaceholder.phone')
                : formData.contactMethod === 'WhatsApp'
                ? t('contactForm.fields.contactPlaceholder.whatsapp')
                : formData.contactMethod === 'Telegram'
                ? t('contactForm.fields.contactPlaceholder.telegram')
                : t('contactForm.fields.contactPlaceholder.default')
            }
            type={formData.contactMethod === 'Email' ? 'email' : 'text'}
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            $hasError={!!errors.contact}
          />
          {errors.contact && <ErrorText>{errors.contact}</ErrorText>}
        </FormGroup>
      </NameContainer>

      <FormGroup>
        <TextareaDiv>
          <ErrorTextarea
            placeholder={t('contactForm.fields.description')}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            $hasError={!!errors.description}
          />
          {errors.description && <ErrorText>{errors.description}</ErrorText>}
        </TextareaDiv>
      </FormGroup>

      <FormGroup>
        {formData.filePreviews.length > 0 ? (
          formData.filePreviews.map((file, index) => (
            <FilePreviewContainer key={`${file.name}-${index}`}>
              <FileIcon>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66673 23.1473H17.3339C19.4133 23.1473 20.4479 22.0926 20.4479 20.0033V10.8829H13.1754C11.8897 10.8829 11.2872 10.27 11.2872 8.98429V1.61157H6.66673C4.59759 1.61157 3.55273 2.67614 3.55273 4.76586V20.0033C3.55273 22.1024 4.59759 23.1473 6.66673 23.1473ZM13.2059 9.50672H20.3373C20.267 9.09486 19.9756 8.69286 19.5037 8.20086L13.9589 2.566C13.4969 2.08386 13.0752 1.79243 12.653 1.72172V8.96457C12.653 9.32586 12.8442 9.50672 13.2059 9.50672Z"
                    fill="#FE5B14"
                  />
                </svg>
              </FileIcon>
              <FileInfo>
                <FileName>{file.name}</FileName>
                <FileSize>{(file.size / (1024 * 1024)).toFixed(2)} MB</FileSize>
              </FileInfo>
              <FilePreviewLink onClick={() => handlePreview(file)}>
                Preview
              </FilePreviewLink>
              <RemoveFileButton onClick={() => removeFile(index)}>
                ×
              </RemoveFileButton>
            </FilePreviewContainer>
          ))
        ) : (
          <FormFileUpload>
            <input type="file" onChange={handleFileChange} multiple />
            <CloudWrapper>
              <CloudIcon src={Cloud} alt="☁️" />
            </CloudWrapper>
            <span>{t('contactForm.fields.fileUpload')}</span>
          </FormFileUpload>
        )} {fileError && <ErrorText>{fileError}</ErrorText>}
      </FormGroup>

      <FormGroup>
        <MagicButton type="submit" disabled={isUploading}>
          <IconsStars src={IconStars} alt="Stars" />{' '}
          {isUploading
            ? t('contactForm.submitButton.uploading')
            : t('contactForm.submitButton.default')}
        </MagicButton>
      </FormGroup>
      {isModalOpen && <SuccessModal onClose={() => setIsModalOpen(false)} />}
    </FormWrapper>
  );
};

export default ContactForm;
function setErrors(newErrors: FormErrors) {
  throw new Error('Function not implemented.');
}
