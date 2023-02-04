import Home from './pages/Home';
import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/Home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
