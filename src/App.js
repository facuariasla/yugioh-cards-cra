import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/Homepage';
import { Info } from './pages/Info';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { SignIn } from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
