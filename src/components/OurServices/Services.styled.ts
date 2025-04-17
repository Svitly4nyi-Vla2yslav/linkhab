import styled from "styled-components";

export const ServicesWrapper = styled.div`
 display: flex;
    width: 343px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    @media screen and (min-width: 744px){
width: 696px;

}

@media screen and (min-width: 1440px){
width: 1344px;


}
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  width: 100%;
margin-bottom: 12px;
  @media screen and (min-width: 744px) {
    grid-template-columns: repeat(2, 1fr);
     gap: 20px;
     margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    // Додаткові стилі для великих екранів, якщо потрібно
  }
`;

export const CardGridDeckstop = styled.div`
   display: grid;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
width: 1344px;
gap: 24px;
grid-template-columns: repeat(3, 0fr);
height: auto;
margin: 0 auto;

}
`

export const TextServices = styled.h3`
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


}

@media screen and (min-width: 1440px){
font-family: var(--font-family);
font-weight: 500;
font-size: 22px;
background: linear-gradient(168deg, #fff 0%, #fe5b14 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
padding-bottom: 16px;
}
`;

export const ServicesTitle = styled.h2`
font-family: "Mulish", sans-serif;
font-weight: 700;
font-size: 28px;
line-height: 115%;
letter-spacing: -0.04em;
color: var(--white);
padding-bottom: 20px;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
font-family: var(--second-family);
font-weight: 700;
font-size: 40px;
line-height: 115%;
letter-spacing: -0.03em;
color: var(--white);
width: 774px;
padding-bottom: 50px;
}
`;

export const CardContainer = styled.div`
border: 1px solid var(--line);
border-radius: 16px;
width: 100%;
height: 409px;
box-shadow: 0 0 0 0 var(--white), 
0 0 0 1px rgba(244, 244, 245, 0.1),
 0 0 0 0 rgba(0, 0, 0, 0), 
 0 6px 9px 0 rgba(0, 0, 0, 0.25);
background: var(--substrate);
    z-index: 0;
    margin-bottom: 12px;
     overflow: hidden;
  margin: 0 auto ;
@media screen and (min-width: 744px){
width: 338px;
height: 480px;

}

@media screen and (min-width: 1440px){
border-radius: 16px;
width: 432px;

}
 
`;

export const CardContainerBig = styled.div`
border: 1px solid var(--line);
border-radius: 16px;
width: 100%;
height: 409px;
box-shadow: 0 0 0 0 var(--white), 
0 0 0 1px rgba(244, 244, 245, 0.1),
 0 0 0 0 rgba(0, 0, 0, 0), 
 0 6px 9px 0 rgba(0, 0, 0, 0.25);
background: var(--substrate);
    z-index: 0;
    margin-bottom: 12px;
     overflow: hidden;
  margin: 0 auto ;
@media screen and (min-width: 744px){
margin-top: 20px;
width: 696px;
height: 480px;

}

@media screen and (min-width: 1440px){

border-radius: 16px;
width: 432px;
margin: 0 auto;
}
 
`;

export const BackgroundIconContainer = styled.div`
  position: relative;
      bottom: 125px;
  left: 0;
  width: 343px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

 &::after {
      content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(0deg, #101010 40%, rgba(16, 16, 16, 0) 100%);
    pointer-events: none;
}

@media screen and (min-width: 744px){
 &::after {
      content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vh;
    height: 40%;
    background: linear-gradient(0deg, #101010 40%, rgba(16, 16, 16, 0) 100%);
    pointer-events: none;
}

}

@media screen and (min-width: 1440px){


}
  
`;

export const IconContainerCreditServices = styled.div`
     position: absolute;
  bottom: 40px;
    left: 20px;
width: 304px;
height: 281px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
 
  @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const PhoneIconCreditServices = styled.img`
position: relative;
z-index: 0;
width: 303px;
height: 280px;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const IconCreditServices = styled.div`
     position: absolute;
  bottom: 40px;
    left: 20px;
width: 304px;
height: 281px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
 @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const PhoneCreditServices = styled.img`
position: relative;
z-index: 0;
width: 337px;
height: 280px;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const IconContainerCardCode = styled.div`
     position: absolute;
    bottom: -17px;
    left: 19px;
border-radius: 18px 18px 0 0;
width: 676px;
height: 296px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
 box-shadow: inset 0 1px 2px 0 #525154, 0 0 18px -4px rgba(0, 0, 0, 0.5);
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);

@media screen and (min-width: 744px){
bottom: 31px;


}

@media screen and (min-width: 1440px){


}
`;

export const PhoneIconCode = styled.img`
position: relative;
z-index: 0;
width: 320px;
height: 291px;
opacity: 0.7;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const WrapperCardKey = styled.button`
position: relative;
right: 305px;
bottom: 115px;
width: 34px;
height:34px;
padding: 0px;
border: none;
border-radius: 5px;
background: linear-gradient(90deg, #ed1816 0%, #f84215 63.35%, #fe5b14 100%);
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const GradientKey = styled.img`
width: 28px;
height: 28px;

border-radius: 5px;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const KeyTextIconContainer = styled.div`
    margin-left: 222px;
    height: 19%;
margin-bottom: 26px;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const KeyTitel = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 137%;
color: var(--gray-500);
    margin-bottom: 20px;
    margin-left: -20px;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const KeyText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 13px;
line-height: 137%;
color: var(--gray-500);
  overflow: hidden;
      width: 138%;
      margin-left: -17%;
       margin-bottom: 20px;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const KeySpanContainer = styled.div`
width: 366px;
// height: 25px;
  overflow: hidden;
  display: flex;
gap: 2px;
 flex-direction: row;
flex-wrap: nowrap;
justify-content: space-evenly;
 align-items: center;
  margin-left: -17%;

 @media screen and (min-width: 744px){
gap: 4px;

}

@media screen and (min-width: 1440px){


}
`;

export const KeySpan = styled.span`
display: flex;
gap: 2px;
    border-radius: 46px;
    padding: 4px 8px;
    width: 100%;
    height: auto;
    box-shadow: 0 0 18px -4px rgba(0, 0, 0, 0.5), inset 0 1px 2px 0 #525154;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const KeySpanText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
line-height: 137%;
color: var(--gray-500);
width: 100%;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;