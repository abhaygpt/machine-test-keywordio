
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Dasboard from './Components/Dasboard';
import Createads from './Components/Createads';
import Table from './Components/Table';
import Chart from './Components/Chart';
import Textform from './Components/Textform';
import Mediaform from './Components/Mediaform';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Dasboard />} />
    <Route path='/ads' element={<Createads />} />
    <Route path='/chart' element={<Chart />} />
    <Route path='/table' element={<Table />} />
    <Route path='/textform' element={<Textform />} />
    <Route path='/mediaform' element={<Mediaform />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
