import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import LoginScreen from './screens/Loginscreen';
import SignupScreen from './screens/SignupScreen';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (

    <>
      {/* <Nav /> */}
      {/* <Home /> */}
      {/* <LoginScreen /> */}
      {/* <SignupScreen /> */}
      {/* <Footer /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" Component={Home} /> */}
          <Route path="/" Component={Home} />
          <Route path='/login' Component={LoginScreen} />
          <Route path="/signup" Component={SignupScreen} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
