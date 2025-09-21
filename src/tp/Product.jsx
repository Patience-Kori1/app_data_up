import React, { Component } from 'react'
import BasketsConverse from  './image_product_react/Baskets-Converse.webp'
import ChemiseArmani from  './image_product_react/Chemise-Armani.webp'
import ChemiseGant from  './image_product_react/Chemise-Gant-Homme.webp'
import StanSmith from  './image_product_react/Stan_Smith_Vert.jpg'
import SweatCapuche from  './image_product_react/Sweat-a-Capuche.webp'
import TommyPull from  './image_product_react/Tommy-Pull-Rouge.webp'
import './tp.css'
import ReviewForm from './ReviewForm'
export class Product extends Component {

  state = {
    products : [
      {src:BasketsConverse, name:"Basket Converse", prix: 35}, 
      {src:ChemiseArmani,  name:"Chemise Armani", prix: 35}, 
      {src:ChemiseGant,  name:"Chemise Gant", prix: 35}, 
      {src:StanSmith,  name:"Basket Stan Smith", prix: 35}, 
      {src:SweatCapuche,  name:"SweatCapuche", prix: 35}, 
      {src:TommyPull,  name:"Tommy Pull", prix: 35}
    ]
  }
  
  lenght = this.state.products.length -1
  
    
  render() {

    // console.log(this.props.unVisible)

    // console.log(this.props.visible)

    

    return (
      <div className="Product">
        <h2>Notre collection de produit</h2>

        <div className='imgDiv'>
          {
           this.state.products.map((value, index)=>{
              return (
                <div key={index} >
                  {console.log({index})} 
                      <img src={this.state.products[index].src} alt="" className='img'/>

                      <h4>{this.state.products[index].name}</h4>

                      <button 
                        className="btn btn-primary" 
                        type="button"
                        onClick={this.props.unVisible }

                      >

                          Donner votre avis sur : <span> </span> 
                        <img 
                          src={this.state.products[index].src} 
                          className='imgSmall'  
                        />

                      </button>
                      {/* {console.log(this.props.unVisible)} */}

                    <div className="hidden">
                      <ReviewForm
                      
                      srcArticle= {this.state.products[index].src} 
                      />
                    </div>
                      
                      
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
