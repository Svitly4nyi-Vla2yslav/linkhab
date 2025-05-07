import React, { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
// import { db } from 'path/to/your/firebaseConfig';
import styled from 'styled-components';
import { db } from '../../firabase';

// Стилізований компонент з пропсом для кольору
const StyledContainer = styled.div<{ bgColor: string }>`
  height: 100%;
  width: 375px;
  margin: 0 auto;
  background: ${({ bgColor }) => bgColor};
`;

const ContainerWidget: React.FC = () => {
  const [bgColor, setBgColor] = useState('#090909'); // Значення за замовчуванням

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const themeDoc = await getDoc(doc(db, 'themeSettings', 'defaultTheme'));
        if (themeDoc.exists()) {
          setBgColor(themeDoc.data().containerBg);
        }
      } catch (error) {
        console.error('Error fetching theme:', error);
      }
    };

    fetchTheme();
  }, []);

  return <StyledContainer bgColor={bgColor} />;
};

export default ContainerWidget;