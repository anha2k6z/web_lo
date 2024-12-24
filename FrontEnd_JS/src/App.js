import React from 'react';
import { BrowserRouter ,Routes,Route, Navigate } from 'react-router-dom';
import Header from './components/Header'
import Home from './views/home';
import Login from '../src/views/Login/login';
import Sigin from '../src/views/Login/sigin';
import Sp from "./views/sp"
import ThanhToan from './views/thanhtoan';
const App = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/sigin" element={<Sigin/>}/>
                <Route path="/sanpham" element={<Sp/>}/>
                <Route path="/thanhtoan" element={<ThanhToan/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
