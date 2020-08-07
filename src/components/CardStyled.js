import styled from '@emotion/styled';

export const CardContainer = styled.article`
  width: 280px;
  height: 160px;
  border-radius: 6px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.30);
  position: relative;
  
  @media ( max-width: 400px){
    margin-bottom: 30px;
  }
  @media ( min-width: 401px) and (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 75%;
  padding: 10px;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
`;

export const CardTitle = styled.h1`
  // margin-bottom: 10px;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;

  p:nth-of-type(2){
    display: flex;
    align-items: center;
  }
`;

export const Circle = styled.span`  
  width: 16px;
  height: 16px;
  margin-right: 4px;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
`;

export const CardProgress = styled.progress`
  width: 100%;
  height: 25px;
`;

export const CardFooter = styled.footer`
  width: 100%;
  border-radius: 0 0 6px 6px;
  background-color: #BDEEFF;
  // background-color: #F4F6F6;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;

  div {
    display: flex;
    align-items: center;
  }
`;
