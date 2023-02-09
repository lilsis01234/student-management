import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import PostEtudiant from "./PostEtudiant";
import Etudiant from "./Etudiants";
import Niveau from './Niveau';
import Niveau2 from './Niveau2'
import Niveau3 from './Niveau3'
import Niveau4 from './Niveau4'
import Niveau5 from './Niveau5'
import Feminin from "./feminin";
import Masculin from "./masculin";
import edm from './edm.png';
import Abandon from "./abandon";
import MasculinL1 from "./masculinL1";
import MasculinL2 from "./masculinL2";
import MasculinL3 from "./masculinL3";
import MasculinM1 from "./masculinM1";
import MasculinM2 from "./masculinM2";
import FemininL1 from "./femininL1";
import FemininL2 from "./femininL2";
import FemininL3 from "./femininL3";
import FemininM1 from "./femininM1";
import FemininM2 from "./femininM2";
import Recherche from "./recherche";
import Devfeminin from "./devfeminin";
import Devmasculin from "./devmasculin";
import Rsifeminin from "./rsifeminin";
import Rsimasculin from "./rsimasculin";
import Msifeminin from "./msifeminin";
import Msimasculin from "./msimasculin";
import Cybfeminin from "./cybfeminin";
import Cybmasculin from "./cybmasculin";
import Edit from "./Edit";
// import Dashboard from "./dashboard";
import Test from "./Test";

class Navbar extends React.Component {
    state = {
        token: null
    }

    logout = () => {
        localStorage.setItem('token', '')
        localStorage.clear()
        this.setState({token: null})
    }

    render() {
        return (
            <>
                <Router>
                <nav className="navbar navbar-expand-lg bg-ligth navbar-light">
                    <img className="logoedm" src={edm} alt=""/>
                        <Link className="navbar-brand" to="/">Accueil</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            { localStorage.getItem('token')
                            ? 
                            <>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/etudiants/new">Ajout</Link>
                                </li>
                                <li className="nav-item active">                                    
                                        <Link className="nav-link" to="/feminin">Etudiantes</Link>              
                                </li>
                                <li className="nav-item active">                                    
                                        <Link className="nav-link" to="/masculin">Etudiants</Link>              
                                </li>
                                <li className="nav-item">
                             <Link className="nav-link" to="/recherche">Rechercher</Link>  
                                </li>
                                <li className="nav-item active">                                    
                                        <Link className="nav-link" to="/abandon">Abandons</Link>              
                                </li>
                                <li className="nav-item active">                                    
                                        <Link className="nav-link" to="/dashboard">Statistiques</Link>              
                                </li>
                                <li className="nav-item">
                                    <button className="btn" onClick={this.logout}>Déconnexion</button>
                                </li>
                            </>
                            :
                                <>
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/login">Connexion</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Inscription</Link>
                                    </li>
                                </>
                            }
                            
                        </ul>
                    </div>
                </nav> 

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Connexion} />
                        <Route path="/register" component={Inscription} /> 
                        <Route path="/etudiants/new" component={PostEtudiant} />
                        <Route path="/etudiants/:id" component={Etudiant} />
                        <Route path="/etudiants/niveau" component={Niveau} />
                        <Route path="/etudiants/niveau2" component={Niveau2} />
                        <Route path="/etudiants/niveau3" component={Niveau3} />
                        <Route path="/etudiants/niveau4" component={Niveau4} />
                        <Route path="/etudiants/niveau5" component={Niveau5} />
                        <Route path="/feminin" component={Feminin} />
                        <Route path="/masculin" component={Masculin} />
                        <Route path="/abandon" component={Abandon} />
                        <Route path="/masculinL1" component={MasculinL1} />
                        <Route path="/masculinL2" component={MasculinL2} />
                        <Route path="/masculinL3" component={MasculinL3} />
                        <Route path="/masculinM1" component={MasculinM1} />
                        <Route path="/masculinM2" component={MasculinM2} />
                        <Route path="/femininL1" component={FemininL1} />
                        <Route path="/femininL2" component={FemininL2} />
                        <Route path="/femininL1" component={FemininL3} />
                        <Route path="/femininM1" component={FemininM1} />
                        <Route path="/femininM2" component={FemininM2} />
                        <Route path="/recherche" component={Recherche} />
                        <Route path="/rsifeminin" component={Rsifeminin} />
                        <Route path="/rsimasculin" component={Rsimasculin} />
                        <Route path="/msifeminin" component={Msifeminin} />
                        <Route path="/msimasculin" component={Msimasculin} />
                        <Route path="/devfeminin" component={Devfeminin} />
                        <Route path="/devmasculin" component={Devmasculin} />
                        <Route path="/cybfeminin" component={Cybfeminin} />
                        <Route path="/cybmasculin" component={Cybmasculin} />
                        <Route path="/edit/:id" component={Edit} />
                        <Route path="/dashboard" component={Test} />
                        {/* <Route path="/dashboard" component={Dashboard} /> */}
                    </Switch>
                </Router>
            </>
        )
    }
}

export default Navbar;