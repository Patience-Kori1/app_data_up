import React from 'react'
import car from './img_car.png'

const Car = (props) => {
  return (
    <div className="Car">

      <hr className="hr"/>

      <h2>Image en SVG</h2>

      <svg
        className='carBorder'
        xmlns="http://www.w3.org/2000/svg" // Namespace SVG obligatoire
        width="120"
        height={props.height}
      >
        
        <g>
          <title>Background</title>
          <rect fill="#b6b310" id="canvas_background" height="200" width="100"/>
        </g>
        <g>
          <title>Layer 1</title>
          <path fill="#222222" fillRule="nonzero" strokeWidth="12.257193" width="250" d="M30 18 L45 8 L80 8 L95 18 Z"  />
        </g>

        
        {/* <rect x="10" y="18" width="85" height="22" rx="6" fill="blue" />

       
        <path d="M30 18 L45 8 L80 8 L95 18 Z" fill="yellow" />

        
        <circle cx="35" cy="46" r="6" fill="#20b610" />
        <circle cx="80" cy="46" r="6" fill="#ea5fda" /> */}

      </svg>

      <h2>Image en PNG</h2>

      <img src={car} alt="" />
      
    </div>
  )
}

export default Car
