/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/Layout';
import { BackgroundPatterns } from './components/ui/ChronicleComponents';
import Home from './pages/Home';
import Commodities from './pages/Commodities';
import About from './pages/About';
import Trust from './pages/Trust';
import Quote from './pages/Quote';
import LcGuide from './pages/LcGuide';

export default function App() {
  return (
    <Router>
      <BackgroundPatterns />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commodities" element={<Commodities />} />
          <Route path="/commodities/:id" element={<Commodities />} />
          <Route path="/about" element={<About />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/lc-guide" element={<LcGuide />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

