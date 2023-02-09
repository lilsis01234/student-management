import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Masculin extends React.Component{
    state={etudiant:[]}

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/masculin")
        .then(
            res=>{this.setState({etudiant: res.data})}
        )
    }

   render(){
    return(
        <>
        <center>
        <div className="mere">
        <button className="bouton"><Link to="/masculinL1" className="lien">L1</Link></button>
        <button className="bouton"><Link to="/masculinL2" className="lien">L2</Link></button>
        <button className="bouton"><Link to="/masculinL3" className="lien">L3</Link></button>
        <button className="bouton"><Link to="/masculinM1" className="lien">M1</Link></button>
        <button className="bouton"><Link to="/masculinM2" className="lien">M2</Link></button>
        </div>
        <div className="mere">
        <button className="bouton2"><Link to="/devmasculin" className="lien">DEV</Link></button>
        <button className="bouton2"><Link to="/rsimasculin" className="lien">RSI</Link></button>
        <button className="bouton2"><Link to="/cybmasculin" className="lien">CYB</Link></button>
        <button className="bouton2"><Link to="/msimasculin" className="lien">MSI</Link></button>
        </div>
        </center>
        <div className="container">
        <div className="jumbotron jumbotron-fluid text-success">Nombre de garçons: {this.state.etudiant.length}</div>     
        <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Email</th>
                                <th>Date de naissance</th>
                                <th>Niveau</th>
                                <th>Tel</th>
                                <th>profession_pere</th>
                                <th>profession_mere</th>
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
                                    <td>{element.niveau}</td>
                                    <td>{element.telephone}</td>
                                    <td>{element.profession_pere}</td>
                                    <td>{element.profession_mere}</td>
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
export default Masculin