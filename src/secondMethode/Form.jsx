import React, { Component } from 'react'
import Car from './Car'

export class Form extends Component {
  render() {
    return (
      <div>
        <Car color="red" height="400"/>
        {/* <hr className="hr"/> */}
        <h1> Commentaire </h1>
        Formulaire
      </div>
    )
  }
}

export default Form
