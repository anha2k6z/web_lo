import React, { Component } from 'react'; // Import React và Component từ React
import {Link} from 'react-router-dom';
// Đảm bảo class kế thừa từ React.Component
class Home extends Component {
    constructor(props) {
        super(props);  // Gọi super(props) để kế thừa các thuộc tính từ React.Component
    }
    render() {
        return (
            <div className="navbar-container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* Logo hoặc Tên Website */}
                    <a className="navbar-brand" >Home</a>
                    {/* Các liên kết điều hướng */}
                    <div className="navbar-nav ml-auto">
                        <Link to="/sanpham"className="nav-item nav-link">Sản Phẩm</Link>
                        <Link to="/thanhtoan" className="nav-item nav-link" >Thanh Toán</Link>
                        <Link to="/login" className="nav-item nav-link">Login</Link>
                    </div>
                   
                </div>
                </nav>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-4 d-flex flex-column align-items-center">
                        <h2>Sản Phẩm</h2>
                        <img src="https://icdn.24h.com.vn/upload/2-2022/images/2022-05-01/2-1651360418-437-width660height440.jpg" className="w-75 container p-2"/>
                        <p className="p-5">Thông Tin</p>
                        </div>
                        <div className="col-sm-4 d-flex flex-column align-items-center">
                        <h2>Sản Phẩm</h2>
                        <img src="https://icdn.24h.com.vn/upload/2-2022/images/2022-05-01/2-1651360418-437-width660height440.jpg" className="w-75 container p-2"/>
                        <p className="p-5"> Thông Tin </p>
                        </div>
                        <div className="col-sm-4 d-flex flex-column align-items-center">
                        <h2>Sản Phẩm</h2>
                        <img src="https://icdn.24h.com.vn/upload/2-2022/images/2022-05-01/2-1651360418-437-width660height440.jpg" className="w-75 container p-2"/>
                        <p className=" p-5 text-center"> Thông Tin </p>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
}

export default Home;  // Export component Home
