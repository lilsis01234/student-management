import axios from "axios";
import React from "react";


class Niveau extends React.Component {
    state = {
        niveau: []
    }

    componentDidMount(){
             axios.get(`http://127.0.0.1:8000/api/etudiants/niveau`)
             .then(res => {
                 //console.log(res.data)
                 this.setState({niveau: res.data.niveau})
                 this.setState({zavatra: null})
                 this.setState({redirect: true});
                 //console.log(typeof(this.state.niveau))
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

export default Niveau