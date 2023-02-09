import React from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class PostEtudiant extends React.Component {

   state = {
    nom: '',
    prenom: '',
    date_naissance: '',
    email: '',
    sexe: '',
    niveau: '',
    filiere: '',
    telephone: '',
    profession_pere: '',
    profession_mere: '',
    etablissement_origine: '',
    nom_entreprise: '',
    duree: '',
    redirect: false,
    errors: []
   }

    handleNameChange = (e) => {
        this.setState({nom: e.target.value})
    }

    handleLastNameChange = (e) => {
        this.setState({prenom: e.target.value})
    }

    handleBirthChange = (e) => {
        this.setState({date_naissance: e.target.value})
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    handleLevelChange = (e) => {
        this.setState({niveau: e.target.value})
    }
    handleFiliereChange = (e) => {
        this.setState({filiere: e.target.value})
    }

    handleSexeChange = (e) => {
        this.setState({sexe: e.target.value})
    }

    handleTelChange = (e) => {
        this.setState({telephone: e.target.value})
    }

    handlePpChange = (e) => {
        this.setState({profession_pere: e.target.value})
    }
    handlePmChange = (e) => {
        this.setState({profession_mere: e.target.value})
    }
    handleEoChange = (e) => {
        this.setState({etablissement_origine: e.target.value})
    }

    handleEntrepriseChange = (e) => {
        this.setState({nom_entreprise: e.target.value})
    }

    handleDurationChange = (e) => {
        this.setState({duree: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('Etudiant créer')

        let bodyFormData = new FormData()
        bodyFormData.set('email', this.state.email)
        bodyFormData.set('nom', this.state.nom)
        bodyFormData.set('prenom', this.state.prenom)
        bodyFormData.set('date_naissance', this.state.date_naissance)
        bodyFormData.set('sexe', this.state.sexe)
        bodyFormData.set('niveau', this.state.niveau)
        bodyFormData.set('filiere', this.state.filiere)
        bodyFormData.set('telephone', this.state.telephone)
        bodyFormData.set('profession_pere', this.state.profession_pere)
        bodyFormData.set('profession_mere', this.state.profession_mere)
        bodyFormData.set('etablissement_origine', this.state.etablissement_origine)
        bodyFormData.set('nom_entreprise', this.state.nom_entreprise)
        bodyFormData.set('duree', this.state.duree)

        let headers = {
            headers: {
                'API-TOKEN': localStorage.getItem('token')
            }
        }

        axios.post('http://127.0.0.1:8000/api/etudiants/store', bodyFormData, headers)
        .then(res=> {
            this.setState ({redirect: true})
        })
        .catch(error => {
            if(error.response.status === 401){
                this.setState({ errors : error.response.data.errors}, ()=> console.log(this.state))
            }
        })
    }

    render(){
        if(this.state.redirect){
            return (<Redirect to="/" />)
        }
        return(
            <>
                <div className="container w-50">
                    <h2>Ajouter un Etudiant</h2>
                    <form className="form-inline "  method="POST" onSubmit={this.handleSubmit}>
                        <div  className="mb-3">
                        <label htmlFor="Nom">Nom</label>
                            <input type="text" className="form-control" placeholder="Ici nom" required id="Nom" onChange={this.handleNameChange} />
                        </div>
                        
                        <div  className="mb-3"></div>
                        <label htmlFor="Prénom">Prénom</label>
                            <input type="text" className="form-control"placeholder="Ici prenom" required id="Prénom" onChange={this.handleLastNameChange} />
                        <div  className="mb-3">
                        <label htmlFor="Date de naissance">Date de naissance</label>
                            <input type="date" className="form-control" placeholder="01 Janvier 2022" required="Veuillez remplir ce champ" id="Date de naissance" onChange={this.handleBirthChange}/>
                        </div>
                        <div  className="mb-3"> 
                        <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" placeholder="@esti.mg" required  id="email" onChange={this.handleEmailChange} />
                        </div>
                        <div  className="mb-3">  
                        <label htmlFor="niveau">Niveau</label>
                            <input type="text" className="form-control" placeholder="L1/L2/L3" required  id="niveau" onChange={this.handleLevelChange}/>
                        </div>
                        <div  className="mb-3">  
                        <label htmlFor="filiere">Filière</label>
                            <input type="text" className="form-control" placeholder="DEV/RSI/CYB/MSI" id="filiere" onChange={this.handleFiliereChange}/>
                        </div>
                        <div  className="mb-3">   
                        <label htmlFor="sexe">Sexe</label>
                            <input type="text" className="form-control" placeholder="M/F" required id="sexe" onChange={this.handleSexeChange}/>
                        </div>
                        <div  className="mb-3">    
                        <label htmlFor="tel">Tel</label>
                            <input type="text" className="form-control" placeholder="034 38 121 08" required id="tel" onChange={this.handleTelChange}/>
                        </div>
                        <div  className="mb-3">    
                        <label htmlFor="pp">Profession Pere</label>
                            <input type="text" className="form-control" placeholder="Policier" required id="pp" onChange={this.handlePpChange}/>  
                        </div>
                        <div  className="mb-3">    
                        <label htmlFor="pm">Profession Mere</label>
                            <input type="text" className="form-control" placeholder=" Médecin" required id="pm" onChange={this.handlePmChange}/>  
                        </div>
                        <div  className="mb-3">   
                        <label htmlFor="Eo">Etablissement d'origine</label>
                            <input type="text" className="form-control" placeholder="ESTI" required  id="Eo" onChange={this.handleEoChange}/>
                        </div>
                        <div  className="mb-3">    
                        <label htmlFor="nom_entreprise">Nom de l'entreprise</label>
                            <input type="text" className="form-control" placeholder="Null"  id="nom_entreprise" onChange={this.handleEntrepriseChange}/>
                        </div>
                        <div  className="mb-3">    
                        <label htmlFor="duree">Durée de l'alternance</label>
                            <input type="text" className="form-control" placeholder="Null"  id="duree" onChange={this.handleDurationChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Ajouter</button> 
                    </form>
                </div>     
            </>
        )
    }
}

export default PostEtudiant;