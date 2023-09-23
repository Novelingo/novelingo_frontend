import { Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Novels from './pages/Novels';
import Generate from './pages/Generate';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/novels' element={<Novels />} />
      <Route path='/generate' element={<Generate />} />
    </Routes>
    </BrowserRouter>

  );
}


export default App;
