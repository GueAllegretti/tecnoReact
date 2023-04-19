import Nav from './nav';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Teams from '../pages/teams';
import Projects from '../pages/projects';

const Layout = () => {
    <>
    {/* <Nav /> */}
    <BrowserRouter>
      <Routes>
        <Route path='teams' element={<Teams />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </>
}

export default Layout;
