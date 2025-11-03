
import './App.css';
import Form from './Form';
import SideNavbar from './SideNavbar';
import Home from './Home';
import Women from './Women';
import Men from './Men';
import Kids from './Kids';
import Beauty from './Beauty';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
function App() {
  return (
    
  <Router>
    <Form/>
    <div className="App">
  
      <SideNavbar />   {/* Navbar visible on every page */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/beauty" element={<Beauty />} />
      </Routes>
      </div>
    </Router>

  
  )
}

export default App;
