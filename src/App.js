// import logo from './logo.svg';
import './App.css';
import Layout from './Components/subComponents/Layout';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Components/subComponents/Login';
import Signup from './Components/subComponents/Signup';
import Contact from './pages/Contact'
import Work from './pages/work'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Final from './pages/Final'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/final" element={<Final/>}/>

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
