import React from 'react';
import './App.css';
import GlobalCss from './components/globalCss';
import { ServicesList } from './features/services/ServicesList';

function App() {
  return (
    <>
      <GlobalCss />
      <ServicesList />
    </>
  );
}

export default App;
