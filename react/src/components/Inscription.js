import axios from "axios";
import React from "react";
import {Redirect} from "react-router-dom";

class Inscription extends React.Component {
    state = {
        name: "",
        email:"",
        password: "",
        confirm_password:"",
        redirect: false
    }

    componentWillMount(){
        if(localStorage.getItem('token'))
        {this.setState ({redirect: true})}
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    handleConfirmPasswordChange = (e) => {
        this.setState({confirm_password: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('inscription')

        let bodyFormData = new FormData()
        bodyFormData.set('name', this.state.name)
        bodyFormData.set('email', this.state.email)
        bodyFormData.set('password', this.state.password)
        bodyFormData.set('confirm_password', this.state.confirm_password)

        axios.post('http://127.0.0.1:8000/api/register', bodyFormData)
        .then(res=> {
            this.setState ({redirect: true})
            //localStorage.setItem("token", JSON.stringify(res.data.api_token))
            // var exemple = JSON.stringify(res.data.api_token)
            // localStorage.setItem('token', exemple)
            localStorage.setItem('token',JSON.stringify (res.data.api_token))
        })
        .catch(error => {
            console.log(error.response)
        })
    }

    render() {
         if(this.state.redirect){
             return (<Redirect to="/" />)
         }
        return (
            <>
                <div className="container w-50">
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <h2 className="text-center my-5">Inscription</h2>
                        <div className="mb-3">
                            <label htmlFor="pwd">Name:</label>
                            <input type="text" class="form-control" placeholder="Enter name" id="name" onChange={this.handleNameChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" class="form-control" placeholder="Enter email" id="email" onChange={this.handleEmailChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" class="form-control" placeholder="Enter password" id="pwd" onChange={this.handlePasswordChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd">Confirmation Password:</label>
                            <input type="password" class="form-control" placeholder="Enter password" id="confirm_password" onChange={this.handleConfirmPasswordChange} required />
                        </div>
                            <button type="submit" className="btn btn-primary">S'inscrire</button>                      
                    </form>
                </div> 
            </>
        )
    }
}

export default Inscription;