import React, { Component } from 'react'
import Product from './Product'
import ReviewForm from './ReviewForm'

export class StyleBoutik extends Component {

state = {
  isVisible: true
}

   isNotVisible = () => {
    this.setState({
      isVisible:false
    })
   } 

   isProductVisible = () => {
    this.setState({
      isVisible:true
    })
   } 
  
  render() {
    // {console.log(this.state.isVisible)};

    const productFalse = this.state.isVisible === true ? (

                  <div>
                    <Product 
                      visible={this.state.isVisible} 
                      unVisible={this.isNotVisible}
                  
                    />

                    
                  </div>

                    
                      
                    )  : null;



    return (
      <div>

        {productFalse}

        {/* <Product visible={this.state.isVisible} /> */}
        {/* {console.log(this.isProductVisible)} */}

        <ReviewForm 
          
          visible={this.state.isVisible}
          unVisible={this.isProductVisible}
        
        />

        <button onClick={this.isNotVisible}>isNotVisible</button> 

      </div>
    )
  }
}

export default StyleBoutik 
