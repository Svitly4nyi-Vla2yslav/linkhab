import styled from 'styled-components';

export const FAQSection = styled.section`
  display: flex;
    width: 343px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin: 80px auto;

        @media screen and (min-width: 744px){
width: 696px;

}

@media screen and (min-width: 1440px){
width: 888px;

}
`;

export const FAQText = styled.h3`
font-family: var(--font-family);
font-weight: 500;
font-size: 18px;
line-height: 135%;
background: linear-gradient(168deg, #fff 0%, #fe5b14 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
padding-bottom: 10px;
@media screen and (min-width: 744px){
font-family: var(--font-family);
font-weight: 500;
font-size: 22px;
text-align: center;
background: linear-gradient(356deg, #fff 0%, #fe5b14 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin: 0 auto;

}

@media screen and (min-width: 1440px){


}
`;

export const FAQTitle = styled.h2`
 font-family: "Mulish", sans-serif;
font-weight: 700;
font-size: 28px;
line-height: 115%;
letter-spacing: -0.04em;
color: var(--white);
padding-bottom: 20px;
@media screen and (min-width: 744px){
font-family: var(--second-family);
font-weight: 700;
font-size: 40px;
line-height: 115%;
letter-spacing: -0.03em;
text-align: center;
color: var(--white);

}

@media screen and (min-width: 1440px){
        width: 776px;
        margin: 0 auto;
        padding-bottom: 50px;
}
`;

export const QuestionItem = styled.div`
    position: relative;
 border: 1px solid var(--line);
border-radius: 16px;
padding: 16px;
width: 343px;
// height: 271px;
 overflow: hidden;
box-shadow: 0 0 0 0 var(--white), 0 0 0 1px rgba(244, 244, 245, 0.1), 0 0 0 0 rgba(0, 0, 0, 0), 0 6px 9px 0 rgba(0, 0, 0, 0.25);
background: var(--substrate);
margin-bottom: 12px;
  transition: box-shadow 0.4s ease, border 0.4s ease;
  
  &:hover {
    border: 1px solid #fff;
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.3);
  }


  @media screen and (min-width: 744px){
width: 696px;

}

@media screen and (min-width: 1440px){
width: 888px;

}
`;

export const QuestionButton = styled.button`
display : flex;
flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
       justify-content: space-between;

border: none;
border-radius: 16px;
padding: 14px;
width: 100%;
height: auto;
ont-family: var(--second-family);
font-weight: 500;
font-size: 20px;
line-height: 125%;
color: var(--white);
text-align: left;
background: transparent;

   transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

interface AnswerTextProps {
  $isOpen: boolean;
}

export const AnswerText = styled.div<AnswerTextProps>`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 137%;
  color: var(--gray-500);
  transform: scaleY(${({ $isOpen }) => ($isOpen ? 1 : 0)});
  transform-origin: top;
  height: auto;
  max-height: ${({ $isOpen }) => ($isOpen ? '1000px' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  overflow: hidden;
  transition: 
    transform 0.4s ease,
    opacity 0.3s ease,
    max-height 0.4s ease;
  margin-top: ${({ $isOpen }) => ($isOpen ? '12px' : '0')};
  will-change: transform, opacity, max-height;

  @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const StarIcon = styled.img`
width: 12px;
height: 13px;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

interface XIconStyledProps {
  $rotate?: boolean;
}

export const XIcon = styled.img.attrs<XIconStyledProps>(() => ({})) <XIconStyledProps>`
    width: 14px;
    height: 15px;
    transition: transform 0.6s ease;
  
    ${({ $rotate }) =>
    $rotate &&
    `
        transform: rotate(136deg);
      `}

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
  `;

export const QuestionWrapper = styled.div`
display : flex;
flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}

`;