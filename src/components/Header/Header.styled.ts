import styled from '@emotion/styled';

export const HeaderContainer = styled.header<{ isopen: boolean; $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 50%;
  width: 95%;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
   z-index: 1;

@media screen and (min-width: 744px){
  left: 50%;

}

@media screen and (min-width: 1440px){


}
  
  ${({ $isScrolled }) =>
    $isScrolled && `
   position: fixed;
      border: 1px solid var(--line);
      border-radius: 16px;
       width: 95%;
       top: 7px;
      height: 80px;
      box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.25);
      background: var(--substrate);
      z-index: 1;
    `}
`;


export const Logo = styled.a`
z-index: 260;
width: 152px;
height: 54px;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}

`;

export const LogoIcon = styled.img`
z-index: 11;
position: fixed;
  width: 152px;
height: 54px;
    @media screen and (min-width: 1244px){
       width: 152px;
height: 54px;
    }
   
`;

export const ContainerBar = styled.div`
    // position: fixed;
    top: 7px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
     padding: 8px 5px;

     @media screen and (min-width: 744px){
justify-content: flex-end;
// margin-left: 10px;
left: 53%;
    width: 100%;

}

@media screen and (min-width: 1440px){


}
`;

export const ButtonWrapp = styled.div`
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
    display: flex;
    width: 18%;
   margin-top: -19px;

}
`;


export const MenuContainer = styled.div`
@media screen and (min-width: 1440px){

position: relative;
display: flex;
    width: 47%;
    margin-right: 13%;
        flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}


`;

