import React from 'react'

const Toto = props => {
    
    const btnReponseToto = props.leState.messageMaman !== null ? (<button onClick = {props.reponseToto}> Réponse</button>) : (<button disabled> Réponse</button>) /*null */

  return (
    <div>
        <h1>{props.name}</h1>

        {btnReponseToto}
        
        <p>{props.leState.messageToto}</p>
    </div>
  )
}

export default Toto
