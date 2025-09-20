import React from 'react'


const ReviewForm = (props) => {

    // console.log(props.visible)
    // console.log(props.unVisible)

   console.log(props.srcArticle)
    
const productTrue = props.visible === false ? props.visible === false : null;

  return (
    <div>
        <h5>Votre avis nous intéresse</h5>
        {/* {console.log(props.visible)}
        {console.log(props.unVisible)} */}

        <img src={props.srcArticle} alt="" className='img'/>
        
        <button onClick={props.unVisible}>Retour à l'accueil</button> 
    </div>
  )
}

export default ReviewForm