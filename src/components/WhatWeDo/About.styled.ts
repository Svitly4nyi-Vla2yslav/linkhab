import styled, { keyframes } from "styled-components";

export const AboutWrapper = styled.div`
 display: flex;
    width: 343px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto ;
@media screen and (min-width: 744px){
width: 696px;

}

@media screen and (min-width: 1440px){
width: 1344px;

}
`;

export const AboutCardContainer = styled.div`
    display: inherit;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
width: 1344px;
gap: 24px;

}
`;

export const TextAboutUs = styled.h3`
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
background: linear-gradient(168deg, #fff 0%, #fe5b14 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

@media screen and (min-width: 1440px){
padding-bottom: 16px;

}
`;

export const AboutTitle = styled.h2`
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
color: var(--white);

}

@media screen and (min-width: 1440px){

width: 774px;
padding-bottom: 50px;
}

`;

export const ComprehensiveContainer = styled.div`
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
@media screen and (min-width: 744px){
width: 696px;
height: 480px;

}

@media screen and (min-width: 1440px){
width: initial;
height: 480px;
}
     
`;

export const IconContainer = styled.div`
border: 1px solid #303038;
border-radius: 12px;
width: 64px;
height: 64px;
box-shadow: 0 0 18px -5px rgba(0, 0, 0, 0.5),
 inset 0 1px 2px 0 #525154;
background: var(--black-400);
margin: 20px;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const ComputerIcon = styled.img`
// width: 32px;
// height: 32px;
padding: 15px;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;



export const ComprehensiveTitle = styled.h4`
font-family: var(--second-family);
font-weight: 500;
font-size: 18px;
line-height: 125%;
color: var(--white);
margin:  8px 20px;

@media screen and (min-width: 744px){

}

@media screen and (min-width: 1440px){


}
`;

export const ComprehensiveText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 137%;
color: var(--gray-500);
margin: 10px 20px;
@media screen and (min-width: 744px){
font-family: var(--font-family);
font-weight: 400;
font-size: 17px;
line-height: 137%;
color: var(--gray-500);

}

@media screen and (min-width: 1440px){


}
`;

// ! TotalDepositContainer

export const ContainerTabl = styled.div`
display: flex;
gap: 6px;
width: 301px;
margin: 0 auto;
@media screen and (min-width: 744px){
width: 655px;
gap: 13px;
}

@media screen and (min-width: 1440px){


}
`;


export const TotalDepositContainer = styled.div`
border: 0.25px solid #444;
border-radius: 3px;
width: 70px;
height: 31px;
box-shadow: 0 0 0 0 var(--white), 0 0 0 0px rgba(244, 244, 245, 0.1), 0 0 0 0 rgba(0, 0, 0, 0), 0 3px 4px 0 rgba(0, 0, 0, 0.25);
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
display: flex;
justify-content: space-between;
    flex-direction: column;

@media screen and (min-width: 744px){
border: 0.54px solid #444;
border-radius: 6px;
width: 153px;
height: 67px;

}

@media screen and (min-width: 1440px){


}
`;

export const Div = styled.div`
display: flex;
justify-content: space-between;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const PriseContainer = styled.div`
padding: 0px 0px 0px 0px;
width: 27px;
height: 14px;
margin : 5px;
@media screen and (min-width: 744px){
padding: 0px 0px 0px 0px;
width: 55px;
height: 30px;

}

@media screen and (min-width: 1440px){


}
`;


export const TotalDepositText = styled.p`
font-family: var(--font-family);
font-weight: 200;
font-size: 3px;
line-height: 150%;
color: var(--white);
@media screen and (min-width: 744px){
font-family: var(--font-family);
font-weight: 200;
font-size: 8px;
line-height: 150%;
color: var(--white);

}

@media screen and (min-width: 1440px){


}
`;

export const PriseText = styled.p`
font-family: var(--font-family);
font-weight: 200;
font-size: 5px;
line-height: 135%;
color: var(--white);

@media screen and (min-width: 744px){
font-family: var(--font-family);
font-weight: 200;
font-size: 13px;
line-height: 135%;
color: var(--white);

}

@media screen and (min-width: 1440px){


}
`;

export const DollarSpan = styled.button`
border-radius: 2px;
width: 9px;
border: none;
height: 9px;
padding: 0;
margin: 5px;
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
background: linear-gradient(90deg, #ed1816 0%, #f84215 63.35%, #fe5b14 100%);
@media screen and (min-width: 744px){
border-radius: 5px;
width: 21px;
height: 21px;
margin: 8px;
}

@media screen and (min-width: 1440px){


}
`;

export const DollarIcon = styled.img`
width: 3px;
height: 5px;
@media screen and (min-width: 744px){
width: 6px;
height: 10px;

}

@media screen and (min-width: 1440px){


}
`;

export const GrafikWrapp = styled.div`
width: 70px;
height: 9px;
margin-top: -5%;
@media screen and (min-width: 744px){
width: 152px;
height: 21px;

}

@media screen and (min-width: 1440px){


}
`;


export const GrafikIcon = styled.img`
stroke-width: 0.50px;
stroke: #ff5e5e;
@media screen and (min-width: 744px){
stroke-width: 1.08px;

}

@media screen and (min-width: 1440px){


}
`;



// ! AllProjectsTitle 

export const ContainerProjects = styled.div`
border: 0.25px solid #444;
border-radius: 3px;
width: 70px;
height: 31px;
box-shadow: 0 0 0 0 var(--white), 0 0 0 0px rgba(244, 244, 245, 0.1), 0 0 0 0 rgba(0, 0, 0, 0), 0 3px 4px 0 rgba(0, 0, 0, 0.25);
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
display: flex;
align-items: center;
    justify-content: center;
@media screen and (min-width: 744px){
border: 0.54px solid #444;
border-radius: 6px;
width: 153px;
height: 67px;

}

@media screen and (min-width: 1440px){


}
`;

export const AllProjectsTitle = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 3px;
line-height: 150%;
color: var(--white);

@media screen and (min-width: 744px){
font-family: var(--font-family);
font-weight: 500;
font-size: 8px;
line-height: 150%;
color: var(--white);

}

@media screen and (min-width: 1440px){


}
`;

export const AllProjectsText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 3px;
line-height: 150%;
color: var(--gray-500);

@media screen and (min-width: 744px){
font-family: var(--font-family);
font-weight: 400;
font-size: 7px;
line-height: 150%;
color: var(--gray-500);

}

@media screen and (min-width: 1440px){


}
`;

export const AllProjectsSpann = styled.button`
border-radius: 2px;
border: none;
margin-left: 2px;
padding: 0;
width: 2px;
height: 2px;
background: linear-gradient(90deg, #ed1816 0%, #f84215 63.35%, #fe5b14 100%);

@media screen and (min-width: 744px){
width: 6px;
height: 6px;

}

@media screen and (min-width: 1440px){


}
`;

export const AllProjectsSpannGray = styled.button`
border-radius: 2px;
border: none;
margin-left: 2px;
margin-right: 1px;
padding: 0;
width: 2px;
height: 2px;
background: linear-gradient(90deg,rgb(0, 0, 0) 0%,rgb(23, 20, 20) 63.35%,rgb(0, 0, 0) 100%);

@media screen and (min-width: 744px){
width: 6px;
height: 6px;

}

@media screen and (min-width: 1440px){


}
`;

export const ProzentIconContainer = styled.div`
width: 21px;
height: 21px;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const ProzentText = styled.div`
width: 12px;
height: 8px;
    position: absolute;

p {
font-family: var(--font-family);
font-weight: 400;
font-size: 5px;
text-align: center;
color: var(--gray-500);
    position: absolute;
    top: 6px;
    left:10px;
}

span{
font-family: var(--font-family);
font-weight: 400;
font-size: 2px;
text-align: center;
color: var(--gray-500);
    position: absolute;
    top: 12px;
    left: 9px;
}
@media screen and (min-width: 744px){

p {
font-family: var(--font-family);
font-weight: 400;
font-size: 11px;
text-align: center;
color: var(--gray-500);
top: 0px;
 left: -5px;
}

span{
font-family: var(--font-family);
font-weight: 400;
font-size: 5px;
text-align: center;
color: var(--gray-500);
top: 14px;
left: -11px;
}
}

@media screen and (min-width: 1440px){


}
`;


export const ProzentIcon = styled.img`
width: 21px;
height: 21px;
    position: absolute;
@media screen and (min-width: 744px){
width: 46px;
height: 46px;
 bottom: -24px;
        left: -26px;
}

@media screen and (min-width: 1440px){


}
`;

// ! Expenses

export const GrafikIconRed = styled.img`
stroke-width: 0.50px;
stroke: #ff5e5e;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

// ! task not finished

export const ListIcon = styled.img`
width: 4px;
height: 4px;
@media screen and (min-width: 744px){
width: 10px;
height: 10px;

}

@media screen and (min-width: 1440px){


}
`;

export const TaskText = styled.p`
font-family: var(--font-family);
font-weight: 300;
font-size: 3px;
line-height: 180%;
color: var(--gray-500);
position: relative;
bottom: 5px;
left: 5px;
@media screen and (min-width: 744px){
font-family: var(--font-family);
font-weight: 300;
font-size: 7px;
line-height: 180%;
color: var(--gray-500);

}

@media screen and (min-width: 1440px){


}
`;

const moveGradient = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(30px);
  }
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  width: 60px;
      left: 5px;
    bottom: 4px;
  height: 1px;
  background: #e6eaee;
  border-radius: 3px;
  overflow: hidden;
  @media screen and (min-width: 744px){
border-radius: 7px;
padding: 0px 65px 0px 0px;
width: 130px;
height: 2px;
 bottom: 10px;
}

@media screen and (min-width: 1440px){


}
`;

export const ProgressBar = styled.div`
  position: absolute;
  width: 30px;
  height: 1px;
  border-radius: 1px;
  background: linear-gradient(90deg, #ed1816 0%, #f84215 63.35%, #fe5b14 100%);
  animation: ${moveGradient} 1.5s infinite alternate ease-in-out;

@media screen and (min-width: 744px){
border-radius: 7px;
padding: 0px 65px 0px 0px;
width: 130px;
height: 2px;
  background: linear-gradient(90deg, #ed1816 0%, #f84215 63.35%, #fe5b14 100%);
  animation: ${moveGradient} 1.5s infinite alternate ease-in-out;
}

@media screen and (min-width: 1440px){


}
  `;


// ! projects overview 

export const DivProjects = styled.div`
display: flex;
gap: 6px;
margin: 0 auto;
width: 100%;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 10px;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const ShadowContainer = styled.div`
  position: relative;
  overflow: hidden; /* Запобігає виходу тіні за межі контейнера */
border-radius: 13px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 46px;
    background: linear-gradient(0deg, #101010 0%, rgba(16, 16, 16, 0) 100%);
    pointer-events: none; /* Щоб тінь не заважала клікам */
  }

@media screen and (min-width: 744px){
 

     &::after {
    content: "";
    position: absolute;
      bottom: 31px;
    left: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(0deg, #101010 0%, rgba(16, 16, 16, 0) 100%);
    pointer-events: none; /* Щоб тінь не заважала клікам */
  }

}

@media screen and (min-width: 1440px){


}
`;

export const ProjectsOverviewContainer = styled.div`
border: 0.25px solid #444;
border-radius: 3px;
width: 198px;
height: 110px;
box-shadow: 0 0 0 0 var(--white), 0 0 0 0px rgba(244, 244, 245, 0.1), 0 0 0 0 rgba(0, 0, 0, 0), 0 3px 4px 0 rgba(0, 0, 0, 0.25);
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);

@media screen and (min-width: 744px){
border: 0.54px solid #444;
border-radius: 6px;
width: 432px;
height: 239px;

}

@media screen and (min-width: 1440px){


}
`;

export const ProjectsOverviewTextContainer = styled.div`
padding: 5px 4px 0px 4px;
width: auto;
height: 13px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
flex-wrap: nowrap;

@media screen and (min-width: 744px){
border-radius: 6px 6px 0 0;
padding: 13px 10px 0px 10px;
width: 423px;
height: 29px;

}

@media screen and (min-width: 1440px){


}
    `;

export const ProjectsOverviewText = styled.p`
font-family: var(--font-family);
font-weight: 300;
font-size: 3px;
line-height: 150%;
color: var(--white);

@media screen and (min-width: 744px){
font-family: var(--font-family);
font-weight: 300;
font-size: 8px;
line-height: 150%;
color: var(--white);

}

@media screen and (min-width: 1440px){


}
`;

export const ProjectsOverviewSpanContainer = styled.div`
padding: 0px 0px;
width: 67px;
height: 7px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2px;

@media screen and (min-width: 744px){
padding: 0px 2px;
width: 146px;
height: 16px;

}

@media screen and (min-width: 1440px){


}
`;

export const ProjectsOverviewSpanRed = styled.span`
border-radius: 1px;
padding: 1px 3px 1px 3px;
width: 16px;
height: 7px;

font-family: var(--font-family);
font-weight: 300;
font-size: 3px;
line-height: 150%;
display: flex;
color: var(--white);
text-align: center;
 justify-content: center;
    align-items: center;
box-shadow: 0 0 5px 0 rgba(13, 153, 255, 0.2), inset 0 0px 1px 0 #525154, 0 0 7px -2px rgba(0, 0, 0, 0.5);
background: linear-gradient(90deg, #ed1816 0%, #f84215 63.35%, #fe5b14 100%);
@media screen and (min-width: 744px){
border-radius: 2px;
padding: 2px 8px 2px 7px;
width: 34px;
height: 16px;
font-family: var(--font-family);
font-weight: 300;
font-size: 7px;
line-height: 150%;
text-align: center;
color: var(--white);
}

@media screen and (min-width: 1440px){


}
`;


export const ProjectsOverviewSpan = styled.span`
border-radius: 1px;
padding: 1px 3px 1px 3px;
width: auto;
height: 7px;

font-family: var(--font-family);
font-weight: 300;
font-size: 3px;
line-height: 150%;
display: flex;
color: var(--white);
text-align: center;
 justify-content: center;
    align-items: center;

box-shadow: inset 0 0px 1px 0 #525154, 0 0 7px -2px rgba(0, 0, 0, 0.5);
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);

@media screen and (min-width: 744px){
border-radius: 2px;
padding: 2px 8px 2px 7px;
width: 100%;
height: 16px;
font-family: var(--font-family);
font-weight: 300;
font-size: 7px;
line-height: 150%;
text-align: center;
color: var(--white);
}

@media screen and (min-width: 1440px){


}
`;


export const IconTabl = styled.img`
width: 198px;
height: 97px;

@media screen and (min-width: 744px){
width: 431px;
height: 211px;
        margin-top: 20px;
        width: 431px;
        height: 211px;
}

@media screen and (min-width: 1440px){


}
`;

// ! My To Do Items 

export const MyToDoItemsContainer = styled.div`
border: 0.25px solid #444;
border-radius: 3px;
width: 96px;
height: 110px;

box-shadow: 0 0 0 0 var(--white), 0 0 0 0px rgba(244, 244, 245, 0.1), 0 0 0 0 rgba(0, 0, 0, 0), 0 3px 4px 0 rgba(0, 0, 0, 0.25);
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);

@media screen and (min-width: 744px){
border: 0.54px solid #444;
border-radius: 6px;
width: 209px;
height: 239px;

}

@media screen and (min-width: 1440px){


}
`;

export const MyToDoItemsTitel = styled.h4`
font-family: var(--font-family);
font-weight: 300;
font-size: 3px;
line-height: 150%;
color: var(--white);

@media screen and (min-width: 744px){
font-family: var(--font-family);
font-weight: 300;
font-size: 8px;
line-height: 150%;
color: var(--white);

}

@media screen and (min-width: 1440px){


}
`;

export const MyToDoItemsTextSpam = styled.p`
width: 85px;
height: 5px;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const MyToDoItemsTextOrang = styled.p`
font-family: var(--font-family);
font-weight: 300;
font-size: 3px;
line-height: 150%;
color: var(--orange-500);

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;
//!------------------------------------------//////


export const MyToDoHeaderContainer = styled.div`
width: 95px;
height: 16px;
display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
@media screen and (min-width: 744px){
width: 208px;
height: 36px;

}

@media screen and (min-width: 1440px){


}
    `;

export const MyToDoItems = styled.div`
width: 95px;
height: 90px;

@media screen and (min-width: 744px){
width: 208px;
height: 196px;

}

@media screen and (min-width: 1440px){


}
`;

export const ToDoContainer = styled.div`
// padding: 3px 4px;
width: 95px;
height: 28px;
background: #242424;
 border: 0.5px solid var(--red-50);

 @media screen and (min-width: 744px){
width: 208px;
height: 62px;
}

@media screen and (min-width: 1440px){


}
//
`;

export const WarningOrangContainer = styled.div`
width: 85px;
height: 5px;
 padding: 3px 4px;
display: flex;

@media screen and (min-width: 744px){
width: 186px;
height: 11px;

}

@media screen and (min-width: 1440px){


}
`;

export const IconWarning = styled.img`
width: 4px;
height: 4px;
@media screen and (min-width: 744px){
width: 9px;
height: 9px;

}

@media screen and (min-width: 1440px){


}
`;

export const WarningOrangText = styled.p`
font-family: var(--font-family);
font-weight: 300;
font-size: 3px;
line-height: 150%;
color: var(--orange-500);

@media screen and (min-width: 744px){
font-family: var(--font-family);
font-weight: 300;
font-size: 7px;
line-height: 150%;
color: var(--orange-500);

}

@media screen and (min-width: 1440px){


}
`;

export const CompleteContainer = styled.div`
    height: 13px;
   display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
 @media screen and (min-width: 744px){
height: 29px;

}

@media screen and (min-width: 1440px){


}  
`;

export const DataContainer = styled.div`
display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 7px;
    height: 8px;
    padding: 0;

    @media screen and (min-width: 744px){
height: 29px;
 gap: 10px;
 align-items: center;
}

@media screen and (min-width: 1440px){


}
`;

export const DataContainerText = styled.div`
display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 4px;

`;


export const PointIcon = styled.img`
width: 2px;
height: 3px;

@media screen and (min-width: 744px){
width: 4px;
height: 8px;

}

@media screen and (min-width: 1440px){


}
`;

export const MyToDoListBoxCheck = styled.p`
border: 0.25px solid #444;
border-radius: 1px;
width: 4px;
height: 4px;

box-shadow: inset 0 0px 1px 0 #525154, 0 0 7px -2px rgba(0, 0, 0, 0.5);
background: var(--black-350);

@media screen and (min-width: 744px){
width: 10px;
height: 10px;

}

@media screen and (min-width: 1440px){


}
`;

export const CompleteText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 3px;
color: var(--white);

@media screen and (min-width: 744px){
font-family: var(--font-family);
font-weight: 300;
font-size: 7px;
color: var(--white);

}

@media screen and (min-width: 1440px){


}
`;


export const MyToDoBoxContainer = styled.div`
padding: 0px 0px 6px 0px;
width: 15px;
height: 13px;
display: flex;
gap: 2px;

@media screen and (min-width: 744px){
padding: 0px 0px 14px 0px;
width: 34px;
height: 29px;
gap: 4px;

}

@media screen and (min-width: 1440px){


}
`;
export const MyToDoListText = styled.p`
font-family: var(--font-family);
font-weight: 300;
font-size: 3px;
color: var(--white);
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;

export const DeleteIconBox = styled.button`
border-radius: 1px;
padding: 0px;
width: 6px;
height: 6px;
box-shadow: inset 0 0px 1px 0 #525154, 0 0 7px -2px rgba(0, 0, 0, 0.5);
background: var(--red-50);
border: none;
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

      @media screen and (min-width: 744px){
border-radius: 3px;
width: 15px;
height: 15px;

}

@media screen and (min-width: 1440px){


}
`;

export const WriteOrangeBox = styled.span`
  border-radius: 1px;
  width: 6px;
  height: 6px;
  padding: 0px;
  box-shadow: inset 0 0px 1px 0 #525154, 0 0 7px -2px rgba(0, 0, 0, 0.5);
  border: none;
  background: linear-gradient(90deg, #ed1816 0%, #f84215 63.35%, #fe5b14 100%);
  display: inline-block;
  text-align: center;
  @media screen and (min-width: 744px){
border-radius: 3px;
width: 15px;
height: 15px;

}

@media screen and (min-width: 1440px){


}
`;


export const DeleteIcon = styled.img`
width: 3px;
height: 3px;
stroke-width: 0.25px;
stroke: #ff5e5e;
@media screen and (min-width: 744px){
width: 8px;
height: 8px;

}

@media screen and (min-width: 1440px){


}
`;

export const EditorIcon = styled.img`
width: 3px;
height: 3px;
stroke-width: 0.25px;
stroke:  #ff5e5e;
margin: 1px;
@media screen and (min-width: 744px){
width: 8px;
height: 8px;

}

@media screen and (min-width: 1440px){


}
`;

export const DataText = styled.p`
font-family: var(--font-family);
font-weight: 300;
font-size: 3px;
line-height: 150%;
color: var(--gray-500);
text-align: start;


@media screen and (min-width: 744px){
font-family: var(--font-family);
font-weight: 300;
font-size: 7px;
line-height: 150%;
color: var(--gray-500);

}

@media screen and (min-width: 1440px){


}
`;












