import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DiagnosticoPage from './pages/DiagnosticoPage';
import ContatoPage from './pages/ContatoPage';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="diagnostico" element={<DiagnosticoPage />} />
          <Route path="contato" element={<ContatoPage />} />
        </Route>
      </Routes>
      <WhatsAppButton />
    </>
  );
}

export default App;