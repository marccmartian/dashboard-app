import styled from '@emotion/styled';

export const MainHeader = styled.header`
  width: 100%;
  background-color: #BDEEFF;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const HeaderResponsive = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ( max-width: 400px){
    height: 70px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

export const DivCenter = styled.div`
  width: 80%;
  margin: 0 auto;

  @media ( min-width: 401px) and (max-width: 960px) {
    width: 70%;
  } 
`;

export const MainContainer = styled.main`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-wrap: wrap; 
  
  @media ( min-width: 401px) and (max-width: 960px) {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media (min-width: 961px){
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
`;