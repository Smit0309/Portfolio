import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import ProjectContainer from './pages/homepage/project/projectcontainer';
import {Homepage} from './pages/homepage/Homepage'
import { Skils } from './pages/homepage/skills/skills';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/skills' element={<Skils/>}/>
          <Route path='/project' element={<ProjectContainer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
