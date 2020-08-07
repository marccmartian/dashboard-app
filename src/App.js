import React from 'react';
import './App.css';
import GlobalCss from './components/globalCss';
import { ServicesList } from './features/services/ServicesList';
import { SelectForm } from './components/SelectForm';
import { MainHeader, DivCenter } from './components/styledComponents';

function App() {
  return (
    <>
      <GlobalCss />

      <MainHeader>
        <DivCenter>
          <SelectForm />
        </DivCenter>
      </MainHeader>

      <DivCenter>
        <ServicesList />
      </DivCenter>
    </>
  );
}

export default App;
