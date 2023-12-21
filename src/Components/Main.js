import React from 'react'
import Colorcard from './Colorcard'
import Data from './data.json'

const Main = () => {
  return (
    <div className='mainContainer'>
      {
        Data.map((item)=>{
            return <Colorcard color={item.color} colorName={item.colorName}/>
        })
      }
    </div>
  )
}

export default Main
