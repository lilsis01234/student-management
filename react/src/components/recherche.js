import React from "react";
import "./edm.css"
import esti from './esti.jpg'
import recherche from "./recherche.jfif"
import axios from "axios";

class Recherche extends React.Component {
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
    render(){
      return(
        <>
         <div>
           <center> <td> <div id="col1"><img className="image" src={esti} alt= ""/><h1 className="blanc"><em>LA PORTE DE DEMAIN</em></h1></div></td></center>
            <div className="d-flex justify-content-center mb-5" id="flex">
                <img src={recherche} className="mini" alt=""/>
                <form className="form-inline my-2 my-lg-0" method="POST" onSubmit={this.handleSubmit} >
                    <input className="form-control mr-sm-2" name="search" type="search" placeholder="Chercher ici" onChange={this.handleSearchChange} />
                </form>
                </div>
                <div className="jumbotron jumbotron-fluid text-success">Nombre d'étudiants: {this.state.etudiants.length}</div>    
               <h2>Récents</h2>        
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Niveau</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Sexe</th>
                        <th>profession pere</th>
                        <th>profession mere</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.etudiants.map(etudiant => 
                            <tr>
                                <td>{etudiant.niveau}</td>
                                <td>{etudiant.nom}</td>
                                <td>{etudiant.prenom}</td>
                                <td>{etudiant.email}</td>
                                <td>{etudiant.sexe}</td>
                                <td>{etudiant.profession_pere}</td>
                                <td>{etudiant.profession_mere}</td>
                                {/* <td><Link to={`/etudiants/${etudiant.id}`} className="btn btn-primary" >En savoir plus</Link></td> */}
                            </tr>
                        )}
                    </tbody>
                </table>
                </div>
           </>
    )
}
}
export default Recherche;