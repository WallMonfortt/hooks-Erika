import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [coords, setCoords] = useState({x:0, y:0});

  const {x,y} = coords;

  useEffect(() => {
    const mouseMov = (e) =>{
      const coordes = {x:e.x, y: e.y};
      setCoords( coordes )
    }

    window.addEventListener('mousemove', mouseMov);
    console.log('Componente montado');
  }, [])
  return (
    <div>
      <h1>Me descubriste</h1>
      <p>
        x:{x} y:{y}
      </p>
    </div>
  )
}
