import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Addlaptop from './Components/Addlaptop';
import Viewalllap from './Components/Viewalllap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addl' element={<Addlaptop/>}/>
      <Route path='/viewl' element={<Viewalllap/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
