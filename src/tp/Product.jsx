import React, { Component } from 'react'
import BasketsConverse from  './image_product_react/Baskets-Converse.webp'
import ChemiseArmani from  './image_product_react/Chemise-Armani.webp'
import ChemiseGant from  './image_product_react/Chemise-Gant-Homme.webp'
import StanSmith from  './image_product_react/Stan_Smith_Vert.jpg'
import SweatCapuche from  './image_product_react/Sweat-a-Capuche.webp'
import TommyPull from  './image_product_react/Tommy-Pull-Rouge.webp'
import './tp.css'

export class Product extends Component {

  state = {
    products : [
      {src:BasketsConverse, name:"Basket Converse", prix: 35}, 
      {src:ChemiseArmani,  name:"Basket Converse", prix: 35}, 
      {src:ChemiseGant,  name:"Basket Converse", prix: 35}, 
      {src:StanSmith,  name:"Basket Converse", prix: 35}, 
      {src:SweatCapuche,  name:"Basket Converse", prix: 35}, 
      {src:TommyPull,  name:"Basket Converse", prix: 35}
    ]
  }
  
  lenght = this.state.products.length -1
  
    
  render() {
    
    return (
      <div className="Product">
        <h2>Notre collection de produit</h2>
        <div className='imgDiv'>
          {
           this.state.products.map((value, index)=>{
              return (
                <div>
                      <img src={this.state.products[index].src} alt="" className='img'/>
                      <h3>{this.state.products[index].name}</h3>
                      <button class="btn btn-primary" type="button">
                        Donner votre avis sur : <span> </span> 
                        <img 
                          src={this.state.products[index].src} 
                          className='imgSmall'
                          
                        />
                      </button>

                </div>
            )
           })
          }
        </div>
        
      </div>
    )
  }
}

export default Product
