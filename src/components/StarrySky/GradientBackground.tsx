import styled from 'styled-components';

export const GradientWrapper = styled.div`
  position: absolute;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #fe5b14 0%, rgba(0, 0, 0, 0) 70%);
  border-radius: 50%;
  z-index: 1;
  filter: blur(80px);

      @media screen and (min-width: 744px){
        top: -41%;
        left: 50%;
        transform: translateX(-50%);
        background: radial-gradient(circle, #fe5b14 0%, rgba(0, 0, 0, 0) 209%);
        border-radius: 50%;
        z-index: 1;
        filter: blur(160px);
        height: 500px;
        width: 500px;

}

@media screen and (min-width: 1440px){


}
`;

export const GradientBackground = () => {
  return <GradientWrapper />;
};
