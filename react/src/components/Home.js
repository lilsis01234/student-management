import React from "react";
import axios from "axios";
 import { Link } from 'react-router-dom'
import "./edm.css";

const Liste = () =>{  
    return (
        <>
        <center>
        <h1><em> Il n'y a point d'ascenseur vers le succès, il faut prendre les escaliers </em></h1>
        <table>
        <tr class="espace">
        <td> <button class="temps"><h4 class="tps"> <em><Link class="lien"to="/etudiants/niveau5">M2</Link></em></h4></button></td>
        </tr>
        <tr>
        <td> <button class="argent"><h4 class="arg"> <em><Link class="lien"to="/etudiants/niveau4">M1</Link></em></h4> </button></td>
        </tr>
        <tr class="espace"></tr>
        <tr>
        <td> <button class="stress"><h4 class="str"> <em><Link class="lien"to="/etudiants/niveau3">L3</Link></em></h4></button></td>
        </tr>
        <tr>
        <td> <button class="distraction"><h4 class="dis"> <em><Link class="lien"to="/etudiants/niveau2">L2</Link></em></h4>  </button></td>
        </tr>
        <tr class="espace"></tr>
        <tr>
         <td><button class="reunion"><h4 class="rn"><Link class="lien"to="/etudiants/niveau">L1</Link></h4> </button></td>
        </tr>
        </table>
       

        </center>
        </>
        
        )}
class Home extends React.Component {
    state = {
        etudiants: [],
        search: ''
    }

    componentDidMount(){
        axios.post('http://127.0.0.1:8000/api/etudiants')
        .then(res => {
            this.setState({etudiants: res.data})
        })
        .catch(error => {
            console.log(error.response)
        })
    }

    handleSearchChange = (e) =>{
        this.setState({search: e.target.value})
        if(this.state.search === '') {
            this.getEtudiants()
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.getEtudiants()
    }

    getEtudiants(){
        let bodyFormData = new FormData()
        bodyFormData.set('search', this.state.search)

        axios.post('http://127.0.0.1:8000/api/etudiants', bodyFormData)
        .then(res => {
            this.setState({etudiants: res.data})
        })
        .catch(error => {
            console.log(error.response)
        })
    }
    // state = {
    //     token: null
    // }

    logout = () => {
        localStorage.setItem('token', '')
        localStorage.clear()
        this.setState({token: null})
    }
    render(){
        return (
            <>
                {localStorage.getItem('token')
                ? 
                <div>
                <div className="container"></div>
                <div className="fils"><Liste></Liste></div>
                </div>
                :
                <center>
                <div className="container w-40">    
                <div className="bord2"> 
                 <p></p><br></br>  
                     <center>    
                     <h1 className="color">BIENVENUE SUR ESTICS DATABASE MANAGEMENT</h1>
                     </center>
                     </div>
                 </div>
                 </center>
                }
            </>   
            )
    }
}
export default Home
