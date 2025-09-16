import React, { Component } from 'react'
import Car from './Car'

export class Form extends Component {

  state = {
    username:'',
    color: '',
    colors : ["", "red", "Indigo", "DarkGreen", "DarkBlue", "chocolate"], // on met le vide pour que la première valeur soit vide
    comment : ''
  }

  handlePseudo = e => {
    this.setState({
      username: e.target.value,
    })
  }

  handleColor = e => {
    this.setState({
      color: e.target.value
    })
  }

  handleComments = e => {
    this.setState({
      comment: e.target.value
    })
  }

  render() {
    return (
      <div>

        <h2> Formulaire commentaire </h2>
        
        <form action="">
          
          <div className="commentForm">
            <p className= " userName "style = {{backgroundColor :this.state.color}}>Affichage pseudo :  <span>{this.state.username}</span></p>

            <p className= " userComment " style = {{ color :this.state.color}}>Commentaire  :  <span>{this.state.comment}</span></p>
            <label htmlFor="Pseudo">Saisie pseudo : </label>

            <input 
              type="text" 
              value={this.state.username}
              onChange={this.handlePseudo}
            /> 
          </div>

          <div className="commentForm">
              <label htmlFor="color" >Couleur : </label>

              <select 
                name="color" 
                value= {this.state.color} 
                onChange={this.handleColor}
              >

                {
                  this.state.colors.map((color, index) =>{
                    return <option key={index} value= {color}> {color}</option>
                  })
                }

                {/* Si on implémente les option du select en dure et non avec map()
                <option value="" className="vert"> vert</option>
                <option value="" className="rouge"> rouge </option>
                <option value="" className="orange"> orange </option> */}

              </select>
          </div>

          <div className="commentForm">
            <label htmlFor="">Commentaire</label>
            <textarea value= {this.state.comment} onChange={this.handleComments}></textarea>
          </div>

          <Car color="red" height="100"/>

        </form>

      </div>
    )
  }
}

export default Form
