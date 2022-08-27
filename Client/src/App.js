
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import HomePage from './Components/Home/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
