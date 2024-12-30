import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Projets from './pages/Projets';
// import Contact from './pages/Contact';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <BrowserRouter>
    <Navigation />
<Routes>
<Route path="/" element={<Accueil />} />
<Route path="/projets" element={<Projets />} />
<Route path="*" element={<Accueil />} />
{/* Mettre plutot une erreur pour l'*  */}
</Routes>
    </BrowserRouter>
  );
};

export default App;