import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Homepage from './components/Homepage';
import Destination from './components/Destination';
import { motion, AnimatePresence } from "framer-motion";
import Crew from './components/Crew';
import Technology from './components/Technology';

function App() {

  return (
    <BrowserRouter>
     <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
     </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
