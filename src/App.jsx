
import LandingScreen from './components/LandingScreen/LandingScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import Details from './components/Profile/Profile.jsx';
import SignUp from './components/SignUp/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className='main-app-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<LandingScreen/>}/>
          <Route path='/login-screen' element={<LoginScreen/>}/>
          <Route path = '/Profile' element={<Details/>}/>
          <Route path = '/sign-up' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
