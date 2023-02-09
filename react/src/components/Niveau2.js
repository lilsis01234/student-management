import axios from "axios";
import React from "react";

class Niveau2 extends React.Component {
    state = {
        niveau: []
    }

    componentDidMount(){
             axios.get(`http://127.0.0.1:8000/api/etudiants/niveau2`)
             .then(res => {         
                 this.setState({niveau: res.data.niveau2})
             })
             .catch(err=>console.log(err))
    }

    render(){
        return (
        <div className="container">
           
        </div>
        )
    }
}

export default Niveau2