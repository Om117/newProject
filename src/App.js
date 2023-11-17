import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Posts from './components/Posts';
import YourPosts from './components/YourPosts';
import Addpostscreen from './screens/Addpostscreen';
import LoginScreen from './screens/Loginscreen';
import SignupScreen from './screens/SignupScreen';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
function App() {
  let { userId } = useParams();
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={LoginScreen} />
          <Route path="/home" Component={Home} />
          <Route path='/posts' Component={YourPosts} />
          <Route path="/signup" Component={SignupScreen} />
          <Route path="/addpost" Component={Addpostscreen} />
          <Route path='/contact' Component={Contact} />
          <Route path='/about' Component={About} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
