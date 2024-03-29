import  React from "react";
import axios from "axios";

class Abandon extends React.Component{
    state={etudiant:[]}
    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/abandon")
        .then(
            res=>{this.setState({etudiant: res.data})}
        )
    }
   render(){
    return(
        <>
        <div className="container">
        <div className="jumbotron jumbotron-fluid text-success">Nombre d'abandons:{this.state.etudiant.length} </div>     
        <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Email</th>
                                <th>Date de naissance</th>
                                <th>Sexe</th>
                                <th>Niveau</th>
                                <th>Tel</th>
                                <th>profession_parents</th>
                                <th>Nom Entreprise</th>
                                <th>Durée de l'alternance</th>
                            </tr>
                        </thead>
                        <tbody>                
                            {this.state.etudiant.length !== 0 &&
                            this.state.etudiant.map((element) => 
                                <tr>
                                    <td>{element.nom}</td>
                                    <td>{element.prenom}</td>
                                    <td>{element.email}</td>
                                    <td>{element.date_naissance}</td>
                                    <td>{element.sexe}</td>
                                    <td>{element.niveau}</td>
                                    <td>{element.telephone}</td>
                                    <td>{element.profession_parents}</td>
                                    <td>{element.nom_entreprise}</td>
                                    <td>{element.duree}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
        </div>
        </>
    )
   }

}
export default Abandon