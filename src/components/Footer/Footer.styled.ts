import styled from "styled-components";

export const FooterContainer = styled.div`
display: flex;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
    height: 221px;
    margin-bottom: 28px;
    flex-wrap: wrap;
    align-content: flex-start;

    &::after {
  
}

    @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
width: 1344px;


}
`;

export const FooterTitelContainer = styled.div`
display: flex;
    width: 343px;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
    height: 92px;
    margin-bottom: 28px;
    flex-wrap: wrap;
    align-content: flex-start;

    &::after {
  
}

    @media screen and (min-width: 744px){
width: 696px;
 height: 52px;

}

@media screen and (min-width: 1440px){
width: 1344px;
    justify-content: flex-start;

}

`

export const FooterTitle = styled.h3`
font-family: var(--font-family);
font-weight: 400;
font-size: 18px;
line-height: 135%;
text-align: center;
color: var(--white);
margin-bottom: 20px;
    @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
margin-left: 40px;
}
`;

export const FooterIcon = styled.img`
width: 343px;
height: 80px;
position: absolute;
color : linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
backdrop-filter: blur(10px);

    @media screen and (min-width: 744px){
width: 696px;
height: auto;

}

@media screen and (min-width: 1440px){

width: 1344px;

}
`;

export const BackgroundIconContainer = styled.div`
  position: relative;
      bottom: 50px;
  left: 0;
      width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
      opacity: 0.8;

    @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
width: 1344px;
        top: 10%;

}
  
`;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const PoliciesContainer = styled.div`
  width: 100%;
 margin: 80px auto 80px auto;
background:rgba(0, 0, 0, 0.86);
// opacity: 0.2;/
  color: #fff;
  position: relative;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
margin-top:15% ; 

}
`;

export const PolicySection = styled.section`
  max-width: 800px;
  margin: 0 auto 60px;
  padding: 20px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const LockIconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;



export const PolicyTitle = styled.h2`
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  letter-spacing: -0.04em;
  color: var(--white);
  margin-bottom: 20px;
  text-align: center;
      display: flex
;
    align-items: center;
    justify-content: center;

        @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const PolicyText = styled.div`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 137%;
  color: var(--white);

  h3 {
  font-family: var(--font-family);
font-weight: 400;
font-size: 17px;
line-height: 137%;
color: var(--white);
  }

  p {
  font-family: var(--font-family);
font-weight: 400;
font-size: 17px;
line-height: 137%;
color: var(--white);
  }

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const LockIcon = styled.img`
  width: 56px;
  height: 56px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`
