
import './App.css';
import { Routes,Route}from 'react-router-dom'
import { HomePage } from './components/pages/HomePage';
import { Users } from './components/pages/Users';
import { AboutPage } from './components/pages/AboutPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { Layout } from './components/Layout';
import { SiglPage } from './components/pages/SinglPage';
import { SiglHomePage } from './components/pages/SinglHomePage';

function App() {
  return (
    <div className="App">
    
 

      <Routes>
        <Route  path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/:id' element={<SiglHomePage/>}/>
        <Route path='users' element={<Users/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='about/:id' element={<SiglPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        </Route>
 

      </Routes>
    </div>
  );
}

export default App;
