import axios from "axios";
import React from "react";

class Niveau3 extends React.Component {
    state = {
        niveau: []
    }

    componentDidMount(){
        if(localStorage.getItem('token')){
             let headers = {
                 headers: {
                     'API-TOKEN': localStorage.getItem('token')
                 }
             }
             axios.get(`http://127.0.0.1:8000/api/etudiants/niveau3`, headers)
             .then(res => {
                 console.log(res.data)
                 this.setState({niveau: res.data})
             })
             .catch(err=>console.log(err))
 
         } else {
             this.setState({redirect: true});
         }
     }
    

    render(){
        return (
            <div className="container">
           
            </div>
        )
    }
}

export default Niveau3