import styled from "styled-components";

export const HeroWrapper = styled.div`
 position: relative;
//  top: 100px;
    display: flex;
    width: 343px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    // margin: 80px 1vh ;
        z-index: 0;
     margin: 110px auto ;
 @media screen and (min-width: 744px){
display: flex;
        width: 90%;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        text-align: center;

}

@media screen and (min-width: 1440px){
width: 660px;
height: 426px;
        margin-top: 170px;
}
`;

export const TextDevelopment = styled.h3`
font-family: var(--font-family);
font-weight: 500;
font-size: 16px;
padding-bottom: 8px;
padding-top: 32px;

background: linear-gradient(180deg,
 #eaeaea 0%, rgba(234, 234, 234, 0) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

 @media screen and (min-width: 744px){
font-family: var(--font-family);
font-weight: 500;
font-size: 22px;
background: linear-gradient(180deg, #eaeaea 0%, rgba(234, 234, 234, 0) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

}

@media screen and (min-width: 1440px){
padding-top: 0;
margin-top: 40px;

}
`;

export const TitleModern = styled.h1`
font-family: "MulishBold";
font-weight: 700;
font-size: 36px;
padding-bottom: 24px;
line-height: 105%;
background: linear-gradient(134deg, #fff 0%, #fe5b14 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
    filter: blur(0.1px);

 text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.51), 
               0px 0px 12px rgba(255, 178, 150, 0.06);

 @media screen and (min-width: 744px){
font-size: 66px;

}

@media screen and (min-width: 1440px){


}
`;


export const TextDescription = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 18px;
line-height: 135%;
color: var(--white);
padding-bottom: 24px;

@media screen and (min-width: 744px){
font-family: var(--font-family);
font-weight: 500;
font-size: 22px;
text-align: center;
color: var(--white);

}

@media screen and (min-width: 1440px){


}
`;

export const IconsExperience = styled.img`
width: 20px;
margin: 4px;
position: relative;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;
export const ContainerExperience = styled.div`
display: flex;
@media screen and (min-width: 744px){
align-items: flex-end;

}

@media screen and (min-width: 1440px){


}
`;

export const TextExperience = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 175%;
color: #f2f2f2;
 @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const ContainerTextExperience = styled.div`

@media screen and (min-width: 744px){
display: flex;
gap: 40px;

}

@media screen and (min-width: 1440px){


}
`;

export const ContainerButton = styled.div`
padding: 0 auto;
padding-bottom: 24px;
width: 70%;
height: 44px;
 @media screen and (min-width: 744px){
    width: 35%;

}

@media screen and (min-width: 1440px){


}
`;
