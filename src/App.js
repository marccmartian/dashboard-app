import React from 'react';
import './App.css';
import GlobalCss from './components/globalCss';
import { ServicesList } from './features/services/ServicesList';
import { SelectForm } from './components/SelectForm';
import { DateButtons } from './components/DateButtons'
import { MainHeader, DivCenter, HeaderResponsive } from './components/styledComponents';

function App() {
  return (
    <>
      <GlobalCss />

      <MainHeader>
        <DivCenter>
          <HeaderResponsive>
            <SelectForm />
            <DateButtons />
          </HeaderResponsive>
        </DivCenter>
      </MainHeader>

      <DivCenter>
        <ServicesList />
      </DivCenter>
    </>
  );
}

export default App;
