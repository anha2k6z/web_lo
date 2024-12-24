// điều hướng website
import React from 'react';
import {link} from 'react-router-dom';

const  Header = () =>{
    <header>
        <ul>
            <li><link to="/">Home</link></li>
            <li><link to="/login">Login</link></li>
            <li><link to ="/sigin">Sigin</link></li>
            <li><link to ="/sanpham">SanPham</link></li>
            <li><link to ="/thanhtoan">ThanhToan</link></li>
        </ul>
    </header>
}
export default Header 