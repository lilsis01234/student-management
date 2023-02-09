import React from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Connexion extends React.Component {
    state = {
        email:"",
        password: "",
        redirect: false,
        errors: []
    }

    componentWillMount(){
        if(localStorage.getItem('token'))
        {this.setState ({redirect: true})}
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log('connexion')

        let bodyFormData = new FormData()
        bodyFormData.set('email', this.state.email)
        bodyFormData.set('password', this.state.password)

        axios.post('http://127.0.0.1:8000/api/login', bodyFormData)
        .then(res=> {
            this.setState ({redirect: true})
            localStorage.setItem('token', JSON.stringify(res.data.api_token))
        })
        .catch(error => {
            if(error.response.status === 401){
                this.setState({ errors : error.response.data.errors}, ()=> console.log(this.state))
            }
        })
    }

    render() {
        if(this.state.redirect){
            return (<Redirect to="/" />)
        }
        return (
            <>
            
                <div className="container w-50">
                <div className="bord">
                    <center>
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <h2 className="text-center my-5">Connexion</h2>
                        <div className="mb-3">
                            <label for="email">Email address:</label>
                            <input type="email" class="form-control form-sm" placeholder="Enter email" id="email" onChange={this.handleEmailChange} required />
                            { this.state.errors && this.state.errors.email ? <div className="invalid-feedback">{ this.state.errors['email']}</div> :  '' }
                        </div>
                        <div  className="mb-3">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control form-sm" placeholder="Enter password" id="pwd" onChange={this.handlePasswordChange} required />
                            { this.state.errors && this.state.errors.password ? <div className="invalid-feedback">{ this.state.errors['password']}</div> : '' }
                        </div>
                            <button type="submit" className="btn btn-primary">Se connecter</button>                      
                    </form>
                    </center>
                </div> 
                </div>
            </>
        )
    }
}

export default Connexion;