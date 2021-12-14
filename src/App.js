import './styles/main.css';
import  Login  from './pages/Login';
import  HeroesListContainer  from './pages/HeroesListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'
import  HeroeDetailContainer  from './pages/HeroeDetailContainer';
import { useState, useEffect } from 'react';
import { useLoginContext } from './context/Context'

function App() {
  //10159573617364605	token API
  const { loggedIn, handleLoggedIn } = useLoginContext()

  useEffect(() => {
    handleLoggedIn(window.sessionStorage.getItem('loggedIn'))
    console.log(loggedIn)
  }, [loggedIn])
  
  return (
    <>
    <Navbar />  
    <Routes> 
      <Route path="/" element={ <Login/> }/>
      <Route element={ loggedIn ? <Outlet /> : <Login />} >
                <Route path="/heroeDetail/:heroId" element={<HeroeDetailContainer /> } />
                <Route path="/home" element={<HeroesListContainer/> } />
                <Route
                path="*"
                element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }/>
        </Route>
    </Routes>
    </>
  );
}



export default App;
