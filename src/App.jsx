import React, { useContext, useEffect } from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import { AppContext } from './Context/AppContext';
import Footer from './Components/Footer';
import Movies from './Pages/Movies';
import Search from './Pages/Search';
import TVshows from './Pages/TVshows';

function App() {
  const {fetchData} = useContext(AppContext);
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className='flex flex-col items-center bg-gray-200'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/movies" element={<Movies></Movies>} />
        <Route path="/TVshows" element={<TVshows></TVshows>} />
        <Route path="/search" element={<Search></Search>} /> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App