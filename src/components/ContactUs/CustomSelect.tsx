import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FormInput, FormTextarea } from './ContactUs.styled';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  $hasError?: boolean; // Додаємо цей пропс
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(option => option.value === value);

  return (
    <SelectContainer ref={ref}>
      <SelectHeader onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        {selectedOption?.label || placeholder}
        <SelectArrow $isOpen={isOpen}>⌵</SelectArrow>
      </SelectHeader>
      {isOpen && (
        <SelectOptions>
          {options.map(option => (
            <SelectOption
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              $isSelected={value === option.value}
            >
              {option.label}
            </SelectOption>
          ))}
        </SelectOptions>
      )}
    </SelectContainer>
  );
};

// Стилі залишаються незмінними
const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SelectHeader = styled.div<{ $isOpen: boolean; $hasError?: boolean }>`
  padding: 12px 16px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
  font-family: var(--font-family);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  border-color: ${({ $isOpen, $hasError }) =>
    $hasError
      ? '#ff4d4f !important'
      : $isOpen
      ? 'var(--primary)'
      : 'var(--line)'};
  box-shadow: 0 0 18px -5px rgba(0, 0, 0, 0.5), inset 0 1px 2px 0 #525154;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.06) 30%,
    rgba(255, 255, 255, 0.02) 100%
  );
`;

const SelectArrow = styled.span<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

const SelectOptions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--substrate);
  border: 1px solid var(--line);
  border-radius: 8px;
  margin-top: 4px;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
`;

const SelectOption = styled.div<{ $isSelected: boolean }>`
  padding: 12px 16px;
  color: var(--white);
  font-family: var(--font-family);
  cursor: pointer;
  background: ${({ $isSelected }) =>
    $isSelected ? 'var(--primary)' : 'transparent'};
  color: ${({ $isSelected }) => ($isSelected ? 'var(--dark)' : 'var(--white)')};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ $isSelected }) =>
      $isSelected ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const ErrorTextCheck = styled.span`
  border: 1px solid var(--red-500);
  border-radius: 16px;
  padding: 9px 10px;
  height: 52px;
  position: absolute;
  bottom: 42px;
  text-align: center;
  width: 100%;
  right: 0px;
  box-shadow: 0 0 0 0 var(--white), 0 0 0 1px rgba(244, 244, 245, 0.1),
    0 0 0 0 rgba(0, 0, 0, 0), 0 6px 9px 0 rgba(0, 0, 0, 0.25);
  background: var(--substrate);
  z-index: 1;

  @media screen and (min-width: 744px){
 bottom: 0px;
    text-align: center;
    width: 100%;
    right: 313px;

}

@media screen and (min-width: 1440px){


}

 
`;

export const ErrorText = styled.span`
  border: 1px solid var(--red-500);
  border-radius: 16px;
  padding: 9px 10px;
  height: 52px;
  position: absolute;
  bottom: 42px;
  text-align: center;
  width: 100%;
  right: 0px;
  box-shadow: 0 0 0 0 var(--white), 0 0 0 1px rgba(244, 244, 245, 0),
    0 0 0 0 rgba(0, 0, 0, 0), 0 6px 9px 0 rgba(0, 0, 0, 0.25);
  background: var(--substrate);
  z-index: 1;


  
    @media screen and (min-width: 744px){
position: static;
  background: var(--substrate);
}

@media screen and (min-width: 1440px){


}
`;

export const ErrorInput = styled(FormInput)<{ $hasError?: boolean }>`
  border-color: ${({ $hasError }) => $hasError && '#ff4d4f !important'};
  z-index: 2;
`;

export const ErrorTextarea = styled(FormTextarea)<{ $hasError?: boolean }>`
  border-color: ${({ $hasError }) => $hasError && '#ff4d4f !important'};
  z-index: 2;
`;

export const ErrorSelect = styled(SelectHeader)<{ $hasError?: boolean }>`
  border-color: ${({ $hasError }) => $hasError && '#ff4d4f !important'};
  z-index: 2;
`;
