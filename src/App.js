import './styles/main.css';
import  Login  from './pages/Login/Login';
import  TeamContainer  from './pages/Home/TeamContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header/Header'
import  HeroeDetailContainer  from './pages/HeroDetail/HeroeDetailContainer';
import { useEffect } from 'react';
import { useAppContext } from './context/Context'
import NotFound from './pages/NotFound/NotFound'

function App() {
  //10159573617364605	token API
  const { loggedIn, setLoggedIn } = useAppContext()
  useEffect(() => {
    setLoggedIn(window.sessionStorage.getItem('loggedIn'))
    console.log(loggedIn)
  }, [loggedIn])
  
  return (
    <>
    <Header />  
    <Routes> 
      <Route path="/" element={ <Login/> }/>
      <Route element={ loggedIn ? <Outlet /> : <Login />} >
                <Route path="/heroeDetail/:heroId" element={<HeroeDetailContainer /> } />
                <Route path="/home" element={<TeamContainer/> } />
                <Route
                path="*"
                element={<NotFound/>}/>
        </Route>
    </Routes>
    </>
  );
}



export default App;
