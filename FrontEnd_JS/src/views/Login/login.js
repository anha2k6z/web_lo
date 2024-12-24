import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.scss'
import {handleLoginApi} from '../../services/Api';

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password:'',
        }
    }
    handleInput = (event) =>{
        this.setState({
            [event.target.name]:event.target.value,
        })
    }
    handleLogin = async ()=>{
       this.setState({
        errMessage:''
       })
       try{
        let data = await handleLoginApi(this.state.email,this.state.password)
        if(data && data.errCode!==0){
            this.setState({
                errMessage:data.errMessage
            })
        }
        if(data && data.errCode ===0){
            this.props.userLoginSuccess(data.user)
            console.log("Login success")
            //return <Redirect to={this.state.redirect}/>
            //return <Navigate to="/">
        }
       }catch(error){
        if(error.response){
            if(error.response.data){
                this.setState({
                    errorMessage:error.response.data.message
                })
            }
        }
       }
    }
    render(){
        return(
           <form>
            <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
                <div className="card p-4 shadow-sm rounded">
                <h2 className="col mb-4">LOGIN</h2>
                    <div className="mt-3">
                        <input type="email" className=" form-control" placeholder='Email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleInput}
                        autoComplete="email"/>
                    </div>
                    <div className="mt-3">
                        <input type="password" className="form-control" placeholder='Password'
                        name='password'
                         value={this.state.password}
                         onChange={this.handleInput}
                         autoComplete="password"/>
                    </div>
                    <Link to='/sigin' className="btn-link mt-3">Create Sigin</Link>
                   <Link to="/"><button type="button" className="btn btn-primary mt-3" onClick={()=>{this.handleLogin()}}>LOGIN</button></Link>
                </div>
            </div>
          
           </form>
        );
    }
}

export default (Login);