import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.scss'
import {handleCreatLoginApi} from '../../services/Api';
class Sigin extends Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password:''
        }
    }
    
    handleInput = (event) =>{
        this.setState({
            [event.target.name]:event.target.value,
        })
    }
    
    handleLogin =async()=>{
        try{
            let data = await handleCreatLoginApi(this.state.email,this.state.password)
            if (data && data.errCode===0){
              console.log("success")
            }
        }catch(e){
            console.log(e)
        }
    }
    render(){
        return(
           <form>
            <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
                <div className="card p-4 shadow-sm rounded">
                <h2 className="col mb-4">SIGIN</h2>
                    <div className="mt-3">
                        <input type="email" className=" form-control" placeholder='Email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleInput}
                        autoComplete='email'/>
                    </div>
                    <div className="mt-3">
                        <input type="password" className="form-control" placeholder='Password'
                        name='password'
                         value={this.state.password}
                         onChange={this.handleInput}
                         autoComplete="password"/>
                    </div>
                    <Link to="/login"><button type="button" className="btn btn-primary mt-3" onClick={()=>{this.handleLogin()}}>SIGIN</button></Link>
                </div>
            </div>
          
           </form>
        );
    }
}
export default (Sigin);