import React, { Component } from 'react'
import Car from './Car'

export class Form extends Component {

  state = {
    username:'',
    
  }

  handlePseudo = e => {
    this.setState({
      username: e.target.value,
    })
  }

  render() {
    return (
      <div>

        <h2> Formulaire commentaire </h2>
        
        <form action="">
          
          <div className="commentForm">
            <p className= " userName "style = {{backgroundColor :this.state.color}}>Affichage pseudo :  <span>{this.state.username}</span></p>

            <input 
              type="text" 
              value={this.state.username}
              onChange={this.handlePseudo}
            /> 
          </div>

          <Car color="red" height="100"/>

        </form>

      </div>
    )
  }
}

export default Form
