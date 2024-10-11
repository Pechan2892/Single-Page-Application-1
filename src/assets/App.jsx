
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import MusicList from './Pages/MusicList';
import FormPage from './Pages/FormPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './styles/global.css';
import './styles/App.css';

const App =() =>{
 

  return (
    <>
    <Router>
      <div className = "App">
        <Header/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/music" element = {<MusicList/>}/>
          <Route path = "/signup" element = {<FormPage/>}/>
        </Routes>
        <Footer/>
      </div>
      
      </Router>
    </>
  );
}

export default App;
