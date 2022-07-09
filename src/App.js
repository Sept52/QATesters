import './App.css';
import Home from './components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Info from './components/Pages/Info/Info';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/info/:id" element={<Info />}/>
      </Routes>
    </div>
  );
}

export default App;
