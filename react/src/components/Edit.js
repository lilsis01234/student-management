import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'


const Edit = () => {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [sexe, setSexe] = useState('')
    const [date_naissance, setNaissance] = useState('')
    const [profession_pere, setProfessionPere] = useState('')
    const [profession_mere, setProfessionMere] = useState('')
    const [nom_entreprise, setNomEntreprise] = useState('')
    const [duree, setDuree] = useState('')
    const [niveau, setNiveau] = useState('')
    const [filiere, setFiliere] = useState('')
    const [abandon, setAbandon] = useState('')
    const [Tel, setTel] = useState('')
    const [etablissement_origine, setEtablissement_origine] = useState('')
    const [validation, setValidation] = useState(false)
    const{id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`http://127.0.0.1:8000/api/update/${id}`, {
            nom: nom,
            prenom: prenom,
            email: email,
            sexe: sexe,
            date_naissance: date_naissance,
            nom_entreprise: nom_entreprise,
            duree: duree,
            niveau: niveau,
            filiere: filiere,
            abandon: abandon,
            profession_pere: profession_pere,
            profession_mere: profession_mere,
            telephone: Tel,
            etablissement_origine: etablissement_origine
        })
        setValidation(true)
    }

    const alert = (validation === true) ? (<div className="alert alert-success mt-4"><strong>Modification Enregistrée !</strong></div>) : ""

    useEffect((id) => {
        const getEtudiantById = async (id) => {
            const res = await axios.post(`http://127.0.0.1:8000/api/etudiants/${id}`)
            setNom(res.data.nom)
            setPrenom(res.data.prenom)
            setEmail(res.data.email)
            setSexe(res.data.sexe)
            setNaissance(res.data.date_naissance)
            setNomEntreprise(res.data.nom_entreprise)
            setDuree(res.data.duree)
            setNiveau(res.data.niveau)
            setFiliere(res.data.filiere)
            setAbandon(res.data.abandon)
            setProfessionPere(res.data.profession_pere)
            setProfessionMere(res.data.profession_mere)
            setTel(res.data.telephone)
            setEtablissement_origine(res.data.etablissement_origine)
        }
        getEtudiantById()
    }, [])

    return (
        <div className="container w-50">
            <h2>Modifier un Etudiant</h2>
            <form className="form-inline "  method="POST" onSubmit={update}>
                <div  className="mb-3">
                <label htmlFor="Nom">Nom</label>
                    <input type="text" className="form-control"  value={nom} required id="Nom"  onChange={(e) => setNom(e.target.value)}/>
                </div>
                
                <div  className="mb-3"></div>
                <label htmlFor="Prénom">Prénom</label>
                    <input type="text" className="form-control" value={prenom} required id="Prénom" onChange={(e) => setPrenom(e.target.value)}/>
                <div  className="mb-3">
                <label htmlFor="Date de naissance">Date de naissance</label>
                    <input type="date" className="form-control" value={date_naissance} required="Veuillez remplir ce champ" id="Date de naissance"  onChange={(e) => setNaissance(e.target.value)} />
                </div>
                <div  className="mb-3"> 
                <label htmlFor="email">Email</label>
                    <input type="email" className="form-control"  value={email}required  id="email"  onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div  className="mb-3">  
                <label htmlFor="niveau">Niveau</label>
                    <input type="text" className="form-control"  value={niveau} required  id="niveau"  onChange={(e) => setNiveau(e.target.value)} />
                </div>
                <div  className="mb-3">  
                <label htmlFor="filiere">Filiere</label>
                    <input type="text" className="form-control"  value={filiere} required  id="filiere"  onChange={(e) => setFiliere(e.target.value)} />
                </div>
                <div  className="mb-3">   
                <label htmlFor="sexe">Sexe</label>
                    <input type="text" className="form-control"  value={sexe} required id="sexe"  onChange={(e) => setSexe(e.target.value)} />
                </div>
                <div  className="mb-3">    
                <label htmlFor="tel">Tel</label>
                    <input type="text" className="form-control"  value={Tel}required id="tel"  onChange={(e) => setTel(e.target.value)}/>
                </div>
                <div  className="mb-3">    
                <label htmlFor="pp">Profession Pere</label>
                    <input type="text" className="form-control"  value={profession_pere} required id="pp"  onChange={(e) => setProfessionPere(e.target.value)}/>  
                </div>
                <div  className="mb-3">    
                <label htmlFor="pp">Profession Mere</label>
                    <input type="text" className="form-control"  value={profession_mere} required id="pm"  onChange={(e) => setProfessionMere(e.target.value)}/>  
                </div>
                <div  className="mb-3">   
                <label htmlFor="Eo">Etablissement d'origine</label>
                    <input type="text" className="form-control"  value={etablissement_origine} required  id="Eo"  onChange={(e) => setEtablissement_origine(e.target.value)} />
                </div>
                <div  className="mb-3">    
                <label htmlFor="nom_entreprise">Nom de l'entreprise</label>
                    <input type="text" className="form-control"  value={nom_entreprise}  id="nom_entreprise"   onChange={(e) => setNomEntreprise(e.target.value)}/>
                </div>
                <div  className="mb-3">    
                <label htmlFor="duree">Durée de l'alternance</label>
                    <input type="text" className="form-control"  value={duree} id="duree"  onChange={(e) => setDuree(e.target.value)} />
                </div>
                <div  className="mb-3">    
                <label htmlFor="duree">Abandon</label>
                    <input type="text" className="form-control" value={abandon} id="abandon"  onChange={(e) => setAbandon(e.target.value)} />
                </div>
                {alert}
                <button type="submit" className="btn btn-primary">Modifier</button> 
            </form>
        </div>     
    )
}

export default Edit 
